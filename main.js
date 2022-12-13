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
formEl.style.paddingBottom = '20px';
formEl.style.backgroundColor = 'pink'
formEl.style.borderRadius = '15px'
formEl.style.borderRaduis = '15px'

toDoEl.style.display = 'flex';
toDoEl.style.gap = '30px';
toDoEl.style.borderRadius = '20px';
toDoEl.style.border = '2px solid black';
toDoEl.style.boxShadow = 'inset -5px -10px 10px 1px rgba(0,0,0,.2), inset 5px 10px 5px 1px rgba(0,0,0,.2)';
// toDoEl.style.visibility = 'hidden';
toDoEl.style.padding = '20px';
toDoEl.style.flexWrap = 'wrap';
toDoEl.style.backgroundColor = 'rgba(0,172,193,1)'
toDoEl.style.marginBottom = '20px'
// toDoEl.style.justifyContent = 'space-evenly';

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
    toDoItem.style.maxHeight = '150px';
    toDoItem.style.maxWidth = '150px';
    // toDoItem.style.display = 'inline-grid';

};

formEl.addEventListener('submit', (event) => {
    event.preventDefault()

    let textInput = document.getElementsByName('todoitem')[0]
    let toDoDay = document.getElementsByName('tododay')[0]

    addToDoItem(textInput.value, toDoDay.value)

    textInput.value = ''
    toDoDay.value = ''
    toDoEl.style.visibility = 'visible'

})

const clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', (e) => {
    toDoEl.innerHTML = ''

})