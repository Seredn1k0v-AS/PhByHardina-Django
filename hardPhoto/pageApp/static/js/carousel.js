$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 3,
        center: true,
        loop: true,
        margin: 60,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 4500,
        autoplaySpeed: 1200,
        autoWidth: true,
        autoHeight: true,
        startPosition: 4,
    });
    document.querySelector(".owl-carousel").style.visibility = 'visible'
    document.querySelector(".owl-carousel").style.paddingTop = '0'
    document.querySelector(".owl-carousel").style.opacity = '1'
    document.querySelector(".owl-carousel").style.transition = '1250ms'

});

jQuery(document).ready(function($) {
    $(".owl-carousel").each(function(index, el) {
      var containerHeight = $(el).height();
      $(el).find("img").each(function(index, img) {
        var w = $(img).prop('naturalWidth');
        var h = $(img).prop('naturalHeight');
        $(img).css({
          'width': Math.round(containerHeight * w / h / 2) + 'px',
          'height': (containerHeight / 2) + 'px'
        });
      }),
      $(el).owlCarousel({
        autoWidth: true
      });
    });
  });