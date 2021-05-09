


<script>
  $(document).ready(function () {
  //your code here

Currency.format = 'money_format';

var format = Currency.format;
  console.log("Format :",format);
  
var shopCurrency = '';

console.log("shopCurrency :",shopCurrency);
  
/* Sometimes merchants change their shop currency, let's tell our JavaScript file */
Currency.moneyFormats[shopCurrency].money_with_currency_format = "";
Currency.moneyFormats[shopCurrency].money_format = "";
  
/* Default currency */
var defaultCurrency = 'USD';

console.log("defaultCurrency :",defaultCurrency);
  
/* Cookie currency */
var cookieCurrency = Currency.cookie.read();
  console.log("cookieCurrency :",cookieCurrency);
var currency_selector = "span.money";
/* Fix for customer account pages */
$('span.money span.money').each(function() {
  $(this).parents('span.money').removeClass('money');
});
/* Saving the current price */
$('span.money').each(function() {
  $(this).attr('data-currency-', $(this).html());
});
// If there's no cookie.
if (cookieCurrency == null) {
  if (shopCurrency !== defaultCurrency) {
    Currency.convertAll(shopCurrency, defaultCurrency,"span.money",format);
  }
  else {
    Currency.currentCurrency = defaultCurrency;
  }
}
// If the cookie value does not correspond to any value in the currency dropdown.
else if ($('[name=currency]').length && $('[name=currency] option[value=' + cookieCurrency + ']').length === 0) {
  Currency.currentCurrency = shopCurrency;
  Currency.cookie.write(shopCurrency);
}
else if (cookieCurrency === shopCurrency) {
  Currency.currentCurrency = shopCurrency;
}
else {
  Currency.convertAll(shopCurrency, cookieCurrency,currency_selector,format);
}
  
$('[name=currency]').val(Currency.currentCurrency).change(function() {
  var newCurrency = $(this).val();
  Currency.convertAll(Currency.currentCurrency, newCurrency,".money",Currency.moneyFormats[shopCurrency].money_with_currency_format);
  $('.selected-currency').text(Currency.currentCurrency);
});
var original_selectCallback = window.selectCallback;
var selectCallback = function(variant, selector) {
  original_selectCallback(variant, selector);
  Currency.convertAll(shopCurrency, $('[name=currency]').val());
  $('.selected-currency').text(Currency.currentCurrency);
};
$('body').on('ajaxCart.afterCartLoad', function(cart) {
  Currency.convertAll(shopCurrency, $('[name=currencies]').val());
  $('.selected-currency').text(Currency.currentCurrency);  
});
$('.selected-currency').text(Currency.currentCurrency);
  
  });
</script>




