console.log('Hello there, hows it going?');

const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobileMenu');
const nav__list = document.querySelector('.nav__list');
const nav__item = document.querySelector('.nav__item');

btnHamburger.addEventListener('click', function() {
  console.log('click hamburger');

  if(header.classList.contains('open')) { // Close hamburger menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    nav__list.classList.remove('fade-in');
    mobileMenu.classList.remove('nav-open');
    mobileMenu.classList.add('hide-for-mobile');
    nav__item.classList.remove('nav__item--open');
  } else { // Open hamburger Menu
    console.log('else menu');

    body.classList.add('noscroll');
    header.classList.add('open');
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
    nav__list.classList.add('fade-in');
    mobileMenu.classList.add('nav-open');
    mobileMenu.classList.remove('hide-for-mobile');
    nav__item.classList.add('nav__item--open');
  }
});