function hideKart(){$(".pgmsk").hide(),$(".header-dropdown").removeClass("show-header-dropdown")}function showKart(){"/cart"!=window.location.pathname&&($("html").animate({scrollTop:0}),setTimeout(function(){$(".pgmsk").show();var o=$(".fa-shopping-bag:visible");$(o).parent().find(".header-dropdown").addClass("show-header-dropdown"); /*,setTimeout(function(){ hideKart()},4e3)*/ },1e3))}

function getURLVar(t){var n=[],o=String(document.location).split("?");if(o[1]){var e=o[1].split("&");for(i=0;i<e.length;i++){var r=e[i].split("=");r[0]&&r[1]&&(n[r[0]]=r[1])}return n[t]?n[t]:""}}function isEmpty(t){return!$.trim(t.html())}function divWidthMenu(){var t=$(".container-fix .block-right").outerWidth(!0),i=$(".container-fix > .container").width(),n=$("#logo img").outerWidth(!0);($(".hd1").length||$(".hd2").length)&&$(".home1 .container-fix .main-menu").outerWidth(i-n-t-30)}function customResponsive(){parseInt($(window).width());$(".group1 #logo img").each(function(){this.complete?divWidthMenu.call(this):$(this).one("load",divWidthMenu)});var t=0-2.6*$(".wrapper").outerWidth(!0)/100;$(".hd2").length&&($(".banner8").css("margin-left",t),$(".banner8").css("margin-right",t))}$(document).ajaxStop(function(){var t;t=$("#product"),$.trim(t.html())&&$("#product .option-container").addClass("has-option")}),$(window).resize(function(){customResponsive()});
$(document).ready(function() {  var className = $('header').attr('class');  if ($(".header3").length) {    $('.contentforlayout').addClass('container1-page');    }  
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1}),$(".swatch :radio").change(function(){var e=$(this).closest(".swatch").attr("data-option-index"),a=$(this).val();$(this).closest("form").find(".single-option-selector").eq(e).val(a).trigger("change")});
 $("#grid-view").click(function(){$(".custom-products").addClass("custom-products-row"),$(this).addClass("selected"),$("#list-view").removeClass("selected"),cols=$("#column-right, #column-left").length,2==cols?$("#content .product-layout").attr("class","product-layout product-grid col-md-6 col-sm-6 col-xs-6 two-items"):1==cols?$("#content .product-layout").attr("class","product-layout product-grid col-md-4 col-sm-6 col-xs-6 three-items"):$("#content .product-layout").attr("class","product-layout product-grid col-md-3 col-sm-6 col-xs-6 four-items"),$("#content .product-grid .caption").removeClass("col-xs-8"),$("#content .product-grid .image").removeClass("col-xs-4"),localStorage.setItem("display","grid")}),"list"==localStorage.getItem("display")?$("#list-view").trigger("click"):$("#grid-view").trigger("click"),$(document).on("keydown","#collapse-checkout-option input[name='email'], #collapse-checkout-option input[name='password']",function(o){13==o.keyCode&&$("#collapse-checkout-option #button-login").trigger("click")}),$("[data-toggle='tooltip']").tooltip({container:"body"}),$(document).ajaxStop(function(){$("[data-toggle='tooltip']").tooltip({container:"body"})});
});

