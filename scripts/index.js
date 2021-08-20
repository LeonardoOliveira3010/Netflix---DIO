// Menu Mobile
const menuMobile = document.querySelector('.menu__mobile')
const navBarMobile = document.querySelector('.navbar__mobile')

menuMobile.addEventListener('click', () =>{
  navBarMobile.classList.toggle('stick')
  
})

// Botão de busca
const search = document.querySelector('#search')
const button = document.querySelector('.button')

button.onclick = function(){
  search.classList.toggle('active')
}

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

// HEADER 
const scrollHeader = () => {
  const header = document.querySelector('.header__mobile')
  header.classList.toggle('sticky', window.scrollY > 0)
}

window.addEventListener('scroll', scrollHeader,)

// Programa que muta o video no momento que é passado o mouse em cima dele
const video = document.querySelector('.video-screen')

const play = () =>video.play()

