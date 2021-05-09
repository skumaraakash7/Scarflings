 (function() {

$(".contentforlayout, .upper-canvas, img").not("#custom_message").on("keydown",function(e){
	
  	
	if(e.keyCode == 32 && e.target != document.getElementById('custom_message')) {
    	
      e.preventDefault();
    	
  	}
});


window.addEventListener('keydown', function(e) {
   var t = document.getElementById("custom_message");
  if(e.target == t){
    return;
  }else{
    if(e.keyCode == 32 && e.target == document.body || e.target == document.getElementsByTagName('img') || document.getElementsByTagName('canvas') && !document.getElementsByTagName('textarea')) {
    
    

    e.preventDefault();
    
  	}
  }
  
});
   

/*
var page = $("html, body, #product_customizer_slider");

            page.on("scroll mousedown wheel DOMMouseScroll mousewheel touchmove", function(){
                 
                 page.stop();
             });*/

             
    $(document).ready(function () {
      
      
      
      var e = $(window).width(),
          
          t = {},update = false,add_text = true;
          var o = {
              fontFamily: "Book Antiqua",
              fill: "white",
              fontSize: 25,
              left: 217,
              top: 327,
              width: 324,
              cursorDelay:10,
              lockMovementX: true,
              lockMovementY: true,
              selectable: true,
              evented: true,
              hasRotatingPoint: false,
              lockScalingX: true,
              lockScalingY: true,
              splitByGrapheme:false,
              editable: true,
              hasBorders: false,
              lockUniScaling:true,
              hasControls:false,
              textLength: 8,
              maxLength: 8,
              max: 8,
              fixedWidth: 320,
              fixedHeight: 300,
              actualFontSize:25,
              textAlign:"left",
              breakWords: true,
              maxLineCharacherCount:29,
              maxNoofLines:9,
              maxNoOfChars:230
            
          };
        
        
      
        var n = {
              fontFamily: "Book Antiqua",
              fill: "white",
              fontSize: 60,
              actualFontSize:60,
              left: 59,
              top: 60,
              width: 750,
              evented: true,
              cursorDelay:10,
              splitByGrapheme:false,
              lockMovementX: true,
              lockMovementY: true,
              selectable: false,
              hasRotatingPoint: false,
              lockScalingX: true,
              lockScalingY: true,
              hasBorders: false,
              hasControls:false,
              lockUniScaling:true,
              editable: true,
              textLength: 8,
              maxLength: 8,
              max: 8,
              fixedWidth: 320,
              fixedHeight: 300,
              textAlign:"left",
              breakWords: true,
              maxLineCharacherCount:29,
              maxNoofLines:9,
              maxNoOfChars:230
          
          };
      if (t[320] = {
              fontSize: 12,
              actualFontSize:12,
              left: 96,
              width: 132,
              top: 143,
              fixedWidth: 132,
              fixedHeight: 120,
              breakWords: true,
              splitByGrapheme:false,
              maxLineCharacherCount:27,
              maxNoofLines:8,
              maxNoOfChars:230
          },t[360] = {
              fontSize: 12,
              actualFontSize:12,
              left: 106,
              width: 142,
              top: 163,
              fixedWidth: 142,
              fixedHeight: 130,
              breakWords: true,
              splitByGrapheme:false,
              maxLineCharacherCount:27,
              maxNoofLines:8,
              maxNoOfChars:230
          },t[375] = {
              fontSize: 12,
              actualFontSize:12,
              left: 116,
              width: 142,
              top: 163,
              fixedWidth: 142,
              fixedHeight: 150,
              breakWords: true,
              splitByGrapheme:false,
              maxLineCharacherCount:27,
              maxNoofLines:9,
              maxNoOfChars:230
          }, t[425] = {
              fontSize: 15,
              actualFontSize:12,
              left: 127,
              width: 163,
              top: 188,
              fixedWidth: 163,
              fixedHeight: 150,
              breakWords: true,
              splitByGrapheme:false,
              maxLineCharacherCount:27,
              maxNoofLines:8,
              maxNoOfChars:230
          }, t[411] = {
              fontSize: 15,
              actualFontSize:12,
              left: 127,
              width: 163,
              top: 188,
              fixedWidth: 163,
              fixedHeight: 150,
              breakWords: true,
              splitByGrapheme:false,
              maxLineCharacherCount:27,
              maxNoofLines:8,
              maxNoOfChars:230
          }, t[412] = {
              fontSize: 15,
              actualFontSize:12,
              left: 127,
              width: 163,
              top: 188,
              fixedWidth: 163,
              fixedHeight: 150,
              breakWords: true,
              splitByGrapheme:false,
              maxLineCharacherCount:27,
              maxNoofLines:8,
              maxNoOfChars:230
          }, t[767] = {
              fontSize: 25,
              actualFontSize:25,
              left: 225,
              width: 150,
              top: 343,
              fixedWidth: 150,
              fixedHeight: 120,
              breakWords: true,
              splitByGrapheme:false,
              maxLineCharacherCount:27,
              maxNoofLines:8,
              maxNoOfChars:230
          }, e < 766) {
          var a = function () {
              var o;
              for (option in t)
                  if (parseInt(option) >= e) {
                      o = t[option];
                      break
                  } return o
          }();
          o.fontSize = a.fontSize, o.left = a.left, o.top = a.top, o.width = a.width,o.width = a.fixedWidth,o.height = a.fixedHeight,o.breakWords = a.breakWords,o.maxLineCharacherCount = a.maxLineCharacherCount,o.maxNoofLines = a.maxNoofLines,o.maxNoOfChars = a.maxNoOfChars
      }

      function i() {
            
          ! function (e) {
                r();
                  
              new FontFaceObserver("Book Antiqua").load().then(function () {
                  r();
                  
                  var t = new fabric.Textbox(e, o);
                  window._canvas.add(t).setActiveObject(t);
                  
                  
                  window._canvas.renderAll();
                  
                
          
                
                    
              }).catch(function () {
                r();
                  delete o.fontFamily;
                  
                  var t = new fabric.Textbox(e, o);
                  window._canvas.add(t).setActiveObject(t);
                  window._canvas.renderAll();
                  
                  
          
                
                    
              })
          }($(".msg_radio:checked").length > 0 ? $(".msg_radio:checked").val() : ($("#custom_message").val().length>0 ? $("#custom_message").val() : ""));
          
        $("#canvas_errors").text("");
        $("#canvas_errors").hide();
        $(".message2 .err").text("");
         

      }

      function c(e) {
          Shopify.queue = [];
          for (var t = e, o = 0; o < t.length; o++) {
              product = t[o];
              var n = {
                  variantId: product.variant_id,
                  qty: product.qty
              };
              product.prop && (n.prop = product.prop), Shopify.queue.push(n)
          }
          Shopify.moveAlong = function () {
              if (Shopify.queue.length) {
                  var e = Shopify.queue.shift(),
                      t = {
                          quantity: e.qty,
                          id: e.variantId
                      };
                  e.prop && (t.properties = e.prop), $.ajax({
                      type: "POST",
                      url: "/cart/add.js",
                      dataType: "json",
                      data: t,
                      success: function (e) {
						
                        $(".js-show-header-dropdown").trigger('mouseover');
                        
                        $("#xbutton-cart,#button-cart").attr('disabled',false);
						$("#xbutton-cart,#button-cart").html("<i class='fa fa-shopping-bag'></i> Add to cart");

                          Shopify.moveAlong()
                      },
                      error: function () {
                          Shopify.queue.length && Shopify.moveAlong()
                      }
                  })
              } else{ 

                $.ajax({
                      type: "GET",
                      url: "/cart.js",
                      dataType: "json",
                      success: function (e) {

                        updateAllKarts(e.item_count);
                          
                        
                          
                            if(window.innerWidth < 993){
                                
                                $(".header-icons-mobile .js-show-header-dropdown").click();
                                $('html, body').animate({
                                  scrollTop: $("header-icons-mobile .js-show-header-dropdown").offset().top
                                  }, 10,function(){
                  
                                    $('html, body,#product_customizer_slider').stop();
                                  });
                                
                              
                            }else{
                              
                              $(".header-wrapicon2 .js-show-header-dropdown").trigger('mouseover');
                            
                            }

                      },
                      
                  });

                

                /* Update Cart Here*/


               } 
          }, Shopify.moveAlong()
      }

      function s() {
          
            i()
            
      }

      function r() {
          window._canvas.getObjects().forEach(e => {
              window._canvas.remove(e)
          }), window._canvas.renderAll();
              
      }

      function d() {
            
          var e = _price;
          1 == $(".add_check").prop("checked") ? e = _price + 2e3 : ( $(".msg_radio").prop("checked", !1), $(".show_message").prop("checked", !1)), 1 == $(".show_message").prop("checked") && (e += 500), $("#productPrice").html(Shopify.formatMoney(e));
          
          if($("#product_customizer_slider_main").hasClass("slick-initialized")){
            
             
          }else{
            
            $("#product_customizer_slider_main").slick({slidesToShow:1,
                slidesToScroll:1,
                fade:true,
                dots:false,
                dotsClass:"product_customizer_slider_dots",
                infinite:false,
                autoplay:false,
                arrows:false,
                asNavFor:"#product_customizer_slider_dots"
            });
            
            $("#product_customizer_slider_dots").slick({infinite:true,
              slidesToShow:4,
              slidesToScroll:1,
              dots:false,
                infinite:false,                                        
               focusOnSelect:true,
              arrows:true,
              appendArrows:$("#product_customizer_slider_dots"),
              prevArrow:'<div class="swiper-button-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
              nextArrow:'<div class="swiper-button-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
              asNavFor:"#product_customizer_slider_main",
              dots:false
            });
            
            $("#product_customizer_slider_dots .slick-dots").before("<div id='canvas_errors'></div>");
          }
        
        
        
        

        
        
                      
      }! function (t) {
        
        
        
        
          
          var o = window._canvas = new fabric.Canvas("canvas"),
              n = t;
          e > 767 ? (o.setBackgroundImage(n, o.renderAll.bind(o), {
              crossOrigin: "anonymous"
          }), o.setWidth(750), o.setHeight(750), o.renderAll()) : (o.setWidth(e), o.setHeight(e), fabric.Image.fromURL(t, function (e) {
              o.setBackgroundImage(e, o.renderAll.bind(o), {
                    scaleX: o.width / e.width,
                  scaleY: o.height / e.height,
                    
              })
          }, {
              crossOrigin: "anonymous"
          }), o.renderAll()),o.on("text:typing:done", function (e) {

var t1 = e.target;

t1.splitByGrapheme = false;

doneTyping();


}),o.on("text:maxlength:reached", function (e) {
            
            
            $("#canvas_errors").text("Limit of 250 characters Reached, If you have done typing you can add product to cart.").fadeIn(800,function(){
                    	$(this).fadeOut();
                    });
          
          }),o.on("text:height:reached", function (e) {
            

var t1 = e.target;

t1.splitByGrapheme = false;
            
            $(window).scroll(function(e){
    			e.preventDefault();
			});
            
            /*$("#canvas_errors").text("Box Height Reached, If you have done typing you can add product to cart.");
            $("#canvas_errors").show();*/
            
				$("body textarea").not( "#custom_message" ).on("keydown",function(event){
                  
                 
                        
                        if((event.keyCode == 13)) {
                            event.preventDefault();
                            
                            return false;
                        }
                  			
                  		if(t1._textLines.length	> t1.maxNoofLines){
                          console.log("text:height:reached:1");
                     		return false;
                          
                        }else if(t1._textLines.length	> t1.maxNoofLines && event.keyCode == 13){
                     		console.log("text:height:reached:2");
                     		return false;
                          
                        }else if(t1._textLines.length	> t1.maxNoofLines && e.keycode == 13 || e.keycode == 16 || e.keycode == 37 || e.keycode == 38  || e.keycode == 43 || e.keycode == 39 || e.keycode == 8){
                            console.log("text:height:reached:3");
                        	return true;
                        }else if(t1._textLines.length	> t1.maxNoofLines && t1.get2DCursorLocation().charIndex > t1.maxLineCharacherCount && event.keyCode >= 65 && event.keyCode <= 90 ){
                          event.preventDefault();
                          console.log("text:height:reached:4");
                          $("#canvas_errors").text("Box Height Reached, If you have done typing you can add product to cart.").fadeIn(800,function(){ 
                                 $(this).fadeOut();
                          });
                            
                            return false;
                          
                        }
							
                      
                    });			
            

            


}),o.on("object:modified", function (e) { 

            if($("#prd_customizer").length > 0){
              
              /*window._canvas.getObjects()[0].renderCursorOrSelection();*/
              
            }


}),o.on("text:changed", function (e) {
$('html, body').animate({
                      scrollTop: $("#product_customizer_slider").offset().top + 120
                      }, 10,function(){
                    
                      $('html, body,#product_customizer_slider').stop();
                  });

/*

      



            
              var page = $("html, body, #product_customizer_slider");

            page.on("scroll mousedown wheel DOMMouseScroll mousewheel touchmove", function(){
                
                 page.stop();
             });
              
              var t1 = e.target;
        
              
              
              $("#canvas_errors").text("");
              $("#canvas_errors").css('display','none');
              
            if(window._canvas.getObjects()[0]._textLines.length > 9){
              var t1 = e.target;
              if (t1.height > t1.fixedHeight) {

                t1.height = t1.fixedHeight;

                 window._canvas.getObjects()[0].splitByGrapheme = true;
          
                    var original_text = window._canvas.getObjects()[0].text;
                    var cropped_text = original_text.substring(0,230);
                    
                    window._canvas.getObjects()[0].splitByGrapheme = false;
                    window._canvas.getObjects()[0].text = cropped_text+" ";
                    
                    window._canvas.requestRenderAllBound();
                    

              }
              
              if(window._canvas.getObjects()[0].get2DCursorLocation().charIndex > 30){
              
                    
                    

                      window._canvas.getObjects()[0].exitEditing();
                      
                      $("#canvas_errors").text("Box Height Reached, If you have done typing you can add product to cart.").fadeIn(4000,function(){ 
                          console.log("canvas_errors 5");
           
                            $("#canvas_errors").css('display','none');  
                        });
                        
              
            }else if(window._canvas.getObjects()[0].text.length > 230){

                    window._canvas.getObjects()[0].splitByGrapheme = true;
          
                    var original_text = window._canvas.getObjects()[0].text;
                    var cropped_text = original_text.substring(0,230);
                    
                    window._canvas.getObjects()[0].splitByGrapheme = false;
                    window._canvas.getObjects()[0].text = cropped_text+" ";
                    
                    window._canvas.requestRenderAllBound();
                    
            }



            }else{
                var t1 = e.target;
                
                t1.height = t1.fixedHeight;
              
            }
              e.scaleX = !1;
              e.scaleY = !1;
              
              
              var t1 = e.target;
              if (t1.width > t1.fixedWidth) {
                
                t1.width = t1.fixedWidth;
              }

              if (t1.height > t1.fixedHeight) {
                
                t1.height = t1.fixedHeight;
              }
              
              
              
                var dynamic_text = window._canvas.getObjects()[0].text;
              
                if($("#custom_message").is(":visible")){
                  $("#custom_message").val(dynamic_text);
                  
                  
                    
                  window._canvas.getObjects()[0]._textLines.length > 7 && (o.forEachObject(e => {
                    
                    $("body textarea").not( "#custom_message" ).on("keydown",function(event){

                        if((event.keyCode == 13) && ($(event.target)[0]!=window._canvas.getObjects()[0])) {
                            event.preventDefault();
                            console.log("false:8");
                            return;
                        }


                      
                    });
                      e.selectable = true, e.evented = true,e.editable = true;
                        
                    if($("#custom_message").is(":visible")){
                      $(".err").css("color", "red"), $("#custom_message").css("border", "1px solid red !important;");
                          
                    }
                    
                    
                    
                   
                  }));
                  
                  
                  window._canvas.getObjects()[0].text.length > 220 && (o.forEachObject(e => {
                      e.selectable = true, e.evented = true,e.editable = true;
                        
                    if($("#custom_message").is(":visible")){
                      $(".err").css("color", "red"), $("#custom_message").css("border", "1px solid red !important;");
                          
                    }
                    
                    
          
                  }));
                  
                   
                }
                
              
          
                
                window._canvas.getObjects()[0]._textLines.length > 7  && (o.forEachObject(e => {

                  
                  if(window._canvas.getObjects()[0]._textLines.length > 7){

      
                    
                  $("body textarea").not( "#custom_message" ).on("keydown",function(event){

                    
                      if((event.keyCode == 13) && ($(event.target)[0]!=window._canvas.getObjects()[0])) {
                          event.preventDefault();
                          console.log("false:9");
                          return;
                      }

   
                    
                    
                    if(window._canvas.getObjects()[0]._textLines.length > 7 && window._canvas.getObjects()[0].get2DCursorLocation().charIndex > o.maxLineCharacherCount){


                      window._canvas.getObjects()[0].exitEditing();
                      e.evented = false;e.selectable = false;e.editable = false,e.isEditing = false;
                      
                        $("#canvas_errors").text("Box Height Reached, If you have done typing you can add product to cart.").fadeIn(1200,function(){ 


                          console.log("canvas_errors 6");
                          
                            $("#canvas_errors").css('display','none');              
                        });

                      
                      
                    }
                    
                  });
                    
                    
                  }else{

                    
                    
                     $("body textarea").not( "#custom_message" ).on("keydown",function(event){


                      
                       
                  });
                  
                  
                  
                  }


                  
                  
                  if(window._canvas.getObjects()[0].text.length > 230){
                    
 
                    
                    window._canvas.getObjects()[0].splitByGrapheme = true;
          
                    var original_text = window._canvas.getObjects()[0].text;
                    var cropped_text = original_text.substring(0,230);
                    
                    window._canvas.getObjects()[0].splitByGrapheme = false;
                    window._canvas.getObjects()[0].text = cropped_text+" ";
                    
                    window._canvas.requestRenderAllBound();

                    
                    
                    
                    doneTyping();
                    $("#canvas_errors").text("Limit of 250 characters Reached, If you have done typing you can add product to cart.").fadeIn(4000,function(){
                          
                  
                      });

                    
                                       
                    window._canvas.getObjects()[0].exitEditing();
                    o.trigger("text:editing:exited");
                    e.evented = false,e.selectable = false,e.editable = false,e.isEditing = false;
                    
                    
                    

                      
                    
                    
                    

                    
                    
                    
                  }else{


                    
                    
                    e.selectable = true, e.evented = true,e.editable = true;
                  
                    
                  }
                  
                  
                  
  
                      
                  if($("#custom_message").is(":visible")){

                     
                    $(".err").css("color", "red"), $("#custom_message").css("border", "1px solid red !important;");
                    
                  }
                  
                  
                 
                  
                  
              })
                                                                        
        
          
                                                                       
        );
              
              
                window._canvas.getObjects()[0].text.length > 230 && (o.forEachObject(e => {
                  
                  if(window._canvas.getObjects()[0]._textLines.length>9){
                    
                    e.selectable = true, e.evented = true,e.editable = true;
                  
                  }else{
                    
                    e.selectable = true, e.evented = true,e.editable = true;
                    
                  }
                  
                  if(window._canvas.getObjects()[0].text.length > 240){
                    
                    
                     
                     event.preventDefault();
                     console.log("false:1");
                    
                    
                    var original_text = window._canvas.getObjects()[0].text;
                    var cropped_text = original_text.substring(0,230);
                    window._canvas.getObjects()[0].splitByGrapheme = false;
                    window._canvas.getObjects()[0].text = cropped_text+" ";
                    
                    window._canvas.requestRenderAllBound();

                    
                    doneTyping();
                    $("#canvas_errors").text("Limit of 250 characters Reached, If you have done typing you can add product to cart.");        
                    
                    $("#canvas_errors").fadeIn(2000,function(){ 
                      console.log("canvas_errors 8");

   

                  $("#canvas_errors").css('display','none');  
                      
                    });
                    o.trigger("text:editing:exited");
                    return;
                    
                         
                    
                    
                    
                    e.evented = false,e.selectable = false,e.editable = false,e.isEditing = false,e.isEditing = false;
                 
                    
                
                    
                 

                  
                  }else{
                    e.selectable = true, e.evented = true,e.editable = true;
                
                    
                   
                    
                  }
                  
                      
                  if($("#custom_message").is(":visible")){

                    $(".err").css("color", "red"), $("#custom_message").css("border", "1px solid red !important;");
                    
                  }
                  
                  
              
                    
                  
              }));
         
                
              
              
              
              
        if(window._canvas.getObjects()[0].get2DCursorLocation().lineIndex == 8 || window._canvas.getObjects()[0].get2DCursorLocation().lineIndex == 9 || window._canvas.getObjects()[0].get2DCursorLocation().lineIndex == 10){
                  
                    
                  
                   if(window._canvas.getObjects()[0].get2DCursorLocation().charIndex > o.maxLineCharacherCount){
                    evented = false,e.selectable = true,e.editable = false,e.isEditing = false;
                   }
                  
                  
                
                  
                  
                }else{

   
                  
                  evented = true,e.selectable = true,e.editable = true;
                  
                  if(window._canvas.getObjects()[0]._textLines.length > 8){


                    
                    if(window._canvas.getObjects()[0].get2DCursorLocation().charIndex > o.maxLineCharacherCount ){


                      $("#canvas_errors").text("Box Height is Limited, Can't Add New Line.").fadeIn(2000,function(){ 
                          console.log("canvas_errors 9");

  

                          $("#canvas_errors").css('display','none');  
                      });
                      
          e.evented = false;e.selectable = false;e.editable = false,e.isEditing = false;

                      $("body textarea").not( "#custom_message" ).on("keydown",function(event){

                
                      
                      if((event.keyCode == 13 ) && ($(event.target)[0]!=window._canvas.getObjects()[0])) {
                          event.preventDefault();
                          console.log("false:2");
                          return;
                      }
                    
                  });
        }

                  
                    
                    
                  }else{

                    
                    
                     $("body textarea").not( "#custom_message" ).on("keydown",function(event){

           
                       var t1 = e.target;
                       
                       if(window._canvas.getObjects()[0].get2DCursorLocation().charIndex > o.maxLineCharacherCount ){
                         
                  t1.splitByGrapheme = true;
            
                         
                  e.evented = false;e.selectable = false;e.editable = false,e.isEditing = false;
                        
            
                         
                        
            
                         
                       }else{
                         
                       
                       
                       }
                       
                       if(window._canvas.getObjects()[0]._textLines.length > 8){
                      e.evented = false;e.selectable = false;e.editable = false,e.isEditing = false;
                        t1.splitByGrapheme = true;
                        
                      
                      
                      $("body textarea").not( "#custom_message" ).on("keydown",function(event){

                      
                        var c_index = parseInt(window._canvas.getObjects()[0].get2DCursorLocation().charIndex);
                        
                        if(c_index > 38){
                          
                        
                          
                          
                          console.log("false:3");

                          return;
                        
                        }else{
                          $("#canvas_errors").text("");
                            $("#canvas_errors").css('display','none'); 
                   
                        }

                          if((event.keyCode == 13)) {
                              event.preventDefault();
                              console.log("false:4");
                              return;
                          }
                        
                         


                      });
                         
                      

                  
                    
                    
                       }else{
                         
                       }
                       
                       
                      
                       
                       
                       
                  });
                    
                    if(window._canvas.getObjects()[0].text.length < 220){
                      
                      if(window._canvas.getObjects()[0].get2DCursorLocation().lineIndex == 8 || window._canvas.getObjects()[0].get2DCursorLocation().lineIndex == 9 || window._canvas.getObjects()[0].get2DCursorLocation().lineIndex == 10){
                        
                        if(window._canvas.getObjects()[0].get2DCursorLocation().charIndex > o.maxLineCharacherCount){
                        evented = false,e.selectable = true,e.editable = false,e.isEditing = false;
                      }
                        
                      }else{
                        
                        
                    
                    
                    
                        if(window._canvas.getObjects()[0].get2DCursorLocation().charIndex > o.maxLineCharacherCount){
                          
                          
                          
                          var t1 = e.target;
                          t1.splitByGrapheme = true;
                          
                          
                          if (t1.width > t1.fixedWidth) {
                            
                            t1.width = t1.fixedWidth;
                          }

                          if (t1.height > t1.fixedHeight) {
                            
                            t1.height = t1.fixedHeight;
                          }

                        
              

                          
                          e.target.trigger("text:changed");
                          console.log("text:change:triggered:1");
                          
                          t1.splitByGrapheme = true;
                          
                          
                          
                
                    }
                        
                        if(window._canvas.getObjects()[0].textLines[window._canvas.getObjects()[0].textLines.length-1].length > 29){
                          
                            
                    var t1 = e.target;
                          t1.splitByGrapheme = true;
                          
                          
                          if (t1.width > t1.fixedWidth) {
                            
                            t1.width = t1.fixedWidth;
                          }

                          if (t1.height > t1.fixedHeight) {
                            
                            t1.height = t1.fixedHeight;
                          }
                          
                          var t = window._canvas.getObjects()[0].textLines[window._canvas.getObjects()[0].textLines.length-1]+"  ";
                          window._canvas.getObjects()[0].textLines[window._canvas.getObjects()[0].textLines.length-1] = t;
                          
                          e.target.trigger("text:changed");
                          console.log("text:change:triggered:2");
                          
                          


                        }
                        
                        
                        if(window._canvas.getObjects()[0].get2DCursorLocation().charIndex > o.maxLineCharacherCount){
                           var t1 = e.target;
                          

                          t1.splitByGrapheme = true;
                          

            
                          
                          if (t1.width > t1.fixedWidth) {
                            
                            t1.width = t1.fixedWidth;
                          }

                          if (t1.height > t1.fixedHeight) {
                            
                            t1.height = t1.fixedHeight;
                          }
                          
                          
                          
                          
                          var t = window._canvas.getObjects()[0].textLines[window._canvas.getObjects()[0].textLines.length-1]+"  ";
                          window._canvas.getObjects()[0].textLines[window._canvas.getObjects()[0].textLines.length-1] = t;
                          
                          
                          e.target.trigger("text:changed");
                          console.log("text:change:triggered:3");
                          
                        e.evented = false,e.selectable = true,e.editable = false,e.isEditing = false;
                          
                          
                        }else{
                            var t1 = e.target;
                          
                            
                          
                          if(window._canvas.getObjects()[0].get2DCursorLocation().charIndex > o.maxLineCharacherCount){
                            
                            

                            t1.splitByGrapheme = true;
                            

                          }else{


                            
                            if(window._canvas.getObjects()[0].get2DCursorLocation().lineIndex > 0){
                              
                              if(window._canvas.getObjects()[0]._textLines[window._canvas.getObjects()[0].get2DCursorLocation().lineIndex].length > 28){
                                
                              
                                
                                t1.splitByGrapheme = true;
                                
                                
                              }else{
                                
                                t1.splitByGrapheme = true;
                                
                              }
                            }else if( window._canvas.getObjects()[0].get2DCursorLocation().lineIndex == 0){
                              
                              if(window._canvas.getObjects()[0]._textLines[window._canvas.getObjects()[0].get2DCursorLocation().lineIndex].length > 29){

                                

                                t1.splitByGrapheme = true;
                                

                              }else{

                                
                                t1.splitByGrapheme = true;
                                

                              }
                              
                            }
                            
                            
                          }
                          
                            
                            if(window._canvas.getObjects()[0]._textLines.length > 8){
                    
                              $("body textarea").not( "#custom_message" ).on("keydown",function(event){
                                
                                  if((event.keyCode == 13) && ($(event.target)[0]!=window._canvas.getObjects()[0])) {

                                      
                                      event.preventDefault();
                                      console.log("false:5");
                                      return;
                                  }
                              });
                              

                              }else{
                                
                                
                
                                if(window._canvas.getObjects()[0]._textLines.length > 8){
                    
                                  $("body textarea").not( "#custom_message" ).on("keydown",function(event){

                                  
                                    
                                      if((event.keyCode == 13) && ($(event.target)[0]!=window._canvas.getObjects()[0])) {
                                          event.preventDefault();

                                          console.log("false:6");
                                          return;
                                      }
                                  });
                              

                                }else{
                                  
                                  
                                }
                                

                              }
                            
                          e.selectable = true, e.evented = true,e.editable = true;  
                          
                          
                          
                          
                        }           
                        
                        
                      
                      
                      }
                      
                      
                         var t1 = e.target;
                      
                          if (t1.width > t1.fixedWidth) {
                            
                            t1.width = t1.fixedWidth;
                          }

                          if (t1.height > t1.fixedHeight) {
                            
                            t1.height = t1.fixedHeight;
                          }
                      
                      
                    
                  
                  
                  }else{
                    
                    
                    
                       var t1 = e.target;
                      t1.splitByGrapheme = true;
                      
                        if (t1.width > t1.fixedWidth) {

                          t1.width = t1.fixedWidth;
                        }

                        if (t1.height > t1.fixedHeight) {
                          
                          t1.height = t1.fixedHeight;
                        }
                    
                    
                    
                  
                    
                    if(window._canvas.getObjects()[0].get2DCursorLocation().lineIndex > 8 && window._canvas.getObjects()[0].get2DCursorLocation().charIndex > o.maxLineCharacherCount){
                          console.log("exit from herer");
                          var t1 = e.target;
                          t1.splitByGrapheme = true;

                          console.log("false:7");
                        
                    }
                
                    
                    var original_text = window._canvas.getObjects()[0].text;
                    var cropped_text = original_text.substring(0,230);
                    window._canvas.getObjects()[0].splitByGrapheme = false;
                    window._canvas.getObjects()[0].text = cropped_text;
                    
                    window._canvas.requestRenderAllBound();
          
          
                    
                    if(window._canvas.getObjects()[0].text.length>= 240){
                    doneTyping();
                    $("#canvas_errors").text("Limit of 250 characters Reached, If you have done typing you can add product to cart.").fadeIn(4000,function(){ 
                      console.log("canvas_errors 2");

                    });
                      
                      window._canvas.getObjects()[0].exitEditing();
                    window._canvas.getObjects()[0].trigger("text:editing:exited");
                      
                      
                      }
                    
                    
                                        
                    

                    
                    
                    
                    
                  }
                  
                  
                  
                  }
                  
                  
                  
                  
                
                }
              
            */}),$(".upper-canvas").on("click ontouchstart mouse:down",function(e){
              
              
            if(window._canvas.getObjects().length>0){  

              if(window._canvas.getObjects()[0].textLines > 8){

                /*$('html, body').animate({
                      scrollTop: $("#product_customizer_slider").offset().top + 120
                      }, 10,function(){
                    
                      $('html, body,#product_customizer_slider').stop();
                  });*/

                $("#canvas_errors").text("Box Height Reached, If you have done typing you can add product to cart.");
                        $("#canvas_errors").fadeIn(2000,function(){ 
                          console.log("canvas_errors 3");


                          /*$('html, body').animate({
                          scrollTop: $("#product_customizer_slider").offset().top + 120
                          }, 10,function(){
                        
                          $('html, body,#product_customizer_slider').stop();
                      });*/
                    
                      $("#canvas_errors").css('display','none');

                        });

              }else{
                  
              }
            
          }
                
            
      }),o.on("text:editing:entered", function (e) {

      
                /*$('html, body').animate({
                      scrollTop: $("#product_customizer_slider").offset().top + 120
                        }, 300,function(){
                      
                        $('html, body,#product_customizer_slider').stop();
                    });*/

            /*var page = $("html, body, #product_customizer_slider");

            page.on("scroll mousedown wheel DOMMouseScroll mousewheel touchmove", function(){
                
                 page.stop();
             });*/
            
            $("#canvas_errors").css("display","none");
            
            if(window._canvas.getObjects()[0]._textLines.length > 8){
              
              if(window._canvas.getObjects()[0].get2DCursorLocation().charIndex > o.maxLineCharacherCount){
              
                    window._canvas.getObjects()[0]._textLines.pop();
              
                      /*console.log("The Very First2 Lock");*/

                      window._canvas.getObjects()[0].exitEditing();
                      
                
                        
              
            }
                    }
            
            
              
              if(window._canvas.getObjects()[0].isEditing){
                
                
              }
              
            
            }),o.on("text:editing:exited", function (e) {
            
            

              window.addEventListener('keydown', function(e) {
                
                 var t = document.getElementById("custom_message");
  if(e.target == t){
    return;
  }
                
   
  if(e.keyCode == 32 && e.target == document.body || e.target == document.getElementsByTagName('img') || document.getElementsByTagName('canvas') || !document.getElementsByTagName('textarea') ) {
    $('html, body').animate({
                          scrollTop: $("#product_customizer_slider").offset().top + 120
                          }, 10,function(){
                        
                          $('html, body,#product_customizer_slider').stop();
                      });
    
    
  }
});
   
/*document.addEventListener('keydown', function(e) {

  if(e.keyCode == 32 && e.target == document.body || e.target == document.getElementsByTagName('img') || document.getElementsByTagName('canvas') || !document.getElementsByTagName('textarea') ) {
    $('html, body').animate({
                          scrollTop: $("#product_customizer_slider").offset().top + 120
                          }, 10,function(){
                        
                          $('html, body,#product_customizer_slider').stop();
                      });
    
  }
});*/
            
              /*var page = $("html, body, #product_customizer_slider");

            page.on("scroll mousedown wheel DOMMouseScroll mousewheel touchmove", function(){
                
                 page.stop();
             });*/

           
            
             
                          
            })
          var a = window._canvas2 = new fabric.Canvas("canvas2");
          a.setBackgroundImage("https://cdn.shopify.com/s/files/1/0257/0449/7224/files/Colorured.png?7879", a.renderAll.bind(a), {
              crossOrigin: "anonymous",
              hoverCursor: "pointer",
              selection: !0,
              selectionBorderColor: "green",
              backgroundColor: null
          }), a.setWidth(1156), a.setHeight(1156), a.renderAll()
      }("https://cdn.shopify.com/s/files/1/0257/0449/7224/files/Box.png?3333"), $(".message1 input").on("change",function (e) {
            r();
          /*e.preventDefault(), $(".message2").toggleClass("opened",false), $(".msg_radio").prop("checked", !1); if($(this).parents(".messagesdiv").find(".message2").hasClass("opened")){ $(this).parents(".messagesdiv").find(".message2").toggleClass("opened",false););  }else{ $(this).parents(".messagesdiv").find(".message2").toggleClass("opened", true); } */
          r();
          /*e.preventDefault(),*/ 

      
          $(".message2").toggleClass("opened",false);
        
          $(".message1 input").not(this).prop("checked", false);
        
          
          $(".msg_radio").prop("checked", !1); 


          if($(this).parents(".messagesdiv").find(".message1 input").is(":checked")){ 

            
            $(this).parents(".messagesdiv").find(".message2").toggleClass("opened", true); 
            
          
          }else{
      
            $(this).parents(".messagesdiv").find(".message1 input").not(this).prop("checked",false);
            $(this).parents(".messagesdiv").find(".message2").toggleClass("opened",false); 
            

           }
        
      }), $(".add_check").change(function () {
          d(), $("#product_customizer_slider").slideToggle(500), $("#product_customizer .checkbox").slideToggle(500), 0 == $(this).prop("checked") && $(".image_container").hide(1e3)
      }), $(".removeObjects").on("click", function () {
          r()
      }), $(".show_message").change(function () {
          if(!$(this).prop("checked")){
        
        $("#custom_message").val("");
        $(".msg_radio").prop("checked",false);
        r();

          }
          
          d(), $(".image_container").slideToggle(500);
            $("#product_customizer_slider_main").slick('slickGoTo', $('#product_customizer_slider_main .slick-list>div').children('div').length);
        $("#product_customizer_slider_dots").slick('slickGoTo', $('#product_customizer_slider_dots .slick-list>div').children('div').length);
          
      }), $("#custom_message").keyup(delay(function (e) {
          $(".message2 .err").text("");
          /*console.log("test");*/            
            window._canvas.getObjects().length > 0  ? (r(), s()) : s();
            
          
            $("#product_customizer_slider_main").slick('slickGoTo', $('#product_customizer_slider_main .slick-list>div').children('div').length);
          	$("#product_customizer_slider_dots").slick('slickGoTo', $('#product_customizer_slider_dots .slick-list>div').children('div').length);
        
          if ($(this).val().length > 0) {
        
              if (!($(this).val().length < 220)) return $(".err").css("color", "red"), $("#custom_message").css("border", "1px solid red !important;"), !1;
              var o = window._canvas;
                
        
              window._canvas.getObjects().length > 0   ? ( update = true ) : s();

              if(update){
                

                if(window._canvas.getObjects()[window._canvas.getObjects().length-1].text.length > 250){
                    
                  $(".err").css("color", "red"), $("#custom_message").css("border", "1px solid red !important;");
                    
                      
                        add_text = false;
                        /*console.log(add_text+"first if");*/
                        var o = window._canvas;
                        o.forEachObject(e => {
                            0 == e.selectable && (e.selectable = !0), 0 == e.evented && (e.evented = !0)

                        });
                  
                }
              
                  if(add_text){
                      /*console.log(add_text+"second if");*/
                        
                        
                    window._canvas._activeObject.text = '',window._canvas._activeObject.text = $(this).val(), window._canvas.renderAll();
                        
                        
                }

              }

              
              
          } else r()
      },1400)),$(document).on("click", ".upper-canvas", function () {
        
          var o = window._canvas;
              o.forEachObject(e => {
                  0 == e.selectable && (e.selectable = !0), 0 == e.evented && (e.evented = !0)
                      
                })}), $(".msg_radio").change(function () {
							
            
          
          $("#canvas_errors").text("Loading...").fadeIn(4000,function(){ 
              
                $("#canvas_errors").css('display','none');  
                      
                    });         
        
            window._canvas.getObjects().length > 0  ? (r(), s()) : s();
          
            $("#product_customizer_slider_main").slick('slickGoTo', $('#product_customizer_slider_main .slick-list>div').children('div').length);
          	$("#product_customizer_slider_dots").slick('slickGoTo', $('#product_customizer_slider_dots .slick-list>div').children('div').length);
        
                /*$('html, body').animate({
                    scrollTop: $("#product_customizer_slider").offset().top + 120
                    }, 1200);*/
            
            
      }); 
      setTimeout(function(){
      $("#xbutton-cart,#button-cart").off("click").on("click",function (e) {
        
          e.preventDefault();
        	$(this).attr('disabled',true);            
        var t, o = [],atoms = {items:[]},
            a = parseInt($("[data-variant-title='"+$(".single-option-selector").val()+"']").val());
        
        console.log(atoms);
            

            if(1 == $(".add_check").prop("checked")){

          
          if($("#product_customizer").length == 0 && window.only_giftbox_is_enabled == true){ 
            
            /*
            var s = {
                                      variant_id: a,
              						  id:a,
                                      qty: 1,
                                      
                                  };
            */
            if($("body #rc_radio_options").length>0){
              
              if($('body [name="properties[shipping_interval_unit_type]"]').val() == "undefined"){
                
                var s = {
                  variant_id: a,
                  id: a,
                  qty: 1
              };
                
              
              }else{
                
                var frequency = $("body [name='properties[shipping_interval_frequency]']").val();
              
              var unit_type = $('body [name="properties[shipping_interval_unit_type]"]').val();
              
              var s = {
                  variant_id: a,
                  id: a,
                  qty: 1,
                 properties: {
                 shipping_interval_frequency: frequency,
                 shipping_interval_unit_type: unit_type
                }
                
              };
              
              
              }
              
            
            }else{
            	
              var s = {
                  variant_id: a,
                  id: a,
                  qty: 1
              };
            
            }
            
                                  var r = {
                                      variant_id: 32380520104030,
                                      id: 32380520104030,
                                      qty: 1,
                                      /*prop: {
                                          _boxImage: t
                                      }*/
                                  };
                              /* o.push(r, s);/* c(o);*/
            
            atoms.items.push(r,s);
            
            $.ajax({
            url: "/cart/add.js",
            type: "post",
            data: atoms,
            dataType: "json",
            beforeSend: function() {
                $(".btnsubmit").html("<i class='fa fa-shopping-bag'></i>Adding...");
              	
            },
            complete: function() {
                $(".btnsubmit").html("<i class='fa fa-shopping-bag'></i> Add to cart");
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
        });
            
            console.log(o);
            
            $(this).html(" Add to cart");
          
          
          
          }else{
            
            if(window._canvas.getObjects()[0] == undefined && $("#show_message").is(":checked")){ 
              $(this).attr('disabled',false);
              alert("Please select the customized message.");
            return;
              
            }else if($("#show_message").is(":checked") && window._canvas.getObjects()[0] != undefined){
              var i = window._canvas.getObjects()[0].text;
            }else if($("#show_message").is(":checked") && $(".msg_radio").is(":checked")){
              var i = window._canvas.getObjects()[0].text;
            }else if($("#show_message").is(":checked") && !$(".msg_radio").is(":checked")){
              	alert("Please select the customized message.");
              	$(this).attr('disabled',false);
            	return;
            }
            
            
            

              var t = {
                        img_preview: window._canvas.toDataURL(),
                        img_proof: window._canvas2.toDataURL()
                    };
            
            
              
            if($(".add_check").is(":checked") && $(".msg_radio").is(":checked")){

                  $.ajax({
                      type: "POST",
                      url: "https://amkwebsolutions.com/shopify-app/subscription-swap/UploadCanvas",
                      data: t,
                      dataType: "json",
                      beforeSend: function() {
                          $(".btnsubmit").html("<i class='fa fa-shopping-bag'></i>Adding...");

                      },
                      complete: function() {
                          $(".btnsubmit").html("<i class='fa fa-shopping-bag'></i> Add to cart");
                      },	
                      success: function (e) {
                          if (200 == e.code) {
                              var t = e.data.img_preview,
                                  n = e.data.img_proof,
                                  s = {
                                      variant_id: a,
                                    	id:a,
                                      qty: 1,
                                      /*prop: {
                                          _boxImage: t,
                                          _bxMsg: i,
                                          _bxProof: n
                                      }*/
                                  },
                                  r = {
                                      variant_id: 32380520104030,
                                    	id: 32380520104030,
                                      qty: 1,
                                      /*prop: {
                                          _boxImage: t
                                      }*/
                                  },
                                  d = {
                                      variant_id: 31224069619806,
                                      id: 31224069619806,
                                      qty: 1,
                                      properties: {
                                          _bxMsg: i,
                                          _boxImage:t
                                      }
                                  };
                              /*o.push(d, r, s);/* c(o)*/
                            atoms.items.push(d, r, s);
                            
                            
                            $.ajax({
                              url: "/cart/add.js",
                              type: "post",
                              data: atoms,
                              dataType: "json",
                              beforeSend: function() {
                                  $(".btnsubmit").html("<i class='fa fa-shopping-bag'></i>Adding...")
                              },
                              complete: function() {
                                  $(".btnsubmit").html("<i class='fa fa-shopping-bag'></i>Add to cart")
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
                          });
                                
                            console.log(o);
                                
                                
                          }
                      }
                  });
          }else if($(".add_check").is(":checked")){
            
            
                                  
            var s = {
                                      variant_id: a,
                                    	id:a,
                                      qty: 1,
                                      /*prop: {
                                          _boxImage: t,
                                          _bxMsg: i,
                                          _bxProof: n
                                      }*/
                                  },
                                  r = {
                                      variant_id: 32380520104030,
                                    	id: 32380520104030,
                                      qty: 1,
                                      /*prop: {
                                          _boxImage: t
                                      }*/
                                  };
                              /*o.push(d, r, s);/* c(o)*/
                            atoms.items.push(r, s);
            
            $.ajax({
                              url: "/cart/add.js",
                              type: "post",
                              data: atoms,
                              dataType: "json",
                              beforeSend: function() {
                                  $(".btnsubmit").html("<i class='fa fa-shopping-bag'></i>Adding...")
                              },
                              complete: function() {
                                  $(".btnsubmit").html("<i class='fa fa-shopping-bag'></i>Add to cart")
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
                          });
            
            
            
          }
            
            
          
          
          
          
          }

          
            
            
              

              
              
              

          }else {

            
            if($("body #rc_radio_options").length>0){
              
              if($('body [name="properties[shipping_interval_unit_type]"]').val() == "undefined"){
                
                var s = {
                  variant_id: a,
                  id: a,
                  qty: 1
              };
                
              
              }else{
                
                var frequency = $("body [name='properties[shipping_interval_frequency]']").val();
              
              var unit_type = $('body [name="properties[shipping_interval_unit_type]"]').val();
              
              var s = {
                  variant_id: a,
                  id: a,
                  qty: 1,
                 properties: {
                 shipping_interval_frequency: frequency,
                 shipping_interval_unit_type: unit_type
                }
                
              };
              
              
              }
              
            
            }else{
            	
              var s = {
                  variant_id: a,
                  id: a,
                  qty: 1
              };
            
            }
              
            
              /*o.push(s); /*, c(o)*/
            atoms.items.push(s);
            var form_data = $("#form_buy input[type='text'], #form_buy .select,#form_buy input[type='number'],#form_buy input[type='hidden']");
            console.log(form_data);
            	$.ajax({
            url: "/cart/add.js",
            type: "post",
            data: atoms,
            dataType: "json",
            beforeSend: function() {
                $(".btnsubmit").html("<i class='fa fa-shopping-bag'></i>Adding...")
            },
            complete: function() {
                $(".btnsubmit").html("<i class='fa fa-shopping-bag'></i>Add to cart")
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
        });
          }
      });


        
$( "#product_customizer_slider .slick-active" ).on('keydown',function(e) {
  
  if(e.keyCode == 32) {

    e.preventDefault();
    
  }else{
  
  }
  
});
        

   $( ".upper-canvas" ).on('keydown',function(e) {
  
  if(e.keyCode == 32) {

    e.preventDefault();
    
  }
  
});
    
        
$( ".upper-canvas" ).on('dblclick',function() {
  
          if(window._canvas.getObjects().length>0){
            window._canvas.getObjects()[0].editable = true;
            window._canvas.getObjects()[0].selectable = true;
            window._canvas.getObjects()[0].evented = true;
          }
  
});
$( ".upper-canvas" ).on('click',function() {
  
  
  if(window._canvas.getObjects().length>0){
      window._canvas.getObjects()[0].editable = true;
      window._canvas.getObjects()[0].selectable = true;
      window._canvas.getObjects()[0].evented = true;
    }
  
});

/*        
$(document).keydown(function(e) {
  if(window._canvas.getObjects().length == 0){
    if (e.which == 32 ) {
        return;
    }
  }
});*/       
        
        }, 4000);
      
  });

  
  function delay(callback, ms) {
    
  var timer = 0;
  return function() {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}
  

function doneTyping() {
  
  

  var max_no_of_lines = window._canvas.getObjects()[0].maxNoofLines;  
  if(window._canvas.getObjects()[0]._textLines.length > max_no_of_lines){



    
    /* Get the Text from last line*/
            var lines_length = window._canvas.getObjects()[0]._textLines.length;
            var no_of_lines_to_remove =  lines_length - max_no_of_lines;

            for (var i = 1; i <=  no_of_lines_to_remove ; i++) {

              var remove_last_line_text = window._canvas.getObjects()[0]._textLines[window._canvas.getObjects()[0]._textLines.length - i].join("");
              window._canvas.getObjects()[0].splitByGrapheme = false;
           
               var width = window._canvas.getObjects()[0].fixedWidth;
             
               var height = window._canvas.getObjects()[0].fixedHeight;
             
               var unformatted = window._canvas.getObjects()[0];

               var canvas = window._canvas;
                
               var old_text = unformatted.text;

               var new_text = old_text.replace(remove_last_line_text,'');
              
               var formatted = new_text+" ";

               window._canvas.getObjects()[0].text = formatted;
window._canvas.getObjects()[0]._forceClearCache= true;
               window._canvas.requestRenderAllBound();

              
            }
            
window._canvas.getObjects()[0].exitEditing();
            

  }else{

    window._canvas.getObjects()[0].splitByGrapheme = false;
           
             var width = window._canvas.getObjects()[0].fixedWidth;
           
             var height = window._canvas.getObjects()[0].fixedHeight;
           
             var unformatted = window._canvas.getObjects()[0];

             var canvas = window._canvas;
  
        

             var formatted = unformatted.text+" ";

             window._canvas.getObjects()[0].text = formatted;
window._canvas.getObjects()[0]._forceClearCache= true;
             window._canvas.requestRenderAllBound();


  

  
         /*window._canvas.getObjects()[0].renderCursorOrSelection();*/
  }
  
  
}
   

$( ".upper-canvas" ).on('keydown',function(e) {
  
  if(e.keyCode == 32) {

    e.preventDefault();
    
  }
  
});
      
   
$( "#product_customizer_slider .slick-active" ).on('keydown',function(e) {

  if(e.keyCode == 32) {

    e.preventDefault();
    
  }else{
  console.log("else",e.target);
}
  
});


$( ".upper-canvas" ).dblclick(function() {
  $("canvas_errors").text("");
  $("canvas_errors").show();
  
          if(window._canvas.getObjects().length>0){
              window._canvas.getObjects()[0].editable = true;
              window._canvas.getObjects()[0].selectable = true;
              window._canvas.getObjects()[0].evented = true;
          }
  
});
   
$( ".upper-canvas" ).on('click',function() {
  
  
  $("canvas_errors").text("");
  $("canvas_errors").show();
  
  if(window._canvas.getObjects().length>0){
      window._canvas.getObjects()[0].editable = true;
      window._canvas.getObjects()[0].selectable = true;
      window._canvas.getObjects()[0].evented = true;
    }
  
});

   
})();