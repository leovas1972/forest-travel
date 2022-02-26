const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-nav-list');

navIcon.addEventListener('click', function () {
  this.classList.toggle('nav-icon--active');
  nav.classList.toggle('header__top-nav-list--active');
})