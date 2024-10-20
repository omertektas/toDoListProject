const input = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');


function events(){
    addBtn.addEventListener("click",addToList);
}

function addToList(){
    const inputValue = input.value;
    console.log(inputValue);
    todoList.innerHTML += `<li>${inputValue}</li>`
    input.value = "";
    
}

events();