const inputField = document.querySelector(".input-fields textarea"),
  todoLists = document.querySelector(".todoLists"),
  pendingNum = document.querySelector(".pending-num"),
  clearAll = document.querySelector(".clear");

function allTasks(){
    const tasks = document.querySelectorAll(".pending");
    pendingNum.textContent = tasks.length === 0 ? "no" :  tasks.length;

    const allList = document.querySelectorAll(".list");
    if(allList.length>0){
        todoLists.style.marginTop = "20px";
        clearAll.style.pointerEvents = "auto";
        return;
    }
    todoLists.style.marginTop = "0px";
    clearAll.style.pointerEvents = "none";
}

inputField.addEventListener("keyup", (e) => {
  let inputValue = inputField.value.trim();

  if (e.key === "Enter" && inputValue.length>0) {
    let liTag = `<li class="list pending" onclick = "handleStatus(this)">
        <input type="checkbox" />
        <span class="task">${inputValue}</span>
        <i class='bx bx-trash-alt' onclick = "deleteTask(this)"></i>
    </li>`;
    todoLists.insertAdjacentHTML('beforeend', liTag);
    inputField.value = "";
    allTasks();
  }
});

function handleStatus(e){
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
};

deleteTask = (e)=>{
    // or you can use e.parentElement.remove() 
    todoLists.removeChild(e.parentElement);
    allTasks();
}


clearAll.addEventListener('click', ()=>{
    todoLists.innerHTML = "";
    allTasks();
});