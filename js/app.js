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

    var removeListButton = document.createElement("button");
    removeListButton.innerText = "x";
    removeListButton.classList.add("todo-container__remove-list");
    removeListButton.addEventListener("click", removeList);

    var removeCompletedButton = document.createElement("button");
    removeCompletedButton.innerText = "Remove completed";
    removeCompletedButton.classList.add("todo-container__remove-completed");

    var newList = document.createElement("ul");
    newList.classList.add("todo-container__list");

    newDiv.appendChild(newTitle);
    newDiv.appendChild(addButton);
    newDiv.appendChild(removeListButton);
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
    var element = document.createElement("li");
    element.classList.add("todo-container__list-element");
    this.parentElement.querySelector(".todo-container__list").appendChild(element);
}

// Remove list
function removeList() {
    var thisDiv = this.parentElement;
    thisDiv.parentElement.removeChild(thisDiv);
}