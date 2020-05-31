


$(document).ready(function() {
    $('.js-series').slick({
        slidesToShow: 3,
        slidesToScroll: 3
      });
      
      var filtered = false;
      
      $('.js-filter').on('click', function(){
        if (filtered === false) {
          $('.filtering').slick('slickFilter',':even');
          $(this).text('Unfilter Slides');
          filtered = true;
        } else {
          $('.filtering').slick('slickUnfilter');
          $(this).text('Filter Slides');
          filtered = false;
        }
      });
                      

});

