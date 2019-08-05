document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");
    main();
});

function main() {
    handleAddListButton();
}

// Handle adding new lists
function addNewList() {
    var container = document.querySelector(".main-container .main-width");

    // Create list
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo-container");
    var newTitle = document.createElement("input");
    newTitle.value = "New List";
    newTitle.classList.add("todo-container__title");
    var addButton = document.createElement("button");
    addButton.innerText = "+";
    addButton.classList.add("todo-container__add-element");
    addButton.addEventListener("click", addListElement);
    var removeButton = document.createElement("button");
    removeButton.innerText = "x";
    removeButton.classList.add("todo-container__remove-list");
    var removeCompletedButton = document.createElement("button");
    removeCompletedButton.innerText = "Remove completed";
    removeCompletedButton.classList.add("todo-container__remove-completed");
    var newList = document.createElement("ul");
    newList.classList.add("todo-container__list");

    newDiv.appendChild(newTitle);
    newDiv.appendChild(addButton);
    newDiv.appendChild(removeButton);
    newDiv.appendChild(removeCompletedButton);
    newDiv.appendChild(newList);

    container.appendChild(newDiv);
}

function handleAddListButton() {
    var addListButton = document.querySelector(".add-list-button");
    addListButton.addEventListener("click", addNewList);
}

// Add list element
function addListElement() {
    console.log(this);
}