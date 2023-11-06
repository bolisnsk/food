const toggleBtn = document.querySelector('.btn');
const menu = document.querySelector('.nav_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});