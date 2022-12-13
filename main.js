console.log(document)
const toDoEl = document.getElementById('toDoItems')
console.log(toDoEl)

const formEl = document.getElementById('toDoForm')

const paragraphs = document.getElementsByTagName('p')

// for (paragraph of paragraphs){
//     // paragraph.style.
// }
formEl.style.justifyContent = 'space-evenly'
formEl.style.paddingTop = '30px';
formEl.style.marginBottom = '20px';

function addToDoItem(toDoText, toDoDate) {
    const toDoItem = document.createElement('div')
    toDoItem.classList.add('to-do-card', 'card')

    toDoItem.innerHTML = `
    <h2 class='card-header'>To Do:</h2>
    <div class='card-body'>
    <p>${toDoText} - ${toDoDate}</p>
    </div>
    `

    toDoEl.appendChild(toDoItem)
    // toDoEl.style.text-transform = capitalize;

};

formEl.addEventListener('submit', (event) => {
    event.preventDefault()

    let textInput = document.getElementsByName('todoitem')[0]
    let toDoDay = document.getElementsByName('tododay')[0]

    addToDoItem(textInput.value, toDoDay.value)

    textInput.value = ''
    toDoDay.value = ''
})

const clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', (e) => {
    toDoEl.innerHTML = ''

})

