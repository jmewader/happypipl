$(".slider").slick({
  slidesToShow: 3,
  arrows: true,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: "<img src='./img/icons/arrow.svg' class='prev' alt='1'>",
  nextArrow: "<img src='./img/icons/arrow.svg' class='next' alt='2'>",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".slider-reviews").slick({
  slidesToShow: 1,
  dots: true,
  arrows: true,
  slidesToScroll: 1,
  centerMode: true,
  prevArrow: "<img src='./img/icons/arrow.svg' class='prev' alt='1'>",
  nextArrow: "<img src='./img/icons/arrow.svg' class='next' alt='2'>",
});