var didScroll,cart={add:function(t,a,e){$.ajax({url:"/cart/add.js",type:"post",data:"id="+t+"&quantity="+(void 0!==e?e:1),dataType:"json",beforeSend:function(){$(this),$(".btn-cart > .button").button("loading")},complete:function(){$(".btn-cart > .button").button("reset")},success:function(t){updateAllKarts(t.item_count),showKart()},error:function(t,a,e){alert(t.responseText)}})},remove:function(t){$.ajax({url:"/cart/update.js",type:"post",data:"updates["+t+"]=0",dataType:"json",success:function(t){updateAllKarts(t.item_count),showKart()},error:function(t,a,e){alert(t.responseText)}})}};
$(document).delegate(".agree","click",function(e){e.preventDefault(),$("#modal-agree").remove();var t=this;$.ajax({url:$(t).attr("href"),type:"get",dataType:"html",success:function(e){html='<div id="modal-agree" class="modal">',html+='  <div class="modal-dialog">',html+='    <div class="modal-content">',html+='      <div class="modal-header">',html+='        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',html+='        <h4 class="modal-title">'+$(t).text()+"</h4>",html+="      </div>",html+='      <div class="modal-body">'+e+"</div>",html+="    </div>",html+="  </div>",html+="</div>",$("body").append(html),$("#modal-agree").modal("show")}})}),function(e){e.fn.autocomplete=function(t){return this.each(function(){this.timer=null,this.items=new Array,e.extend(this,t),e(this).attr("autocomplete","off"),e(this).on("focus",function(){this.request()}),e(this).on("blur",function(){setTimeout(function(e){e.hide()},200,this)}),e(this).on("keydown",function(e){switch(e.keyCode){case 27:this.hide();break;default:this.request()}}),this.click=function(t){t.preventDefault(),value=e(t.target).parent().attr("data-value"),value&&this.items[value]&&this.select(this.items[value])},this.show=function(){var t=e(this).position();e(this).siblings("ul.dropdown-menu").css({top:t.top+e(this).outerHeight(),left:t.left}),e(this).siblings("ul.dropdown-menu").show()},this.hide=function(){e(this).siblings("ul.dropdown-menu").hide()},this.request=function(){clearTimeout(this.timer),this.timer=setTimeout(function(t){t.source(e(t).val(),e.proxy(t.response,t))},200,this)},this.response=function(t){if(html="",t.length){for(i=0;i<t.length;i++)this.items[t[i].value]=t[i];for(i=0;i<t.length;i++)t[i].category||(html+='<li data-value="'+t[i].value+'"><a href="#">'+t[i].label+"</a></li>");var o=new Array;for(i=0;i<t.length;i++)t[i].category&&(o[t[i].category]||(o[t[i].category]=new Array,o[t[i].category].name=t[i].category,o[t[i].category].item=new Array),o[t[i].category].item.push(t[i]));for(i in o)for(html+='<li class="dropdown-header">'+o[i].name+"</li>",j=0;j<o[i].item.length;j++)html+='<li data-value="'+o[i].item[j].value+'"><a href="#">&nbsp;&nbsp;&nbsp;'+o[i].item[j].label+"</a></li>"}html?this.show():this.hide(),e(this).siblings("ul.dropdown-menu").html(html)},e(this).after('<ul class="dropdown-menu"></ul>'),e(this).siblings("ul.dropdown-menu").delegate("a","click",e.proxy(this.click,this))})}}(window.jQuery);var lastScrollTop=0,delta=5,navbarHeight=$(".mobile_header").outerHeight();function hasScrolled(){var e=$(this).scrollTop();Math.abs(lastScrollTop-e)<=delta||(e>lastScrollTop&&e>navbarHeight?($(".mobile_header").removeClass("nav-down").addClass("nav-up"),$(".mobile_header_oth").removeClass("nav-down").addClass("nav-up"),$(".mobile_header").addClass("headroom-not-top"),$(".mobile_header_oth").addClass("mobile-open-menu"),$(".mobile_header").removeClass("video_header")):e+$(window).height()<$(document).height()&&($(".mobile_header").removeClass("nav-up").addClass("nav-down"),$(".mobile_header_oth").removeClass("nav-up").addClass("nav-down"),$(".mobile_header").removeClass("video_header")),(0==e||e<39)&&($(".mobile_header").removeClass("headroom-not-top"),$(".mobile_header").addClass("video_header"),$(".mobile_header_oth").removeClass("mobile-open-menu")),lastScrollTop=e)}$(window).scroll(function(e){didScroll=!0}),setInterval(function(){didScroll&&(hasScrolled(),didScroll=!1)},250),setTimeout(function(){$(".cbb-frequently-bought-add-button").addClass("hvr-wobble-horizontal")},4e3);
//kart fns
function beforeUpdateAllKarts() {
   // $("#cart").removeClass("show-header-dropdown"), $("#cart-popup").removeClass("show-header-dropdown"), $("#cart-mobile").removeClass("show-header-dropdown")
}

