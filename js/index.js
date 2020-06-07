

$('.js-series').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:false,
  draggable:true,
  infinite: true,
  touchThreshold:100,
  accesibility:true,
  swipeToSlide: true,
  variableWidth:true,
  responsive: [
    {
      breakpoint: 600, 
      settings: {
        arrows:false, 
        variableWidth:true, 
        slidesToShow: 2,
        slidesToScroll: 2
      } 
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$('.js-series-series').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:false,
  draggable:true,
  infinite: true,
  touchThreshold:100,
  accesibility:true,
  swipeToSlide: true,
  variableWidth:true,
  responsive: [
    {
      breakpoint: 600, 
        settings: "unslick",
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});