const form = document.querySelector(".text");

const addtoDo = document.querySelector(".add-btn")

const todoList = document.querySelector(".todolist");

const filter = document.querySelector(".filter");



function eventListener(){
    addtoDo.addEventListener("submit",addTodo);
}

function addTodo(e){
    console.log(form.value);
    e.preventDefault();
}