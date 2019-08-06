document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");
    main();
});

function main() {
    handleAddListButton();
}

// Handle adding new lists
function addNewList() {
    var container = document.querySelector(".main-container");

    // Create list
    var newDiv = document.createElement("div");
    newDiv.classList.add("todo-container");

    var newTitle = document.createElement("input");
    newTitle.value = "New list";
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

    // Events

    var mousePosition;
    var offset = [0, 0];
    var div;
    var isDown = false;
    newDiv.style.left = "0px";
    newDiv.style.top = "0px";

    newDiv.addEventListener('mousedown', function (e) {
        isDown = true;
        offset = [
            newDiv.offsetLeft - e.clientX,
            newDiv.offsetTop - e.clientY
        ];
    }, true);

    document.addEventListener('mouseup', function () {
        isDown = false;
    }, true);

    document.addEventListener('mousemove', function (event) {
        event.preventDefault();
        if (isDown) {
            mousePosition = {

                x: event.clientX,
                y: event.clientY

            };
            newDiv.style.left = (mousePosition.x + offset[0]) + 'px';
            newDiv.style.top = (mousePosition.y + offset[1]) + 'px';
        }
    }, true);
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

    // Input
    var elementInput = document.createElement("input");
    elementInput.classList.add("todo-container__list-element-input");
    elementInput.value = "New element";
    element.appendChild(elementInput);

    // Complete button
    var completeButton = document.createElement("button");
    completeButton.classList.add("todo-container__list-element-complete");
    completeButton.innerText = "V";
    element.appendChild(completeButton);

    // Remove button
    var removeButton = document.createElement("button");
    removeButton.classList.add("todo-container__list-element-remove");
    removeButton.innerText = "x";
    element.appendChild(removeButton);

    // Add element to document
    this.parentElement.querySelector(".todo-container__list").appendChild(element);
}

// Remove list
function removeList() {
    var thisDiv = this.parentElement;
    thisDiv.parentElement.removeChild(thisDiv);
}

// Move list with mouse
function moveList() {

}