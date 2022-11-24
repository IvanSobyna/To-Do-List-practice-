let newTaskBtn = document.querySelector(".new-task");
let inputTask = document.querySelector(".task-name-input");
let taskList = document.querySelector(".task-list");

newTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", changeTask);


function createTask(e){
    let div = document.createElement("div");
    div.classList.add("taskOne");

    let input = document.createElement("input");

    input.type = "checkbox";

    let p = document.createElement("p");
    p.innerText = e;

    div.append(input);
    div.append(p);
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

// let todoList = [];
// newTaskBtn.addEventListener("click", function (){
//
//     let newTodo = {
//         todo: input.value,
//         checked: false
//     };
//
//     todoList.push(newTodo);
//     showMessage()
// });
// function showMessage(){
//     todoList.forEach(function (){
//         taskList.append(input.value);
//         input.value = "";
//     })
// }