function reloadAllKarts() {
    "/cart" == window.location.pathname ? 0 == $("#mob_cart:visible").length ? $("#parent_dsk_cart").load("#parent_dsk_cart #dsk_cart", function(t, e, a) { /*loadKartRecommendations();*/}) : $("#parent_mob_cart").load("#parent_mob_cart #mob_cart", function(t, e, a) { loadKartRecommendations();}) : 0 == $("#cart-mobile:visible").length ? $("#cart").load("#cart #subcart") : $("#cart-mobile").load("#cart-mobile #subitem-mobile"),$("#cart-mobile-sticky").load("#cart-mobile-sticky #subitem-mobile-sticky"), $("#ffsb").load("#ffsb #ffsbmsg", function(t, e, a) {
        $("#ffsbmsg").slick()
    });
    
}

function updateAllKarts(t) {
    $("#cart-total").html(t), $("#cart-total-mobile").html(t), $("#cart-total-mobile-sticky").html(t), reloadAllKarts()
}

function kartUpdate(t, e) {
    $.ajax({
        url: "/cart/update.js",
        type: "post",
        data: "updates[" + t + "]=" + e,
        dataType: "json",
        beforeSend: beforeUpdateAllKarts(),
        success: function(t) {
            updateAllKarts(t.item_count), showKart()
        },
        error: function(t, e, a) {
            alert(t.responseText)
        }
    })
}

function kartUpdatePromo(t, e, a) {
  $(".checkout_button").attr("disabled",true);
  $(a).off("click");
  $(a).hide();
    $.ajax({
        url: "/cart/update.js",
        type: "post",
        data: "updates[" + t + "]=" + e,
        dataType: "json",
        success: function(t) {
          	window.location.reload();
            updateAllKarts(t.item_count); 
        },
        error: function(t, e, a) {
          	window.location.reload();
            alert(t.responseText)
        }
    })
}

function loadKartRecommendations(){
  var precom = setInterval(function(){
    if($('#cart-recomm-box .product-recommendations').html()!=""){
        clearInterval(precom);
    $('.cart-recomm-box').html($('#cart-recomm-box').html());
        setTimeout(function(){$('.cart-recomm-box .prslick1').slick({
              autoplay: true,
            autoplaySpeed: 2000,
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
              responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        })}, 1000);
    }
    },1000);
      
}

$('.slick10').slick({
              autoplay: true,
            autoplaySpeed: 2000,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
              arrows: false,
              responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
});

