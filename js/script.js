let searchBtn = document.querySelector('header .icons .fa-search');
let searchBar = document.querySelector('header .search-bar');
let menuBtn = document.querySelector('header .fa-bars');
let navbar = document.querySelector('header .navbar');
let videoBtn = document.querySelectorAll('.home .controls .vid-btn');
let loginBtn = document.querySelector('header .icons .fa-user');
let loginForm = document.querySelector('.login-form');
let loginFormClose = document.querySelector('.login-form #form-close');


window.onscroll = ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};



searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});


loginBtn.addEventListener('click', ()=>{
    loginForm.classList.add('active');
});


loginFormClose.addEventListener('click', ()=>{
    loginForm.classList.remove('active');
});



menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});



videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.home .controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('.home .video-container video').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        750: {
            slidesPerView: 3,
          },
        990: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
    },
});