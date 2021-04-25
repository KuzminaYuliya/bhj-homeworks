"use strict";

let elementsMenu = Array.from(document.getElementsByClassName("menu__link"));
let elementsLength = elementsMenu.length;
let menu = Array.from(document.getElementsByClassName("menu_main"));

menu.forEach(item => clickElement(item)); 

function clickElement (item) {

    for (let index = 0; index < elementsLength; index++) {
        let findMenu = elementsMenu[index].closest(".menu__item");
        findMenu.onclick = function() {
            let subMenu = Array.from(item.querySelectorAll(".menu_active"));
            subMenu.forEach(item => item.className = "menu menu_sub");

            let subMenuElements = this.querySelector(".menu_sub");
                 
            if (subMenuElements !== null){
                subMenuElements.className = "menu menu_sub menu_active";
                return false;
            };
                               
        };
    };
};

