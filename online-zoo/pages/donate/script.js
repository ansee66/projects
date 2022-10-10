const navButton = document.querySelector('.header__nav-burger');
const header = document.querySelector('.header');
const body = document.querySelector('.page');
const overlay = document.querySelector('.overlay');

let isMenuOpened = false;

function openMenu() {
    header.classList.add('header--opened');
    body.classList.add('page--non-scrollable');
    isMenuOpened = true;
}

function closeMenu() {
    header.classList.remove('header--opened');
    body.classList.remove('page--non-scrollable');
    isMenuOpened = false;
}

navButton.addEventListener("click", function() {
    if (isMenuOpened) {
        closeMenu();
    } else {
        openMenu();
    }
});

document.addEventListener("click", function(event) {
    if (isMenuOpened) {
        let isMenuClicked = event.target.classList.contains("header--opened") || header.contains(event.target);
        if ( !isMenuClicked ) {
            closeMenu();
        };
    }
});

window.addEventListener("resize", function() {
    if (window.matchMedia("screen and (min-width: 999px)").matches) {
        if (isMenuOpened) {
            closeMenu();
        }
    }
});
