"use strict";

let arrowsNext = document.querySelector(".slider__arrow_next");
let arrowsPrev = document.querySelector(".slider__arrow_prev");

let slides = Array.from(document.getElementsByClassName("slider__item"));
let lengthSlides = slides.length;

let slideDot = Array.from(document.getElementsByClassName("slider__dot"));
let lengthDots = slideDot.length;


let numberSlide = 0;

function clickSlide(n) {
    numberSlide = (n + lengthSlides) % lengthSlides;

    for (let slide of slides) {
       slide.className = "slider__item";
    };

    for (let dote of slideDot) {
        dote.className = "slider__dot";
    };

    slides[numberSlide].className = "slider__item slider__item_active";
    slideDot[numberSlide].className = "slider__dot slider__dot_active";
};

arrowsNext.onclick = function() {
    clickSlide(numberSlide + 1);
}; 

arrowsPrev.onclick = function() {
    clickSlide(numberSlide - 1);
}; 

for (let index = 0; index < lengthDots; index++) {
        slideDot[index].onclick = function() {
            numberSlide = index;
            clickSlide(numberSlide);
    };
};