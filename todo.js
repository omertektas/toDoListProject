const container = document.querySelector(".container");
const input = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-todo");
const todoFilter = document.querySelector("todo-filter")
const todoList = document.querySelector(".todo-list");


function events() {
  addBtn.addEventListener("click", addToList);
  todoFilter.addEventListener("change",filter);
}

function addToList() {
  const inputValue = input.value;

  if (inputValue === "") {
    if (!document.querySelector(".alert")) {
      let html = `
        <div class="alert alert-danger" role="alert">
            Listeye boş bir şey eklenemez!
        </div>
      `;

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      addBtn.after(tempDiv.firstElementChild);
    }
  } else {
    todoList.innerHTML += `
      <li class = "sentence">${inputValue}<button class="delete-sentence">sil</button></li>
      
    `;
    input.value = "";

    const alertDiv = document.querySelector(".alert");
    if (alertDiv) {
      alertDiv.remove();
    }

    
    const deleteSentenceBtns = document.querySelectorAll('.delete-sentence');
    deleteSentenceBtns.forEach((btn) => {
      btn.addEventListener("click", deleteToList);
    });
  }
}

function deleteToList(event) {
  const li = event.target.parentElement;
  li.remove();
  
}



function filter(){
    /*const sentences = document.querySelectorAll('.sentence');
    sentences.forEach((stc) => {
        console.log(stc.value);
    })*/
   console.log("ok");
}

events();

