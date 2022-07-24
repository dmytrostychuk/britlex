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

    if (menuNav) {
      document.body.classList.remove('lock');
    }

    e.preventDefault();

    const blockID = menuLinks.getAttribute('href');

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

var modal = document.querySelector('.modal');
var trigger = document.querySelector('.modal-active');
var closeButton = document.querySelector('.close-button');

function toggleModal() {
  modal.classList.toggle('show-modal');

  if (modal.classList.contains('show-modal')) {
  } else {
    document.body.classList.remove('lock');
  }

  if (menuNav) {
    menuNav.classList.remove('menu__nav-active');
    burgerBth.classList.remove('burger-bth-active');
    menuBtn.classList.remove('menu__btn-active');
  }
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
