"use strict";

document.getElementById("modal_main").classList.add("modal_active");
let elementsClose = Array.from(document.getElementsByClassName("modal__close"))
let lengthElements = elementsClose.length;

let elementsSuccess = Array.from(document.getElementsByClassName("show-success"))
let lengthSuccess = elementsSuccess.length;

for (let index = 0; index < lengthElements; index++) {
    elementsClose[index].onclick = function() {
        elementsClose[index].closest(".modal").remove("modal_active");
    }
}

for (let indexSuccess = 0; indexSuccess < lengthSuccess; indexSuccess++) {
    elementsSuccess[indexSuccess].onclick = function() {
        elementsSuccess[indexSuccess].closest(".modal").remove("modal_active");
        document.getElementById("modal_success").classList.add("modal_active");
    }
}