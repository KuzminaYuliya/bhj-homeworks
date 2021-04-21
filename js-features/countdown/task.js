"use strict";
// ++ обязательный вариант задания

//const startTimer = document.getElementById("timer").textContent;

//const minusTimer = function () {
  //  const output = document.getElementById("timer");
  //  output.textContent = +output.textContent - 1;
    //if  (+output.textContent === 0) {
      //  window.alert("Вы победили в конкурсе!");
        //output.textContent = startTimer;
    //}
//}
//setInterval(minusTimer,1000);

//-- обязательный вариант задания


// ++ необязательный вариант
const forwardDate = new Date().getTime() + 10000; // сделаем время окончания конкурса на 10 секунд больше текущего
if (forwardDate >= new Date().getTime()) {
    const minusTimer = function () {
        const output = document.getElementById("timer");
          
        const currentDate = new Date().getTime(); 
        const countDate = forwardDate - currentDate; // количество времени до окончания конкурса
        if (countDate > 0) {
            const hours = Math.floor((countDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const zeroHours = hours < 10 ? `0${hours}` : `${hours}`;
                
            const minutes = Math.floor((countDate % (1000 * 60 * 60)) / (1000 * 60));
            const zeroMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

            const seconds = Math.floor((countDate % (1000 * 60)) / (1000));
            const zeroSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
                
            output.textContent = zeroHours + ":" + zeroMinutes + ":" + zeroSeconds;
        }        
        else {
            window.alert("Вы победили в конкурсе!");
            clearInterval(timer);
            window.location = "https://github.com/KuzminaYuliya/files/blob/master/1.png";
        }    
    }
    const timer = setInterval(minusTimer,1000);    
}
else  window.alert("Конкурс окончен!");

    