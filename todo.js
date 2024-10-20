const container = document.querySelector('.container');
const input = document.querySelector('.todo-input');
const addBtn = document.querySelector('.add-todo');
const todoList = document.querySelector('.todo-list');
const deleteSentenceBtn = document.querySelector('.delete-sentence');
let isDeleteBtn = false;


function events(){
    
    addBtn.addEventListener("click",addToList);
    if(isDeleteBtn){ //burdaki eksikleri hallet
        deleteSentenceBtn.addEventListener("click",deleteToList);
    }
    

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
    
    todoList.innerHTML += `<li>${inputValue}<button class="delete-sentence">sil</button></li>`;
    input.value = "";
    isDeleteBtn = true;
    const alertDiv = document.querySelector('.alert');
    if (alertDiv) {
        alertDiv.remove(); 
    }
}

}

function deleteToList(){
    console.log("merhaba");
}

events();