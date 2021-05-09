$("#button-cart").click(function(){
  $(this).attr('disabled',true);
  setTimeout(function(){ $(this).attr('disabled',false); }, 3000);
});

if ((typeof Shopify) === 'undefined') { Shopify = {}; }

function attributeToString(attribute) {
  if ((typeof attribute) !== 'string') {
    attribute += '';
    if (attribute === 'undefined') {
      attribute = '';
    }
  }
  return jQuery.trim(attribute);
}


if ( !Shopify.formatMoney ) {
  Shopify.formatMoney = function(cents, format) {
    var value = '',
        placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
        formatString = (format || this.money_format);

    if (typeof cents == 'string') {
      cents = cents.replace('.','');
    }

    function defaultOption(opt, def) {
      return (typeof opt == 'undefined' ? def : opt);
    }

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = defaultOption(precision, 2);
      thousands = defaultOption(thousands, ',');
      decimal   = defaultOption(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number/100.0).toFixed(precision);

      var parts   = number.split('.'),
          dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
          cents   = parts[1] ? (decimal + parts[1]) : '';

      return dollars + cents;
    }

    switch(formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  };
}

Shopify.onProduct = function(product) {
  // alert('Received everything we ever wanted to know about ' + product.title);
};

Shopify.onCartUpdate = function(cart) {
  // alert('There are now ' + cart.item_count + ' items in the cart.');
};

