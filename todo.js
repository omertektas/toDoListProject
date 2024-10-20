const container = document.querySelector('.container');
const input = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');


function events(){
    addBtn.addEventListener("click",addToList);
}

function addToList(){

    const inputValue = input.value;

if (inputValue === "") {
   
    if (!document.querySelector('.alert')) {
        let html = `
            <div class="alert alert-danger" role="alert">
                Listeye boş bir şey eklenemez!
            </div>
        `;
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        addBtn.after(tempDiv.firstElementChild); 
    }
} else {
    
    todoList.innerHTML += `<li>${inputValue}</li>`;
    input.value = "";

    const alertDiv = document.querySelector('.alert');
    if (alertDiv) {
        alertDiv.remove(); 
    }
}

    
    
}

events();