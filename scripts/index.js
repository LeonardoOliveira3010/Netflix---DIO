// Glider (Carousel)
const simpleCarousel = document.querySelector('.js-carousel--simple')

new Glider(simpleCarousel, {
    slidesToScroll: 2,
    slidesToShow: 4.5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });