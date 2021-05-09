$(document).ready(function(){
  var canvas = window._canvas = new fabric.Canvas('canvas');
  
  var canvas2 = window._canvas2 = new fabric.Canvas('canvas2'),
      _imgSet = 'https://cdn.shopify.com/s/files/1/0257/0449/7224/files/Colorured.png?7879',
      _WindowWidth = $(window).width(),_MediaObject = {};
  _MediaObject[375]={fontSize:15,width:142};
  _MediaObject[425]={fontSize:18,width:180};
  _MediaObject[767]={fontSize:27,width:335};
  
  
  function resizeCanvas() {
    var winW = $(window).width(),
        winH = $(window).height(),
        curW = canvas.getWidth(),
        curH = canvas.getHeight(),
        canW = winW - 75,
        canH = winH - 60;
    canvas.setWidth(canW);
    canvas.setHeight(canW);
    canvas.renderAll();
  }
  resizeCanvas();
  
  var _SmallCanvasOptions = {
    width: 333,
    fontSize: 27,
    textAlign: 'left',
    fontFamily: 'Minion Roman',
    fill: 'white',
    lockMovementX : true,
    lockMovementY : true,
    lockScalingX:true,
    lockScalingY:true,
    hasBorders:false,
    hasControls:false,
  }
  canvas2.setBackgroundImage(_imgSet, canvas2.renderAll.bind(canvas2), {
    crossOrigin: 'anonymous',
    hoverCursor: 'pointer',
    selection: true,
    selectionBorderColor: 'green',
    backgroundColor: null
  });
  canvas2.setWidth(1156);
  canvas2.setHeight(1156);
  
  function GetCanVasOptions(){
    var _OptionGet;
    for (option in _MediaObject){
      if(parseInt(option) > _WindowWidth){
        _OptionGet = _MediaObject[option];
        break;
      } 
    }
    return _OptionGet;
  }
  
  
  if(_WindowWidth < 766 ){
    $('.mcanvas').css('width','100%');
    $('.mcanvas').css('max-width',_WindowWidth);
    $('.mcanvas').css('background-size','contain');
    $('.mcanvas').css('height',_WindowWidth);
    var _mobOptions = GetCanVasOptions();
    _SmallCanvasOptions['fontSize']=_mobOptions.fontSize;
    _SmallCanvasOptions['width']=_mobOptions.width;
    
    
    canvas.setWidth( $('.mcanvas').outerWidth());
  }
  canvas.on('text:changed', function(e) {
    if(e.target.text.length > 230){
      canvas.forEachObject(object => {
        object.selectable = false;
        object.evented = false;
      });
      canvas.discardActiveObject();
    }
  });
  $('.upper-canvas ').on('click', function() {
    canvas.forEachObject(object => {
      if (object.selectable == false){
        object.selectable = true;
      }
      if (object.evented == false){
        object.evented = true;
      }
    });
  });
  
  function AddWithFonts(_mytext){
    console.log(_SmallCanvasOptions);
    var font = new FontFaceObserver('Minion Roman');
    font.load().then(function () {
      var textbox = new fabric.Textbox(_mytext,{
        width: _SmallCanvasOptions.width,
        fontSize: _SmallCanvasOptions.fontSize,
        textAlign: 'left',
        fontFamily: 'Minion Roman',
        fill: 'white',
        lockMovementX : true,
        lockMovementY : true,
        lockScalingX:true,
        lockScalingY:true,
        hasBorders:false,
        hasControls:false,
      });
      canvas.add(textbox);
    }).catch(function () {
      console.log('Output Minion Roman failed to load.');
    });
  }

  function ClearCanvas(){
   canvas.getObjects().forEach((obj) => {
      canvas.remove(obj)
    });
    canvas.renderAll();
  }

  function AddTextBoxes(){
    var _mytext;
    if($(".msg_radio:checked").length > 0){
      _mytext=$(".msg_radio:checked").val();
    }else{
      _mytext = $("#custom_message").val()
    }
    AddWithFonts(_mytext);
  }
  function AddTextToCanvas(){
    AddTextBoxes();
  }
  function AskAndAddText(){
    if(canvas.getObjects().length >0 ){
      ClearCanvas();
      AddTextToCanvas();
    }else{
      AddTextToCanvas();
    }
  }
   $('.msg_radio').change(function(){
    if(canvas.getObjects().length >0){
      AskAndAddText();
    }else{
      AddTextToCanvas();
    }
  })

  function AppendPrices(){
    var _np = _price;
    if($('.add_check').prop('checked') == true){
      _np = _price + 2000
    }else{
      $('.msg_radio').prop('checked',false);
      $('.show_message').prop('checked',false)
    }
    if($('.show_message').prop('checked') == true){
      _np = _np + 500
    }
    $("#productPrice").html(Shopify.formatMoney(_np));
  }
  $('.message1').click(function(evt){
    evt.preventDefault();
    $('.message2').hide(1000);
    $('.msg_radio').prop('checked',false);
    $(this).parents('.messagesdiv').find('.message2').show();
  })
  $('.add_check').change(function(){
    AppendPrices();
    $('.mycanvas').slideToggle("slow");
    $("#product_customizer .checkbox").slideToggle("slow");
    if($(this).prop('checked') == false){
      $('.image_container').hide(1000);
    }
  });
  $('.show_message').change(function(){
    AppendPrices();
    $(".image_container").slideToggle("slow");
  });

})

