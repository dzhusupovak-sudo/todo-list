const students_input = document.getElementById('students_input')
const add = document.getElementById('add')
const list = document.getElementById('list')

let students = []

function renderStudents() {
    list.innerHTML = students.map((elem) => {
        return `
            <li data-id=${elem.id}>
                <span>${elem.name}</span>
                <button class="delete-btn" data-id=${elem.id}>Remove</button>
            </li>
        `
    }).join('')
}

function addStudent() {
    if (!students_input.value.length) {
        alert('Value cannot be empty!')
        return
    }

    const student = {
        name: students_input.value,
        id: students.length + 1
    }

    students.push(student)
    students_input.value = ''
    renderStudents()
}

function removeStudent(id) {
    students = students.filter(el => {
        if (el.id != id) {
            return el
        }
    })
}

add.addEventListener('click', addStudent)

list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        removeStudent(event.target.dataset.id)
    }
    renderStudents()
})