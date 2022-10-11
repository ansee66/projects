// мобильное меню
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

// карусель в блоке с карточками животных
const prevButton = document.querySelector('.slider__btn--left');
const nextButton = document.querySelector('.slider__btn--right');
const sliderList = document.querySelector('.slider__list');
const sliderLeft = document.querySelector('.slider__item--left');
const sliderRight = document.querySelector('.slider__item--right');
const sliderCenter = document.querySelector('.slider__item--center');

const sliderCards = document.querySelectorAll('.slider__card');
let cardsCount;
let currentPetsNumbers;

if (window.matchMedia("screen and (min-width: 999px)").matches) {
    cardsCount = 6;
} else if (window.matchMedia("screen and (min-width: 1px) and (max-width:998px)").matches) {
    cardsCount = 4;
}

Array.from(sliderCenter.children).map((card, i) => {
    if (i >= cardsCount) card.remove();
})

function fillNoncentralItems(item, cardsCount) {
    item.innerHTML = "";
    let thisItemAnimalsNumbers = [];
    while (thisItemAnimalsNumbers.length < (cardsCount)) {
        let x = (Math.floor(Math.random() * 8)).toString();
        if (thisItemAnimalsNumbers.indexOf(x) === -1) {
            item.appendChild(sliderCards[x].cloneNode(true));
            thisItemAnimalsNumbers.push(x);
        }
    }
}

fillNoncentralItems(sliderLeft, cardsCount);
fillNoncentralItems(sliderRight, cardsCount);

const moveLeft = () => {
    sliderList.classList.add("slider__list--move-left");
    prevButton.removeEventListener("click", moveLeft);
    nextButton.removeEventListener("click", moveRight);
}

const moveRight = () => {
    sliderList.classList.add("slider__list--move-right");
    prevButton.removeEventListener("click", moveLeft);
    nextButton.removeEventListener("click", moveRight);
}

prevButton.addEventListener("click", moveLeft);
nextButton.addEventListener("click", moveRight);

sliderList.addEventListener("animationend", (event) => {
    if (event.animationName === "move-left") {
        sliderList.classList.remove("slider__list--move-left");
        sliderCenter.innerHTML = sliderLeft.innerHTML;
    } else {
        sliderList.classList.remove("slider__list--move-right");
        sliderCenter.innerHTML = sliderRight.innerHTML;
    }
    
    fillNoncentralItems(sliderLeft, cardsCount);
    fillNoncentralItems(sliderRight, cardsCount);
    
    prevButton.addEventListener("click", moveLeft);
    nextButton.addEventListener("click", moveRight);
})

// карусель в блоке с Testimonials
const range = document.querySelector('.testimonials__range');
const testimonialsList = document.querySelector('.testimonials__list');
const testimonialsCard = document.querySelector('.testimonials__item');

range.addEventListener("input", () => {
    if (window.matchMedia("screen and (max-width: 1599px)").matches) {
        range.max = 8;
    } else {
        range.max = 7;
    }
    let rangeValue = range.value; 
    testimonialsList.style.transform = `translate(-${(testimonialsCard.offsetWidth + 30) * rangeValue}px)`;
});

// обработка изменения ширины экрана
window.addEventListener("resize", function() {
    if (window.matchMedia("screen and (min-width: 1000px)").matches) {
        if (isMenuOpened) {
            closeMenu();
        }
    } else {
        testimonialsList.style.transform = "translate(0px)";
    }
});
