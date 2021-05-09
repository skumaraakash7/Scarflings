setTimeout(function(){
var cookieCurrency = Currency.cookie.read();
      var oldCurrency = window.oldCurrency;
var currentCurrency = window.oldCurrency;
  if(Currency.currentCurrency == null){
	Currency.currentCurrency = currentCurrency;  
  }

var newCurrency = window.newCurrency;
var selector = "span.money";
var selector = Currency.selector;
/* Fix for customer account pages */
$('span.money span.money').each(function() {
  $(this).parents('span.money').removeClass('money');
});

// If there's no cookie.
if (cookieCurrency == null) {
  if (Currency.shopCurrency !== Currency.defaultCurrency) {
    console.log("consversion running from 1");
    Currency.convertAll(Currency.shopCurrency, Currency.defaultCurrency,"span.money",Currency.format);
  }
  else {
    
    if(Currency.currentCurrency == null){
      console.log("consversion running from 1.1");
      Currency.currentCurrency = Currency.defaultCurrency;
      console.log(Currency.currentCurrency);
    }else{
      
       setTimeout(function(){
          console.log("consversion running from 1.3 cokieCurrency");
          Currency.currentCurrency = Currency.currentCurrency;
         
         /*Currency.convertAll(Currency.shopCurrency, Currency.currentCurrency,"span.money",Currency.format);*/
           if($("#currenciesSel").find("option[value=" + Currency.cookieCurrency +"]").length > 0  && $("#currenciesSel").find("option[value=" + window.newCurrency +"]").length > 0){
             console.log("If at :window.newCurrency setting", window.newCurrency);
               $("#currenciesSel option").attr("selected",false);
               $("#currenciesSel").find("option[value=" + window.newCurrency +"]").attr('selected', true).trigger("change");
               $("#currenciesSel").val(window.newCurrency);
           }else if($("#currenciesSel").find("option[value=" + Currency.cookieCurrency +"]").length > 0  && $("#currenciesSel").find("option[value=" + window.newCurrency +"]").length == 0){
             console.log("Else If at : setting", Currency.cookieCurrency);
               $("#currenciesSel option").attr("selected",false);
               $("#currenciesSel").find("option[value=" + Currency.cookieCurrency +"]").attr('selected', true).trigger("change");
               $("#currenciesSel").val(Currency.cookieCurrency);
             
           }else{
             	console.log("Else : Setting Default USD");
               $("#currenciesSel option").attr("selected",false);
               $("#currenciesSel").find("option[value=USD]").attr('selected', true).trigger("change");
               $("#currenciesSel").val("USD");
           
           }
         
         },5000);
    
    }
    
  }
}
// If the cookie value does not correspond to any value in the currency dropdown.
else if ($('[name=currency]').length && $('[name=currency] option[value=' + cookieCurrency + ']').length === 0) {
  console.log("consversion running from 2");
  Currency.currentCurrency = currentCurrency;
  /*Currency.cookie.write(Currency.shopCurrency);*/
}
else if (cookieCurrency === Currency.shopCurrency && cookieCurrency != Currency.currentCurrency) {
  
  console.log("consversion running from 3");
  console.log("cookieCurrency",cookieCurrency);
  console.log("Currency.shopCurrency",Currency.shopCurrency);
  Currency.currentCurrency = Currency.shopCurrency;
}
else {
  /*console.log("consversion running from 4");*/
  /*Currency.convertAll(Currency.shopCurrency, Currency.cookieCurrency,Currency.selector,Currency.format);*/
}
  
$('#currenciesSel').on("change",function() {
  
  var newCurrency = $(this).val();
  console.log(newCurrency);
  Currency.currentCurrency = newCurrency;
  Currency.cookieCurrency = newCurrency;
  Currency.convertAll(currentCurrency, newCurrency,Currency.selector,Currency.format);
  console.log("consversion running from 5");
  /*$("#currency_switcher_submit_button").trigger("click");*/
  
  /*$(this).closest("form").submit();*/
});

 $("#currency_form").submit(function(event) {

      /* stop form from submitting normally */
      event.preventDefault();
   		


      /* get the action attribute from the <form action=""> element */
   	  Currency.cookie.write($('#currenciesSel').val());
   	  $.cookie('currency', $('#currenciesSel').val(), {
              expires: 14,
              path: '/',
              domain: window.location.hostname
            }
          );
   
   		
      var $form = $( this ),
          url = $form.attr( 'action' );

      /* Send the data using post with element id name and name2*/
      var posting = $.post( url, { form_type: "currency", utf8: "✓",return_to: "/",currency: $('[name=currency]').val() } );

      /* Alerts the results */
      posting.done(function( data ) {
        /*console.log(data);*/
        ShowCurrencySuccessMessage();
      });
    });
  
var original_selectCallback = window.selectCallback;

var selectCallback = function(variant, selector) {
  original_selectCallback(variant, Currency.selector);
  Currency.convertAll(Currency.shopCurrency, $('[name=currency]').val());
  
};
$('body').on('ajaxCart.afterCartLoad', function(cart) {
  Currency.convertAll(Currency.shopCurrency, $('[name=currencies]').val());
  
});


$(".locale-bar__close-button").on("click",function(){
  $.cookie("top_currency_bar_hide", true);
  $("#top_currency_bar").hide();
  $("#top_currency_bar").removeClass("topbar_added");
  
});
  
 
  
    },3000);