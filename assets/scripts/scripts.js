let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = ()  => {
  search.classList.toggle('active');
  menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()  => {
  menu.classList.toggle('active');
  search.classList.remove('active');
}

// Hide Menu And Search Box On Scroll
window.onscroll = () => {
  menu.classList.remove('active');
  search.classList.remove('active');

}



//header
let header = document.querySelector('header');


window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);

});


//Swiper JS
let swiper = new Swiper(".car-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop:true, 
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});