"use strict";

let arrowsNext = document.querySelector(".slider__arrow_next");
let arrowsPrev = document.querySelector(".slider__arrow_prev");

let slides = Array.from(document.getElementsByClassName("slider__item"));
let lengthSlides = slides.length;

let slideDot = Array.from(document.getElementsByClassName("slider__dot"));
let lengthDots = slideDot.length;


let numberSlide = 0;

function cleanDotAtributes() {
    let activeDotes = Array.from(document.getElementsByClassName("slider__dot_active"));
    activeDotes.forEach(item => item.className = "slider__dot");
};

function cleanSlideAtributes() {
    let activeSlides = Array.from(document.getElementsByClassName("slider__item_active"));
    activeSlides.forEach(item => item.className = "slider__item");
};

function clickSlide(n) {
    cleanSlideAtributes();
    slides[n].className = "slider__item slider__item_active";

    cleanDotAtributes();
    slideDot[n].className = "slider__dot slider__dot_active";

};
    
arrowsNext.onclick = function() {
    if  (numberSlide >= (lengthSlides - 1)) {
        numberSlide = 0;
        clickSlide(numberSlide);
    }
    else {
        numberSlide = numberSlide + 1;
        clickSlide(numberSlide);
    };
}; 

arrowsPrev.onclick = function() {
    if  (numberSlide === 0) {
        numberSlide = lengthSlides - 1;
        clickSlide(numberSlide);
    }
    else {
        numberSlide = numberSlide - 1;
        clickSlide(numberSlide);
    };

}; 

for (let index = 0; index < lengthDots; index++) {
        slideDot[index].onclick = function() {
            cleanDotAtributes();
            slideDot[index].className = "slider__dot slider__dot_active";
            numberSlide = index;
            clickSlide(numberSlide);
    };
};
