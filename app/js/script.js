console.log('Hello there, hows it going?');

const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobileMenu');
const nav__list = document.querySelector('.nav__list');
const nav__item = document.querySelector('.nav__item');
// const mobile__fade = document.querySelector('.mobile__fade');

btnHamburger.addEventListener('click', function() {
  console.log('click hamburger menu');

  if( header.classList.contains('open') ) { // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    mobileMenu.classList.remove('fade-in');
    mobileMenu.classList.add('hide-for-mobile');
    // mobile__fade.classList.remove('fade-in');
    // mobile__fade.classList.add('fade-out-menu');
    // nav__list.classList.add('nav__list');
    nav__list.classList.remove('fade-in');
    mobileMenu.classList.remove('nav-open');
    mobileMenu.classList.add('hide-for-mobile');
    nav__list.classList.remove('nav__list--open');
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
    // mobile__fade.classList.add('fade-in');
    // mobile__fade.classList.remove('fade-our-menu');
    mobileMenu.classList.add('nav-open');
    mobileMenu.classList.remove('hide-for-mobile');
    nav__list.classList.add('nav__list--open');
    nav__list.classList.remove('nav__list');
  }

});

const message = () => {
  console.log('The javascript was transpiled');
}

message();