$(document).ready(function() {
    
  
    $("body #destop_cartform_item, body #cart, body #cart-mobile, body #cart-mobile-sticky").on("click", ".btn_cart_up", function(event) {
      $(this).prop("disabled",true);
      var t = Number($(this).prev().val());
     
     
       $(this).prev().val(t + 1);
      
      if(window.innerWidth<993){
        
        var e = $(this).attr("did"),
            a = $(this).parent().find("#productmid_" + e).val(),
            
            r = $(this).parent().find("#updatesm_" + e).val();

      }else{
      
        var e = $(this).attr("did"),
            a = $("#productid_" + e).val(),
            
            r = $("#updates_" + e).val();
        
      }
 
        
     
        $.ajax({
            url: "/cart/update.js",
            type: "post",
            data: "updates[" + a + "]=" + r,
            dataType: "json",
            beforeSend: beforeUpdateAllKarts(),
            success: function(t) {
                updateAllKarts(t.item_count);
              	
            },
            error: function(t, e, a) {
                alert(t.responseText)
            }
        })
    }), $("body #destop_cartform_item, body #cart, body #cart-mobile, body #cart-mobile-sticky").on("click", ".btn_cart_down", function() {
        $(this).prop("disabled",true);
        var t = Number($(this).next().val());
        $(this).next().val(t - 1);
      $(this).next().attr("value",t - 1);
         if(window.innerWidth<993){
           
        
        var e = $(this).attr("did"),
            a = $("#productmid_" + e).attr("value");
            $("#updatesm_" + e).attr("value",t - 1);
            var r = $("#updatesm_" + e).attr("value");

      }else{
      
        var e = $(this).attr("did"),
            a = $("#productid_" + e).attr("value");
            $("#updatesm_" + e).attr("value",t - 1);
            $("#updates_" + e).attr("value",t - 1);
            var r = $("#updates_" + e).attr("value");
        
      }
      
      
      if( e == 31224069619806){
        
        $.ajax({
            url: "/cart/update.js",
            type: "post",
            data: "updates[" + a + "]=" + r,
            dataType: "json",
            beforeSend: function() {
                //$("#cart").removeClass("show-header-dropdown"), $("#cart-popup").removeClass("show-header-dropdown"), $("#cart-mobile").removeClass("show-header-dropdown")
            },
            success: function(t) {
                /*updateAllKarts(t.item_count);*/
              
              if(window.innerWidth<993){
                
            
                
                 $("#productmid_31224069324894").val(0);
                 $("#updatesm_31224069324894").val(0);
                var ar = $("#updatesm_31224069324894").val(),
                    ra = $("#updatesm_31224069324894").val();
                
              }else{
                
                $("#productid_31224069324894").val(0);
                $("#updates_31224069324894").val(0);
                var ar = $("#productid_31224069324894").val(),
                    ra = $("#updates_31224069324894").val();
              
              }
                
              
              if($("#productid_31224069324894").length>0 || $("#productmid_31224069324894").length>0){
                
                $.ajax({
                  url: "/cart/update.js",
                  type: "post",
                  data: "updates[31224069324894]=" + ra,
                  dataType: "json",
                  beforeSend: function() {
                      //$("#cart").removeClass("show-header-dropdown"), $("#cart-popup").removeClass("show-header-dropdown"), $("#cart-mobile").removeClass("show-header-dropdown")
                  },
                  success: function(t) {
                      updateAllKarts(t.item_count)
                  },
                  error: function(t, e, a) {
                      alert(t.responseText)
                  }
              });
                
              }else{
                updateAllKarts(t.item_count);
              }
                
                
            },
            error: function(t, e, a) {
                alert(t.responseText)
            }
        });
        
        
      
      }else if(e == 31224069324894){
        
        $.ajax({
            url: "/cart/update.js",
            type: "post",
            data: "updates[" + a + "]=" + r,
            dataType: "json",
            beforeSend: function() {
                //$("#cart").removeClass("show-header-dropdown"), $("#cart-popup").removeClass("show-header-dropdown"), $("#cart-mobile").removeClass("show-header-dropdown")
            },
            success: function(t) {
                /*updateAllKarts(t.item_count);*/
              
              if(window.innerWidth<993){
                
            
                $("#productmid_31224069619806").val(0);
                $("#updatesm_31224069619806").val(0);
              
                var ar = $("#productmid_31224069619806").val(),
                    ra = $("#updatesm_31224069619806").val();
                
              }else{
                
               
                $("#productid_31224069619806").val(0);
                $("#updates_31224069619806").val(0);
              
                var ar = $("#productid_31224069619806").val(),
                    ra = $("#updates_31224069619806").val();
              }
              
              if($("#productid_31224069619806").length>0 || $("#productmid_31224069619806").length>0){
                $.ajax({
                  url: "/cart/update.js",
                  type: "post",
                  data: "updates[31224069619806]=" + ra,
                  dataType: "json",
                  beforeSend: function() {
                      //$("#cart").removeClass("show-header-dropdown"), $("#cart-popup").removeClass("show-header-dropdown"), $("#cart-mobile").removeClass("show-header-dropdown")
                  },
                  success: function(t) {
                      updateAllKarts(t.item_count)
                  },
                  error: function(t, e, a) {
                      alert(t.responseText)
                  }
              });
                
              }else{
                updateAllKarts(t.item_count);
              
              }
                
            },
            error: function(t, e, a) {
                alert(t.responseText)
            }
        });
        
      }else{
        
         $.ajax({
            url: "/cart/update.js",
            type: "post",
            data: "updates[" + a + "]=" + r,
            dataType: "json",
            beforeSend: function() {
                //$("#cart").removeClass("show-header-dropdown"), $("#cart-popup").removeClass("show-header-dropdown"), $("#cart-mobile").removeClass("show-header-dropdown")
            },
            success: function(t) {
              
              	updateAllKarts(t.item_count);
              
              
            },
            error: function(t, e, a) {
                alert(t.responseText)
            }
        });
      
      
      }
        
       
    }), $("#mobile_cartform_item").on("click", ".btn_cart_up_m", function() {
        var t = Number($(this).prev().val());
        $(this).prev().val(t + 1);
        var e = $(this).attr("did");

        

      kartUpdate($("#mobile_cartform_item #productid_" + e).val(), $("#mobile_cartform_item #updates_" + e).val())
        
    }), $("#mobile_cartform_item").on("click", ".btn_cart_down_m", function() {
        var t = Number($(this).next().val());
        $(this).next().val(t - 1);
        var e = $(this).attr("did");

          if(window.innerWidth<993){
        
        var e = $(this).attr("did"),
            a = $("#mobile_cartform_item #productid_" + e).val(),
            
            r = $("#mobile_cartform_item #updates_" + e).val();

      }else{
      
        var e = $(this).attr("did"),
            a = $("#mobile_cartform_item #productid_" + e).val(),
            
            r = $("#mobile_cartform_item #updates_" + e).val();
        
      }
      
      
      if( e == 31224069619806){
        
        $.ajax({
            url: "/cart/update.js",
            type: "post",
            data: "updates[" + a + "]=" + r,
            dataType: "json",
            beforeSend: function() {
                //$("#cart").removeClass("show-header-dropdown"), $("#cart-popup").removeClass("show-header-dropdown"), $("#cart-mobile").removeClass("show-header-dropdown")
            },
            success: function(t) {
                /*updateAllKarts(t.item_count);*/
              
              if(window.innerWidth<993){
                
            
                
                 $("#mobile_cartform_item #productid_31224069324894").val(0);
                 $("#mobile_cartform_item #updates_31224069324894").val(0);
                var ar = $("#mobile_cartform_item #updates_31224069324894").val(),
                    ra = $("#mobile_cartform_item #updates_31224069324894").val();
                
              }else{
                
                $("#mobile_cartform_item #productid_31224069324894").val(0);
                $("#mobile_cartform_item #updates_31224069324894").val(0);
                var ar = $("#mobile_cartform_item #productid_31224069324894").val(),
                    ra = $("#mobile_cartform_item #updates_31224069324894").val();
              
              }
                
              
              if($("#mobile_cartform_item #productid_31224069324894").length>0){
                
                $.ajax({
                  url: "/cart/update.js",
                  type: "post",
                  data: "updates[31224069324894]=" + ra,
                  dataType: "json",
                  beforeSend: function() {
                      //$("#cart").removeClass("show-header-dropdown"), $("#cart-popup").removeClass("show-header-dropdown"), $("#cart-mobile").removeClass("show-header-dropdown")
                  },
                  success: function(t) {
                      updateAllKarts(t.item_count)
                  },
                  error: function(t, e, a) {
                      alert(t.responseText)
                  }
              });
                
              }else{
                updateAllKarts(t.item_count);
              }
                
                
            },
            error: function(t, e, a) {
                alert(t.responseText)
            }
        });
        
        
      
      }else if(e == 31224069324894){
        
        $.ajax({
            url: "/cart/update.js",
            type: "post",
            data: "updates[" + a + "]=" + r,
            dataType: "json",
            beforeSend: function() {
                //$("#cart").removeClass("show-header-dropdown"), $("#cart-popup").removeClass("show-header-dropdown"), $("#cart-mobile").removeClass("show-header-dropdown")
            },
            success: function(t) {
                /*updateAllKarts(t.item_count);*/
              
              if(window.innerWidth<993){
                
            
                $("#mobile_cartform_item #productid_31224069619806").val(0);
                $("#mobile_cartform_item #updates_31224069619806").val(0);
              
                var ar = $("#mobile_cartform_item #productid_31224069619806").val(),
                    ra = $("#mobile_cartform_item #updates_31224069619806").val();
                
              }else{
                
               
                $("#mobile_cartform_item #productid_31224069619806").val(0);
                $("#mobile_cartform_item #updates_31224069619806").val(0);
              
                var ar = $("#mobile_cartform_item #productid_31224069619806").val(),
                    ra = $("#mobile_cartform_item #updates_31224069619806").val();
              }
              
              if($("#mobile_cartform_item #productid_31224069619806").length>0){
                $.ajax({
                  url: "/cart/update.js",
                  type: "post",
                  data: "updates[31224069619806]=" + ra,
                  dataType: "json",
                  beforeSend: function() {
                      //$("#cart").removeClass("show-header-dropdown"), $("#cart-popup").removeClass("show-header-dropdown"), $("#cart-mobile").removeClass("show-header-dropdown")
                  },
                  success: function(t) {
                      updateAllKarts(t.item_count)
                  },
                  error: function(t, e, a) {
                      alert(t.responseText)
                  }
              });
                
              }else{
                updateAllKarts(t.item_count);
              
              }
                
            },
            error: function(t, e, a) {
                alert(t.responseText)
            }
        });
        
      }else{
        
        kartUpdate($("#mobile_cartform_item #productid_" + e).val(), $("#mobile_cartform_item #updates_" + e).val());
      
      
      }



        
    }), $("header").after('<div class="breadcrumbs"><div class="container"></div></div>');
    var t = $("ul.breadcrumb"),
        e = $(".breadcrumbs .container");
    t.appendTo(e), $(".breadcrumb").before($(".category-name")), $(".breadcrumb").before($(".block-2 .heading-title"));
    var a = $("#sticky-menu").attr("data-sticky");
    if (1 == a) {
        var r = $("header").outerHeight(!0);
        $("header").after('<div class="headerSpace unvisible" style="height:' + r + 'px;"></div>')
    }
    var o = 0,
        s = 0;
    s = $("header").offset().top, s += $("header").outerHeight(), s += 30, $(window).scroll(function() {
        $("header").height();
        var t = $(window).scrollTop();
        $(window).width() > 1024 && t != o && (1 == a && (t >= s ? ($(".group1 .container-fix").addClass("fix-header"), $(".group2 .main-menu").addClass("fix-header"), $(".headerSpace").removeClass("unvisible")) : ($(".group1 .container-fix").removeClass("fix-header"), $(".group2 .main-menu").removeClass("fix-header"), $(".headerSpace").addClass("unvisible"))), o = $(window).scrollTop())
    }), $(".container-fix").hover(function() {
        $(this).addClass("fix-header-act")
    }, function() {
        $(this).removeClass("fix-header-act")
    }), customResponsive(), isEmpty($("#product")) || $("#product .option-container").addClass("has-option"), isEmpty($("#product2")) || $("#product2 .option-container").addClass("has-option"), $(".layer-category").prepend($(".custom-category .toolbar")), $(".text-danger").each(function() {
        var t = $(this).parent().parent();
        t.hasClass("form-group") && t.addClass("has-error")
    }), $("#search input[name='q']").parent().find("button").on("click", function() {
        var t = "/search",
            e = $("#search input[name='q']").val();
        if ("Search all products..." == e || "" == e) return jQuery("#search input[name='q']").focus(), !1;
        t += "?type=product&q=" + encodeURIComponent(e), location = t
    }), $("#search input[name='q']").on("keydown", function(t) {
        13 == t.keyCode && $("#search input[name='q']").parent().find("button").trigger("click")
    }), $("#menu .dropdown-menu").each(function() {
        var t = $("#menu").offset(),
            e = $(this).parent().offset().left + $(this).outerWidth() - (t.left + $("#menu").outerWidth());
        e > 0 && $(this).css("margin-left", "-" + (e + 10) + "px")
    }), $("#list-view").click(function() {
        $(".custom-products").removeClass("custom-products-row"), $(this).addClass("selected"), $("#grid-view").removeClass("selected"), $("#content .product-grid > .clearfix").remove(), $("#content .product-grid").attr("class", "product-layout product-list col-xs-12"), $("#content .product-list .caption").addClass("col-xs-8"), $("#content .product-list .image").addClass("col-xs-4"), localStorage.setItem("display", "list")
    }), $("input.num-product").on("change", function(t) {
        (t.preventDefault(), "" != t.target.value) && kartUpdate($(this).attr("did"), t.target.value);
        return !1
    })
//     , $(".header-cart").on("click", ".header-cart-wrapitem .btn_cart_up", function() {
//         kartUpdate($(this).attr("did"), parseInt($(this).attr("didqty")) + 1), $(this).closest(".header-cart").addClass("show-header-dropdown")
//     })
//     , $(".header-cart").on("click", ".header-cart-wrapitem .btn_cart_down", function() {
//         kartUpdate($(this).attr("did"), parseInt($(this).attr("didqty")) - 1), $(this).closest(".header-cart").addClass("show-header-dropdown")
//     })
    , $(".header-cart").on("click", ".header-cart-wrapitem .delkart", function() {
        var t = $(this).attr("did");
        cart.remove(t), $(this).closest(".header-cart").addClass("show-header-dropdown"), reloadAllKarts()
    }), $(".button-atc").off("click").on("click", function(t) {
        t.stopPropagation(), t.preventDefault(), $("#form_buy").submit()
    }), $('form[action="/cart/add"]').not(".book_stylist_add_to_cart_form").not(".book_personal_stylist_product_form").submit(function(t) {
        t.preventDefault();
      
      var quantity = 1;
      var variant_id = $(".productSelect [data-variant-title='"+$("body .single-option-selector").val()+"']").val(); 
      var data_to_send = 'quantity=' + quantity + '&id=' + variant_id; 
      var frequency = 1;
      var unit_type = "Month";
      var data = {
        "id": variant_id,
        "quantity": quantity,
        "properties": {
          "shipping_interval_frequency": frequency,
          "shipping_interval_unit_type": unit_type
        }
      };
      
      if($("body #rc_radio_options").length>0){
              
              if($('body [name="properties[shipping_interval_unit_type]"]').val() == "undefined"){
                
                var data = {
                    "id": variant_id,
                    "quantity": quantity,
                    
                  };
                
              
              }else{
                
                var frequency = $("body [name='properties[shipping_interval_frequency]']").val();
              
              var unit_type = $('body [name="properties[shipping_interval_unit_type]"]').val();
              
                var data = {
                  "id": variant_id,
                  "quantity": quantity,
                  "properties": {
                    "shipping_interval_frequency": frequency,
                    "shipping_interval_unit_type": unit_type
                  }
                };
              
              
              }
              
            
            }else{
            	
              var data = {
                    "id": variant_id,
                    "quantity": quantity,
                    
                  };
            
            }
      
      $.ajax({
            url: "/cart/add.js",
            type: "post",
            data: data,/*$("#form_buy input[type='text'], #form_buy #productSelect,#form_buy input[type='number']")*/
            dataType: "json",
            beforeSend: function() {
                $(".btnsubmit").html("<i class='fa fa-shopping-bag'></i>Adding...")
            },
            complete: function() {
                $(".btnsubmit").html("<i class='fa fa-shopping-bag'></i>Add To Cart")
            },
           success: function(t) {
                  if(window.addToCartButtonRedirectSetting == "1"){
                    window.location.href = "/cart";
                  }
                  else if(window.addToCartButtonRedirectSetting == "2"){

                    window.location.href = "/checkout";

                  }
                  else if(window.addToCartButtonRedirectSetting == "3"){

                    $.getJSON("/cart.js", function(t) {
                      updateAllKarts(t.item_count)
                    }), showKart()

                  } else{

                    $.getJSON("/cart.js", function(t) {
                      updateAllKarts(t.item_count)
                  }), showKart()
                     
                  }
            },
            error: function(t, e, a) {
                alert(t.responseText)
            }
        })
    }), $("body").on("click", "button#snize-quick-view-add-to-cart.snize-button", function(t) {
        t.preventDefault();
        var e = $(this);
        $.ajax({
            url: "/cart/add.js",
            type: "post",
            data: e.parents("form").find("input, select"),
            dataType: "json",
            complete: function() {
                e.parents("form").addClass("snize-add-to-cart-form-success")
            },
            success: function(t) {
                $.getJSON("/cart.js", function(t) {
                    updateAllKarts(t.item_count)
                }), showKart()
            },
            error: function(t, e, a) {
                alert(t.responseText)
            }
        })
    }), $(".fa-shopping-bag.dhicon").on("mouseover", function() {
        $(".pgmsk").show(), $(this).parent().find(".header-dropdown").addClass("show-header-dropdown")
    }), $(".fa-shopping-bag.mhicon").on("click", function() {
        $(".pgmsk").show(), $(this).parent().find(".header-dropdown").addClass("show-header-dropdown")
    }), $("body,.pgmsk").on("click", function() {
        hideKart()
    })
}), $(document).on("keydown", function(t) {
    "Escape" == t.key && hideKart()
});