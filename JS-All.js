var meow = true;
$(document).ready(function(){
    $("#gray").click(function(){
        if(meow == true){
        $("body").css("-webkit-filter", "grayscale(100%)");
        $("body").css("filter", "grayscale(100%)");
        meow = false;
        $("#gray").val("Color Mode")
        }
        else{
        $("body").css("-webkit-filter", "none");
        $("body").css("filter", "none");
        meow = true;
        $("#gray").val("Color Blind Mode");
        }
    });
    


    jQuery(function($) {
  
        // Function which adds the 'animated' class to any '.animatable' in view
        var doAni = function() {
          
          // Calc current offset and get all animatables
          var offset = $(window).scrollTop() + $(window).height(),
              $animatables = $('.animatable');
          
          // Unbind scroll handler if we have no animatables
          if ($animatables.length == 0) {
            $(window).off('scroll', doAni);
          }
          
          // Check all animatables and animate them if necessary
          $animatables.each(function(i) {
             var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
              $animatable.removeClass('animatable').addClass('animated');
            }
          });
      
        };
  
      });
    
    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  
});