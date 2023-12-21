let addMessage = document.querySelector(".input");
let addButton = document.querySelector(".add");
let TodoText = document.querySelector(".list-text");
let TodoList = [];

if (localStorage.getItem("todo")){
    TodoList = JSON.parse(localStorage.getItem("todo"));
    displayMessages();
}

addButton.addEventListener("click", function(){
    let newTodo = {
        todo: addMessage.value,
        checked: false,
    }
    TodoList.unshift(newTodo);
    displayMessages();
    localStorage.setItem("todo", JSON.stringify(TodoList))
    addMessage.value = "";
});

function displayMessages(){
    let displayMessage = '';
    TodoList.forEach(function(item, i){
        displayMessage += `
            <li>
                <label for='item${i}'>${item.todo}</label>
            </li>
        `;
        TodoText.innerHTML = displayMessage;
    });
    

}