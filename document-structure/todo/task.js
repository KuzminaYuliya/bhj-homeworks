"use strict";

let button = document.getElementById("tasks__add");
let inputField = document.getElementById("task__input");
let taskList = document.getElementById("tasks__list");

function getTasks() {
    return JSON.parse(localStorage.getItem('task'));
};
  
function setTasks(element) {
    localStorage.setItem('task', JSON.stringify(element));
    return false;
};

function drawTasks() {
    Array.from(document.querySelectorAll(".task")).forEach(item => item.remove());
    let taskData = getTasks();
    if (taskData !== null) {
      
        for (let item in taskData) {
      
            let divText = `<div class="task"><div class="task__title">${taskData[item]}</div><a href="#" class="task__remove">&times;</a></div>`;
            taskList.insertAdjacentHTML("beforeEnd",divText);
        };
    };  
    let curentTasks = Array.from(document.querySelectorAll(".task__remove"));
    curentTasks.forEach(item => item.addEventListener('click', clickRemove));    
 
    return false;
  };

const clickRemove = (event) => {
    event.preventDefault();
    let currentDivRemove = event.currentTarget.closest(".task"); 
    const elementDelete = currentDivRemove.querySelector(".task__title").innerText;
    currentDivRemove.remove();
    
    let tasks = JSON.parse(localStorage.getItem('task'));
    tasks = tasks.filter(item => item !== elementDelete);
    setTasks(tasks);
};    

button.addEventListener('click', function(event) {
    event.preventDefault();
    if (inputField.value.trim() !== "" ) {
        let taskData = getTasks() || [];
        
        taskData.push(inputField.value)
        setTasks(taskData);
             
        let divText = `<div class="task"><div class="task__title">${inputField.value}</div><a href="#" class="task__remove">&times;</a></div>`;
        taskList.insertAdjacentHTML("beforeEnd",divText);
                
        let curentTasks = Array.from(document.querySelectorAll(".task__remove"));
        curentTasks.forEach(item => item.addEventListener('click', clickRemove));
    };
});

drawTasks();