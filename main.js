let newTaskBtn = document.querySelector(".new-task");
let inputTask = document.querySelector(".task-name-input");
let taskList = document.querySelector(".task-list");

newTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", changeTask);
taskList.addEventListener("click", doneDel);

function createTask(e){
    let div = document.createElement("div");
    div.classList.add("taskOne");

    let input = document.createElement("div");

    input.type = "";

    let p = document.createElement("p");
    p.innerText = e;

    let completebtn = document.createElement("button");
    completebtn.innerHTML = `✔️`;
    completebtn.classList.add("completebtn");

    let deletebtn = document.createElement("button");
    deletebtn.innerHTML = `✖️`;
    deletebtn.classList.add("deletebtn");

    div.append(input);
    div.append(p);
    div.append(completebtn);
    div.append(deletebtn);


    return div;
}
function addTask(){
    let newTask = createTask(inputTask.value);
    taskList.append(newTask);


    inputTask.value = "";
};

function changeTask(e){
if (e.target.checked){
    e.target.parentElement.classList.add("completed");
}
else {
    e.target.parentElement.classList.remove("completed");
}
}
function doneDel(e) {
    const option = e.target;

    if (option.classList[0] === "deletebtn") {
        let optionToDo = option.parentElement;
        optionToDo.remove();
    }
    if (option.classList[0] === "completebtn") {
        let optionToDo = option.parentElement;
        optionToDo.classList.toggle("completed");
    }
}

inputTask.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        newTaskBtn.click();
    }
});

