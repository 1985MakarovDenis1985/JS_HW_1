$('.slider_box').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,

prevArrow: '<button class="arrow_left" type="button"><i class="fas fa-chevron-left"></i></button>',
nextArrow: '<button class="arrow_right" type="button"><i class="fas fa-chevron-right"></i></button>'

});


$('.third_slider_box').slick({
  dots: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 1.08,
  dotsClass: 'maindots',
  arrows: true,

prevArrow: '<button class="third_arrow_left" type="button"><i class="fas fa-chevron-left"></i></button>',
nextArrow: '<button class="third_arrow_right" type="button"><i class="fas fa-chevron-right"></i></button>'

});
