const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', (e) => {
    e.preventDefault();
    if (header.classList.contains('open')) {
        body.classList.remove('noscroll');
        header.classList.remove('open'); // close menu
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else {
        body.classList.add('noscroll');
        header.classList.add('open'); //open menu
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
});