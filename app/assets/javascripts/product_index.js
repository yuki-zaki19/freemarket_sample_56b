$(document).on('turbolinks:load', function(){
  $('.top-main-headerbox').slick({
    autoplay:true,
    dots:true,
    autoplaySpeed: 4000,
    speed: 800
  });
  $('.slick-dots li').on('mouseover', function() {
    $('.slider').slick('goTo', $(this).index());
  });
});

