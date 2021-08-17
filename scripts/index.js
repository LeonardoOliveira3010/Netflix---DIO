// Menu Mobile
const menuMobile = document.querySelector('.menu__mobile')
const navBarMobile = document.querySelector('.navbar__mobile')


menuMobile.addEventListener('click', () =>{
  navBarMobile.classList.toggle('stick')
})

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


