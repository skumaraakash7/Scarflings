(function(window, $) {
  //=======================================================
  //
  // Enhanced Ecommerce Tracking Script
  // Written for Jamie Henry Mediasumo LLC
  //
  //=======================================================
  
  //==============================================
  // CONSTANTS
  // Change these values according to your Shopify
  // theme requirements.
  //==============================================
  
  // The selector to get products from category pages
  const GRID_ITEM_CSS_SELECTOR = '.grid .grid__item';
  
  // The selector for the add to cart button
  // on a product detail page
  const ADD_TO_CART_FORM_CSS_SELECTOR = 'form#AddToCartForm';
  
  // The selector for a remove from cart button on the
  // cart page
  const REMOVE_FROM_CART_CSS_SELECTOR = 'a[href$="quantity=0"]';
  
  //==============================================
  // INTERNAL VARIABLES
  // Shorthands to useful data
  //==============================================
  
  var settings = window.dataLayer[0];
  
  //==============================================
  // METHODS
  //==============================================
  
  /**
   * Initialises listeners, including listening for
   * product link clicks, add to carts and remove from
   * carts.
   *
   * When these links are clicked, relevant data is
   * pushed to the dataLayer object, which can then
   * be read by Google Tag Manager.
   */
  var initListeners = function() {
    
    if (typeof settings.page === 'undefined') { return; }
  
    if (settings.page.type === 'product') {
  
      $(document).ready(function() {
        // Listen for add to carts
        $(ADD_TO_CART_FORM_CSS_SELECTOR).submit(function(event) {
          var product = settings.ecommerce.detail.products[0];
          product['quantity'] = 1;
          updateDatalayer('addedToCart', product);
        });
      });
    
    } else if (settings.page.type === 'collection' && settings.ecommerce.impressions.length) {
    
      $(document).ready(function() {
        $(GRID_ITEM_CSS_SELECTOR).each(function(i) {
          // Set a data attribute on all product links, remembering
          // which product it refers to
          $(this).find('a').each(function() { $(this).data('product-index', i); });
          // Listen for product clicks
          $(this).find('a').click(function(event) {
            updateDatalayer('productClick', settings.ecommerce.impressions[$(this).data('product-index')]);
          });
        });
      });
    
    } else if (settings.page.type === 'cart') {
      
      $(document).ready(function() {
        // Add data attributes to remove product links
        $(this).find(REMOVE_FROM_CART_CSS_SELECTOR).each(function(i) { $(this).data('product-index', i); })
        // Listen for remove from carts
        $(REMOVE_FROM_CART_CSS_SELECTOR).click(function(event) {
          var product = productFromLineItem(settings.line_items[$(this).data('product-index')]);
          updateDatalayer('removedFromCart', product);
        });
      });
      
    }

  }
  
  /**
   * Convert a Shopify LineItem object to a
   * Product object expected by GTM.
   */
  var productFromLineItem = function(lineItem) {
    return {
      'name': lineItem.title,
      'id': lineItem.id,
      'price': (lineItem.line_price / 100).toString(),
      'brand': lineItem.vendor,
      'category': lineItem.product_type
    }
  }
  
  /**
   * Update the GTM dataLayer object with new values
   */
  var updateDatalayer = function(type, product) {
    var dl = window.dataLayer;
    if (type == 'productClick') {
      dl.push({
        'event': 'clickedProduct',
        'ecommerce': {
          'click': {
            'actionField': { 'list': product.list },
            'products': [product]
          }
        }
      });
    } else if (type == 'addedToCart') {
      dl.push({
        'event': 'addedToCart',
        'ecommerce': {
          'currencyCode': settings.ecommerce.currencyCode,
          'add': {
            'products': [product]
          }
        }
      });
    } else if (type == 'removedFromCart') {
      dl.push({
        'event': 'removedFromCart',
        'ecommerce': {
          'remove': {
            'products': [product]
          }
        }
      });
    }
  }
  
  // Initialise
  initListeners();
  
}(window, jQuery));