"use strict";

const getHole = index => document.getElementById(`hole${index}`);
const countDead = document.getElementById(`dead`);
const countLost = document.getElementById(`lost`);

for (let index = 1; index <= 9; index++) {
   
    getHole(index).onclick = function() {
        if (getHole(index).classList.contains('hole_has-mole') === true) {
            countDead.textContent = +countDead.textContent + 1;
        }
        else countLost.textContent = +countLost.textContent + 1;

        if (+countLost.textContent === 5) {
            window.alert(`Вы проиграли!`);
            countDead.textContent = 0;
            countLost.textContent = 0;
        }
        else if (+countDead.textContent === 10) {
            window.alert(`Победа!`);
            countDead.textContent = 0;
            countLost.textContent = 0;
        }
    }
}
