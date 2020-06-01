/* 


$(document).ready(function() {
    $('.js-series').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows:false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'), 
      });
      
    
                      
      responsive: [
        { breakpoint: 1024, settings: {
            
            slidesToShow: 2,
            slidesToScroll: 2
        }},
        { breakpoint: 800, settings: {
            
            slidesToShow: 1,
            slidesToScroll: 1
        }},
        { breakpoint: 768, settings: {
          
          slidesToShow: 1,
          slidesToScroll: 1
        }},
        { breakpoint: 600, settings: "unslick"},
        { breakpoint: 480, settings: "unslick"},
         { breakpoint: 360, settings: "unslick"},
         { breakpoint: 320, settings: {
          
          slidesToShow: 1,
          slidesToScroll: 1
         }}
    ]
}); */


$slick_slider = $('.js-series');
  settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  }
  $slick_slider.slick(settings);

  

  // reslick only if it's not slick()
  $(window).on('resize', function() {
    if ($(window).width() < 768) {
      if ($slick_slider.hasClass('slick-initialized')) {
        $slick_slider.slick('unslick');
      }
      return
    }

    if (!$slick_slider.hasClass('slick-initialized')) {
      return $slick_slider.slick(settings);
    }
    
  });