Currency={rates:{USD:1,EUR:Shopify.currency.rate,GBP:parseFloat(Shopify.currency.rate)+.005,CAD:Shopify.currency.rate,AUD:Shopify.currency.rate},convert:function(e,n,o){return e*this.rates[o]}},$(function(){function e(){console.log(Shopify.currency.active),Currency.convertAll("USD",Shopify.currency.active,".snize-price","money_format"),Currency.convertAll("USD",Shopify.currency.active,".snize-discounted-price","money_format")}function n(){$(".snize-modal:visible").length?setTimeout(n,300):setTimeout(function(){o(),e()},100)}function o(){$(".snize-modal:visible").length?setTimeout(function(){n(),e()},100):setTimeout(o,300)}$(document).on("change","select.snize-option",e),$(document).on("click",".snize-size-select-box, .snize-simple-options-box, .snize-color-swatch-box",e),$(document).on("Searchanise.AutocompleteUpdated",e),$(document).on("Searchanise.ResultsUpdated",e),$(document).on("Searchanise.RecommendationUpdated",e),function e(){"undefined"!=typeof Searchanise?o():setTimeout(e,300)}()});