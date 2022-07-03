let burgerBth = document.querySelector('.burger-bth');
let menuNav = document.querySelector('.menu__nav');
let menuBtn = document.querySelector('.menu__btn');

if (burgerBth) {
  burgerBth.addEventListener('click', function (e) {
    document.body.classList.toggle('lock');
    menuNav.classList.toggle('menu__nav-active');
    burgerBth.classList.toggle('burger-bth-active');
    menuBtn.classList.toggle('menu__btn-active');
  });
}

const menuLink = document.querySelectorAll('.menu__link');

for (let menuLinks of menuLink) {
  menuLinks.addEventListener('click', function (e) {
    if (menuNav) {
      document.body.classList.toggle('lock');
      menuNav.classList.remove('menu__nav-active');
      burgerBth.classList.remove('burger-bth-active');
      menuBtn.classList.remove('menu__btn-active');
    }

    e.preventDefault();

    const blockID = menuLinks.getAttribute('href');

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
