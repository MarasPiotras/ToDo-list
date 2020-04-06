//dom elements in wrapper
const taskList = document.querySelector('.wrapper ul');
const welcome = document.querySelector(".welcome");

//dom elements in search field
const searchInput = document.querySelector('.search input');
const searchArrow = document.querySelector('.search i');

//dom elements in add field
const addArrow = document.querySelector('.add i');
const add = document.querySelector('.add form');
const input = document.querySelector('.add input');


//changing message on app start window
const welcomeText = function () {
    const li = document.querySelector('li');
    li ? welcome.textContent = "" : welcome.textContent = "Dodaj swoje pierwsze zadanie!";
}

//search engine
const search = function (e) {
    const tasks = [...taskList.querySelectorAll('li')];
    const searchWord = e.target.value.toLowerCase();
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].innerText.toLowerCase().indexOf(searchWord) > -1) {
            tasks[i].style.display = "";
        } else {
            tasks[i].style.display = "none";
        }
    }
}

//hamburger menus hide/show movement
const movingMenu = function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");
}

//click if task is completed
const done = function (e) {
    e.target.parentNode.classList.add("done");
}

//remove task
const remove = function (e) {
    e.target.parentNode.remove();
    welcomeText();
}

//add tasks and done/remove buttons
const addEvent = function (e) {
    e.preventDefault();
    const colors = ['#5d3ab8', '#01a101', '#bc1c4a', '#5d39b7', '#d95129', '#a301ac'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const task = input.value;

    if (task) {
        const toDoElement = document.createElement('li');
        toDoElement.innerHTML = `<i class="far fa-calendar-check"></i><p> ${task} </p><i class="far fa-trash-alt"></i>`;
        toDoElement.style.backgroundColor = color;
        taskList.appendChild(toDoElement);
        input.value = "";
        toDoElement.querySelector(".fa-calendar-check").addEventListener("click", done);
        toDoElement.querySelector(".fa-trash-alt").addEventListener("click", remove);
    }
    welcomeText();


}

//event listeners
searchArrow.addEventListener("click", movingMenu);
addArrow.addEventListener("click", movingMenu);
add.addEventListener("submit", addEvent);
searchInput.addEventListener('input', search);