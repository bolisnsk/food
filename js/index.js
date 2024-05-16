const toggleBtn = document.querySelector('.nav_toggleBtn');
const menu = document.querySelector('.nav_menu');
const nav = document.querySelector('.navbar');
const inner = document.querySelector('.inner');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

let scrollNum = 0;
let documentHeight = 0;

window.addEventListener("scroll", () => {
    scrollNum = window.scrollY;
    documentHeight = document.body.scrollHeight - window.innerHeight;
    console.log(document.body.scrollHeight);
    if(scrollNum >= 10){ 
        nav.classList.add("fixed");
    } else {
        //화면에서 header, title 영역이 보일때
        nav.classList.remove("fixed");
        inner.style.top = -scrollNum / 10 + "px";
    }
});

var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,  
            spaceBetween: 60,
        },
        640: {
            slidesPerGroup: 3,
            slidesPerView: 3, 
            spaceBetween: 20,
        },
    },
});