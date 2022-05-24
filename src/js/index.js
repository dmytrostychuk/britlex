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
