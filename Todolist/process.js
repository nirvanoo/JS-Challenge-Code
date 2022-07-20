var form = document.querySelector(".main__form")
var ul = document.querySelector(".main__list")

var input = document.querySelector(".main__task")
var btnAdd = document.querySelector(".main__btn")

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (input.value) {
        let text = input.value.trim()
        addTask({ text })
    }
    input.value = ''
})

function addTask(task) {
    let li = document.createElement('li')
    li.innerHTML = `${task.text}<span class="task__icon-remove"><i class='bx bx-trash'></i></span>`
    li.setAttribute("class", 'main__item')
    if (task.status == 'main__item main__item--complete') {
        li.setAttribute('class', 'main__item main__item--complete')
    }
    li.addEventListener('click', function() {
        this.classList.toggle("main__item--complete")
        saveTodoList()
    })

    li.querySelector(".task__icon-remove").addEventListener('click', function() {
        this.parentElement.remove()
        saveTodoList()
    })

    ul.appendChild(li)

    saveTodoList()
}

function saveTodoList() {
    let todoList = document.querySelectorAll('.main__item');
    let list = []
    for (let i = 0; i < todoList.length; i++) {
        let text = todoList[i].innerText
        let status = todoList[i].getAttribute('class')
        list.push({ text, status })
    }
    localStorage.setItem("todolist", JSON.stringify(list));
}

function init() {
    let data = JSON.parse(localStorage.getItem('todolist'))
    data.forEach(task => {
        addTask(task)
    });
}
init()