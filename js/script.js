const menuToggle = document.querySelector('.header__menu-toggle');
const navList = document.querySelector('.header__nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('header__nav-list--active');
});