Shopify.updateCartNote = function(note, callback) {
  var params = {
    type: 'POST',
    url: '/cart/update.js',
    data: 'note=' + attributeToString(note),
    dataType: 'json',
    success: function(cart) {
      if ((typeof callback) === 'function') {
        callback(cart);
      }
      else {
        Shopify.onCartUpdate(cart);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      Shopify.onError(XMLHttpRequest, textStatus);
    }
  };
  jQuery.ajax(params);
};

Shopify.onError = function(XMLHttpRequest, textStatus) {
  var data = eval('(' + XMLHttpRequest.responseText + ')');
  if (!!data.message) {
    alert(data.message + '(' + data.status  + '): ' + data.description);
  } else {
    alert('Error : ' + Shopify.fullMessagesFromErrors(data).join('; ') + '.');
  }
};


Shopify.addItem = function(variant_id, quantity, callback) {
  var quantity = quantity || 1;
  var params = {
    type: 'POST',
    url: '/cart/add.js',
    data: 'quantity=' + quantity + '&id=' + variant_id,
    dataType: 'json',
    success: function(line_item) {
      if ((typeof callback) === 'function') {
        callback(line_item);
      }
      else {
        Shopify.onItemAdded(line_item);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      Shopify.onError(XMLHttpRequest, textStatus);
    }
  };
  jQuery.ajax(params);
};

Shopify.addItemFromForm = function(form, callback, errorCallback) {
  var params = {
    type: 'POST',
    url: '/cart/add.js',
    data: jQuery(form).serialize(),
    dataType: 'json',
    success: function(line_item) {
      if ((typeof callback) === 'function') {
        callback(line_item, form);
      }
      else {
        Shopify.onItemAdded(line_item, form);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      if ((typeof errorCallback) === 'function') {
        errorCallback(XMLHttpRequest, textStatus);
      }
      else {
        Shopify.onError(XMLHttpRequest, textStatus);
      }
    }
  };
  jQuery.ajax(params);
};

// Get from cart.js returns the cart in JSON
Shopify.getCart = function(callback) {
  jQuery.getJSON('/cart.js', function (cart, textStatus) {
    if ((typeof callback) === 'function') {
      callback(cart);
    }
    else {
      Shopify.onCartUpdate(cart);
    }
  });
};

// GET products/<product-handle>.js returns the product in JSON
Shopify.getProduct = function(handle, callback) {
  jQuery.getJSON('/products/' + handle + '.js', function (product, textStatus) {
    if ((typeof callback) === 'function') {
      callback(product);
    }
    else {
      Shopify.onProduct(product);
    }
  });
};

// POST to cart/change.js returns the cart in JSON
Shopify.changeItem = function(line, quantity, callback) {
  var params = {
    type: 'POST',
    url: '/cart/change.js',
    data:  'quantity=' + quantity + '&line=' + line,
    dataType: 'json',
    success: function(cart) {
      if ((typeof callback) === 'function') {
        callback(cart);
      }
      else {
        Shopify.onCartUpdate(cart);
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      Shopify.onError(XMLHttpRequest, textStatus);
    }
  };
  jQuery.ajax(params);
};

var ajaxifyShopify = (function(module, $) {

  'use strict';

  var init;

  
  var settings, isUpdating, cartInit, $drawerHeight, $cssTransforms, $cssTransforms3d, $nojQueryLoad, $w, $body, $html;

  
  var $formContainer, $btnClass, $wrapperClass, $addToCart, $flipClose, $flipCart, $flipContainer, $cartCountSelector, $cartCostSelector, $toggleCartButton, $modal, $cartContainer, $drawerCaret, $modalContainer, $modalOverlay, $closeCart, $drawerContainer, $prependDrawerTo, $callbackData={};

  var updateCountPrice, flipSetup, revertFlipButton, modalSetup, showModal, sizeModal, hideModal, drawerSetup, showDrawer, hideDrawer, sizeDrawer, loadCartImages, formOverride, itemAddedCallback, itemErrorCallback, cartUpdateCallback, setToggleButtons, flipCartUpdateCallback, buildCart, cartTemplate, adjustCart, adjustCartCallback, createQtySelectors, qtySelectors, scrollTop, toggleCallback, validateQty;

  init = function (options) {

    
    settings = {
      method: 'drawer', 
      formSelector: 'form[action^="/cart/add"]',
      addToCartSelector: 'input[type="submit"]',
      cartCountSelector: null,
      cartCostSelector: null,
      toggleCartButton: null,
      btnClass: null,
      wrapperClass: null,
      useCartTemplate: false,
      moneyFormat: '${{amount}}',
      disableAjaxCart: false,
      enableQtySelectors: true,
      prependDrawerTo: 'body',
      onToggleCallback: null
    };

    $.extend(settings, options);

    
    settings.method = settings.method.toLowerCase();

    $formContainer     = $(settings.formSelector);
    $btnClass          = settings.btnClass;
    $wrapperClass      = settings.wrapperClass;
    $addToCart         = $formContainer.find(settings.addToCartSelector);
    $flipContainer     = null;
    $flipClose         = null;
    $cartCountSelector = $(settings.cartCountSelector);
    $cartCostSelector  = $(settings.cartCostSelector);
    $toggleCartButton  = $(settings.toggleCartButton);
    $modal             = null;
    $prependDrawerTo   = $(settings.prependDrawerTo);

    $cssTransforms   = Modernizr.csstransforms;
    $cssTransforms3d = Modernizr.csstransforms3d;
	$w    = $(window);
    $body = $('body');
    $html = $('html');

    
    isUpdating = false;

    
    $nojQueryLoad = $html.hasClass('lt-ie9');
    if ($nojQueryLoad) {
      settings.useCartTemplate = false;
    }

    
    if (settings.enableQtySelectors) {
      qtySelectors();
    }

    
    if (!settings.disableAjaxCart) {
    
      switch (settings.method) {
        case 'flip':
          flipSetup();
          break;

        case 'modal':
          modalSetup();
          break;

        case 'drawer':
          drawerSetup();
          break;
      }

      $(document).keyup( function (evt) {
        if (evt.keyCode == 27) {
          switch (settings.method) {
            case 'flip':
            case 'drawer':
              hideDrawer();
              break;
            case 'modal':
              hideModal();
              break;
          }
        }
      });

      if ( $addToCart.length ) {
      
        formOverride();
      }
    }

    adjustCart();
  };

  updateCountPrice = function (cart) {
    if ($cartCountSelector) {
      $cartCountSelector.html(cart.item_count).removeClass('hidden-count');

      if (cart.item_count === 0) {
        $cartCountSelector.addClass('hidden-count');
      }
    }
    if ($cartCostSelector) {
      $cartCostSelector.html(Shopify.formatMoney(cart.total_price, settings.moneyFormat));
    }
  };

  flipSetup = function () {
    
    drawerSetup();

    if ( !$addToCart.length ) {
      return
    }

    $addToCart.addClass('flip-front').wrap('<div class="flip"></div>');

    var checkoutBtn = $('<a href="/cart" class="flip-back" style="background-color: #C00; color: #fff;" id="flip-checkout">' + "Checkout" + '</a>').addClass($btnClass),
        flipLoader = $('<span class="ajaxifyCart-loader"></span>'),
        flipExtra = $('<div class="flip-extra">' + "or" + ' <a href="#" class="flip-cart">' + "View Cart" + ' (<span></span>)</a></div>');

    checkoutBtn.insertAfter($addToCart);
    flipLoader.insertAfter(checkoutBtn);

    
    $flipContainer = $('.flip');

    if (!$cssTransforms3d) {
      $flipContainer.addClass('no-transforms')
    }

    
    flipExtra.insertAfter($flipContainer);
    $flipCart = $('.flip-cart');

    $flipCart.on('click', function(e) {
      e.preventDefault();
      showDrawer(true);
    });

    $('input[type="checkbox"], input[type="radio"], select', $formContainer).on('click', function() {
      revertFlipButton();
    })
  };

  revertFlipButton = function () {
    $flipContainer.removeClass('is-flipped');
  };

  modalSetup = function () {
    var source   = $("#modalTemplate").html(),
        template = Handlebars.compile(source);
	$body.append(template).append('<div id="ajaxifyCart-overlay"></div>');
	$modalContainer = $('#ajaxifyModal');
    $modalOverlay   = $('#ajaxifyCart-overlay');
    $cartContainer  = $('#ajaxifyCart');

    $modalOverlay.on('click', hideModal);
	$modalContainer.prepend('<button class="ajaxifyCart--close" title="' + "Close Cart" + '">' + "Close Cart" + '</button>');
    $closeCart = $('.ajaxifyCart--close');
    $closeCart.on('click', hideModal);

    if (!$cssTransforms) {
      $modalContainer.addClass('no-transforms')
    }
	$(window).on({
      orientationchange: function(e) {
        if ($modalContainer.hasClass('is-visible')) {
          sizeModal('resize');
        }
      }, resize: function(e) {
        
        if (!$nojQueryLoad && $modalContainer.hasClass('is-visible')) {
          sizeModal('resize');
        }
      }
    });

    setToggleButtons();
  };

  showModal = function (toggle) {
    $body.addClass('ajaxify-modal--visible');
    
    if ( !cartInit && toggle ) {
      Shopify.getCart(cartUpdateCallback);
    } else {
      sizeModal();
    }
  };

  sizeModal = function(isResizing) {
    if (!isResizing) {
      $modalContainer.css('opacity', 0);
    }

    
    $modalContainer.css({
      'margin-left': - ($modalContainer.outerWidth() / 2),
      'opacity': 1
    });

    $modalContainer.addClass('is-visible');

    scrollTop();

    toggleCallback({
      'is_visible': true
    });
  };

  hideModal = function (e) {
    $body.removeClass('ajaxify-modal--visible');
    if (e) {
      e.preventDefault();
    }

    if ($modalContainer) {
      $modalContainer.removeClass('is-visible');
      $body.removeClass('ajaxify-lock');
    }

    toggleCallback({
      'is_visible': false
    });
  };

  drawerSetup = function () {
    
    var source   = $("#drawerTemplate").html(),
        template = Handlebars.compile(source),
        data = {
          wrapperClass: $wrapperClass
        };

    
    $prependDrawerTo.prepend(template(data));

    
    $drawerContainer = $('#ajaxifyDrawer');
    $cartContainer   = $('#ajaxifyCart');
    $drawerCaret     = $('.ajaxifyDrawer-caret > span');

    
    setToggleButtons();

    
    var timeout;
    $(window).resize(function() {
      clearTimeout(timeout);
      timeout = setTimeout(function(){
        if ($drawerContainer.hasClass('is-visible')) {
          positionCaret();
          sizeDrawer();
        }
      }, 500);
    });

    
    positionCaret();

    
    function positionCaret() {
      if ($toggleCartButton.offset()) {
        
        var togglePos = $toggleCartButton.offset(),
            toggleWidth = $toggleCartButton.outerWidth(),
            toggleMiddle = togglePos.left + toggleWidth/2;

        $drawerCaret.css('left', toggleMiddle + 'px');
      }
    }
  };

  showDrawer = function (toggle) {
    
    if (settings.method == 'flip') {
      Shopify.getCart(flipCartUpdateCallback);
    }
    
    else if ( !cartInit && toggle) {
      Shopify.getCart(cartUpdateCallback);
    }
    
    else if ( cartInit && toggle ) {
      sizeDrawer();
    }

    
    $drawerContainer.addClass('is-visible');

    scrollTop();

    toggleCallback({
      'is_visible': true
    });
  };

  hideDrawer = function () {
    $drawerContainer.removeAttr('style').removeClass('is-visible');
    scrollTop();
    toggleCallback({
      'is_visible': false
    });
  };

  sizeDrawer = function ($empty) {
    if ($empty) {
      $drawerContainer.css('height', '0px');
    } else {
      $drawerHeight = $cartContainer.outerHeight();
      $('.cart-row img').css('width', 'auto'); 
      $drawerContainer.css('height',  $drawerHeight + 'px');
    }
  };

  loadCartImages = function () {
    
    var cartImages = $('img', $cartContainer),
        count = cartImages.length,
        index = 0;

    cartImages.on('load', function() {
      index++;

      if (index==count) {
        switch (settings.method) {
          case 'modal':
            sizeModal();
            break;
          case 'flip':
          case 'drawer':
            sizeDrawer();
            break;
        }
      }
    });
  };

  formOverride = function () {
    $formContainer.submit(function(e) {
      e.preventDefault();

      
      $addToCart.removeClass('is-added').addClass('is-adding');

      
      $('.qty-error').remove();

      Shopify.addItemFromForm(e.target, itemAddedCallback, itemErrorCallback);

      
      switch (settings.method) {
        case 'flip':
          $flipContainer.addClass('flip--is-loading');
          break;
      }
    });
  };

  itemAddedCallback = function (product) {
    $addToCart.removeClass('is-adding').addClass('is-added');

    
    switch (settings.method) {
      case 'flip':
        setTimeout(function () {
          $flipContainer.removeClass('flip--is-loading').addClass('is-flipped');
        }, 600);
        break;
    }
    Shopify.getCart(cartUpdateCallback);
  };

  itemErrorCallback = function (XMLHttpRequest, textStatus) {
    switch (settings.method) {
      case 'flip':
        $flipContainer.removeClass('flip--is-loading');
        break;
    }

    var data = eval('(' + XMLHttpRequest.responseText + ')');
    if (!!data.message) {
      if (data.status == 422) {
        $formContainer.after('<div class="errors qty-error">'+ data.description +'</div>')
      }
    }
  };

  cartUpdateCallback = function (cart) {
    
    updateCountPrice(cart);

    switch (settings.method) {
      case 'flip':
        $('.flip-cart span').html(cart.item_count);
        break;
      case 'modal':
        buildCart(cart);
        break;
      case 'drawer':
        buildCart(cart);
        if ( !$drawerContainer.hasClass('is-visible') ) {
          showDrawer();
        } else {
          scrollTop();
        }
        break;
    }
  };

  setToggleButtons = function () {
    
    $toggleCartButton  = $(settings.toggleCartButton);

    if ($toggleCartButton) {
      
      $toggleCartButton.off('click');

      
      $toggleCartButton.on('click', function(e) {
        e.preventDefault();

        switch (settings.method) {
          case 'modal':
            if ( $modalContainer.hasClass('is-visible') ) {
              hideModal();
            } else {
              showModal(true);
            }
            break;
          case 'drawer':
          case 'flip':
            if ( $drawerContainer.hasClass('is-visible') ) {
              hideDrawer();
            } else {
              showDrawer(true);
            }
            break;
        }

      });

    }
  };

  flipCartUpdateCallback = function (cart) {
    buildCart(cart);
  };

  buildCart = function (cart) {
    
    if (!settings.useCartTemplate || cart.item_count === 0) {
      $cartContainer.empty();
    }

    
    if (cart.item_count === 0) {
      $cartContainer.append('<h2>' + "Your cart is currently empty." + '</h2><span>' + "Continue browsing \u003ca href=\"\/collections\/all\"\u003ehere\u003c\/a\u003e." + '</span>');

      switch (settings.method) {
        case 'modal':
          sizeModal('resize');
          break;
        case 'flip':
        case 'drawer':
          sizeDrawer();

          if (!$drawerContainer.hasClass('is-visible') && cartInit) {
            sizeDrawer(true);
          }
          break;
      }
      return;
    }

    
    if (settings.useCartTemplate) {
      cartTemplate(cart);
      return;
    }

    
    var items = [],
        item = {},
        data = {};

    var source   = $("#cartTemplate").html(),
        template = Handlebars.compile(source);

    
    $.each(cart.items, function(index, cartItem) {

      var itemAdd = cartItem.quantity + 1,
          itemMinus = cartItem.quantity - 1,
          itemQty = cartItem.quantity + ' x';

     
      var prodImg = cartItem.image.replace(/(\.[^.]*)$/, "_small$1").replace('http:', '');
      var prodName = cartItem.title.replace(/(\-[^-]*)$/, "");
      var prodVariation = cartItem.title.replace(/^[^\-]*/, "").replace(/-/, "");

      
      item = {
        id: cartItem.variant_id,
        line: index + 1, 
        url: cartItem.url,
        img: prodImg,
        name: prodName,
        variation: prodVariation,
        itemAdd: itemAdd,
        itemMinus: itemMinus,
        itemQty: itemQty,
        price: Shopify.formatMoney(cartItem.price, settings.moneyFormat)
      };

      items.push(item);
    });

    
    data = {
      items: items,
      totalPrice: Shopify.formatMoney(cart.total_price, settings.moneyFormat),
      btnClass: $btnClass
    }
    $cartContainer.append(template(data));

    
    adjustCart();

    
    switch (settings.method) {
      case 'modal':
        loadCartImages();
        break;
      case 'flip':
      case 'drawer':
        if (cart.item_count > 0) {
          loadCartImages();
        } else {
          sizeDrawer(true);
        }
        break;
      default:
        break;
    }

    
    cartInit = true;
  };

  cartTemplate = function (cart) {
    $cartContainer.load('/cart form[action="/cart"]', function() {

      
      adjustCart();

      
      switch (settings.method) {
        case 'modal':
          loadCartImages();
          break;
        case 'flip':
        case 'drawer':
          if (cart.item_count > 0) {
            loadCartImages();
          } else {
            sizeDrawer(true);
          }
          break;
        default:
          break;
      }

      
      cartInit = true;
    });
  }

  adjustCart = function () {
    
    if (settings.useCartTemplate) {
      createQtySelectors();
    }

    
    $body.on('submit', 'form.cart-form', function(evt) {
      if (isUpdating) {
        evt.preventDefault();
      }
    });

    
    var qtyAdjust = $('.ajaxifyCart--qty span');

    
    qtyAdjust.off('click');
    qtyAdjust.on('click', function() {
      var el = $(this),
          line = el.data('line'),
          qtySelector = el.siblings('.ajaxifyCart--num'),
          qty = parseInt( qtySelector.val() );

      qty = validateQty(qty);

      
      if (el.hasClass('ajaxifyCart--add')) {
        qty = qty + 1;
      } else {
        qty = qty <= 0 ? 0 : qty - 1;
      }

      
      if (line) {
        updateQuantity(line, qty);
      } else {
        qtySelector.val(qty);
      }

    });

    
    var qtyInput = $('.ajaxifyCart--num');
    qtyInput.off('change');
    qtyInput.on('change', function() {
      var el = $(this),
          line = el.data('line'),
          qty = el.val();

      
      if( (parseFloat(qty) == parseInt(qty)) && !isNaN(qty) ) {
        
      } else {
        
        el.val(1);
        return;
      }

      
      if (line) {
        updateQuantity(line, qty);
      }
    });

    
    qtyInput.off('focus');
    qtyInput.on('focus', function() {
      var el = $(this);
      setTimeout(function() {
        el.select();
      }, 50);
    });

    
    $('.ajaxifyCart--remove').on('click', function(e) {
      var el = $(this),
          line = el.data('line') || null,
          qty = 0;

      
      if (!line) {
        return;
      }

      e.preventDefault();
      updateQuantity(line, qty);
    });

    function updateQuantity(line, qty) {
      isUpdating = true;

      
      if (!settings.useCartTemplate) {
        var row = $('.ajaxifyCart--row[data-line="' + line + '"]').addClass('ajaxifyCart--is-loading');
      } else {
        var row = $('.cart-row[data-line="' + line + '"]').addClass('ajaxifyCart--is-loading');
      }

      if ( qty === 0 ) {
        row.addClass('is-removed');
      }

      
      setTimeout(function() {
        Shopify.changeItem(line, qty, adjustCartCallback);
      }, 250);
    }

    
    var noteArea = $('textarea[name="note"]');
    noteArea.off('change');
    noteArea.on('change', function() {
      var newNote = $(this).val();

      
      Shopify.updateCartNote(newNote, function(cart) {});
    });
    if (typeof GoogleWalletButton === "function") GoogleWalletButton();
    if (typeof AmazonPaymentsPayButton === "function") AmazonPaymentsPayButton();
  };

  adjustCartCallback = function (cart) {
    isUpdating = false;

    
    updateCountPrice(cart);

    
    if ( cart.item_count === 0 ) {
      
      switch (settings.method) {
        case 'modal':
          break;
        case 'flip':
        case 'drawer':
          hideDrawer();
          break;
      }
    }

    
    setTimeout(function() {
      Shopify.getCart(buildCart);
    }, 150)
  };

  createQtySelectors = function() {
    
    if ($('input[type="number"]', $cartContainer).length) {
      $('input[type="number"]', $cartContainer).each(function() {
        var el = $(this),
            currentQty = parseInt(el.val());

        var itemAdd = currentQty + 1,
            itemMinus = currentQty - 1,
            itemQty = currentQty + ' x';

        var source   = $("#ajaxifyQty").html(),
            template = Handlebars.compile(source),
            data = {
              line: el.attr('data-line'),
              itemQty: itemQty,
              itemAdd: itemAdd,
              itemMinus: itemMinus
            };

        
        el.after(template(data)).remove();
      });
    }

    
    if ($('a[href^="/cart/change"]', $cartContainer).length) {
      $('a[href^="/cart/change"]', $cartContainer).each(function() {
        var el = $(this).addClass('ajaxifyCart--remove');
      });
    }
  };

  qtySelectors = function() {
    
    var numInputs = $('input[type="number"]');

    
    var qtyMin = 0;

    if (numInputs.length) {
      numInputs.each(function() {
        var el = $(this),
            currentQty = parseInt(el.val()),
            inputName = el.attr('name'),
            inputId = el.attr('id');

        var itemAdd = currentQty + 1,
            itemMinus = currentQty - 1,
            itemQty = currentQty;

        var source   = $("#jsQty").html(),
            template = Handlebars.compile(source),
            data = {
              id: el.data('id'),
              itemQty: itemQty,
              itemAdd: itemAdd,
              itemMinus: itemMinus,
              inputName: inputName,
              inputId: inputId
            };

        
        el.after(template(data)).remove();
      });

      
      $('.js--qty-adjuster').on('click', function() {
        var el = $(this),
            id = el.data('id'),
            qtySelector = el.siblings('.js--num'),
            qty = parseInt( qtySelector.val() );

        var qty = validateQty(qty);
        qtyMin = $body.hasClass('template-product') ? 1 : qtyMin;

        
        if (el.hasClass('js--add')) {
          qty = qty + 1;
        } else {
          qty = qty <= qtyMin ? qtyMin : qty - 1;
        }

        
        qtySelector.val(qty);
      });
    }
  };

  scrollTop = function () {
    if ($body.scrollTop() > 0 || $html.scrollTop() > 0) {
      $('html, body').animate({
        scrollTop: 0
      }, 250, 'swing');
    }
  };

  toggleCallback = function (data) {
    
    if (typeof settings.onToggleCallback == 'function') {
      settings.onToggleCallback.call(this, data);
    }
  };

  validateQty = function (qty) {
    if((parseFloat(qty) == parseInt(qty)) && !isNaN(qty)) {
      
      return qty;
    } else {
      
      return 1;
    }
  };

  module = {
    init: init
  };

  return module;

}(ajaxifyShopify || {}, jQuery));
