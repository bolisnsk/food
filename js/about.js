const toggleBtn = document.querySelector('.nav_toggleBtn');
const menu = document.querySelector('.nav_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

const list = document.querySelector('.list');
const resAd = document.querySelector('.itemAd');
