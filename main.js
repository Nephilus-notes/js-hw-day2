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
toDoEl.style.visibility = 'hidden';
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
    toDoEl.style.visibility = 'hidden';


})


// bubbles 

const rand = function(min, max) {
    return Math.random() * ( max - min ) + min;
  }
  
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'lighter';
  });
  let backgroundColors = [ '#000', '#000' ];
  let colors = [
    [ '#002aff', "#009ff2" ],
    [ '#0054ff', '#27e49b' ], 
    [ '#202bc5' ,'#873dcc' ]
  ];
  let count = 70;
  let blur = [ 12, 70 ];
  let radius = [ 1, 120 ];
  
  ctx.clearRect( 0, 0, canvas.width, canvas.height );
  ctx.globalCompositeOperation = 'lighter';
  
  let grd = ctx.createLinearGradient(0, canvas.height, canvas.width, 0);
  grd.addColorStop(0, backgroundColors[0]);
  grd.addColorStop(1, backgroundColors[1]);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  let items = [];
  
  while(count--) {
      let thisRadius = rand( radius[0], radius[1] );
      let thisBlur = rand( blur[0], blur[1] );
      let x = rand( -100, canvas.width + 100 );
      let y = rand( -100, canvas.height + 100 );
      let colorIndex = Math.floor(rand(0, 299) / 100);
      let colorOne = colors[colorIndex][0];
      let colorTwo = colors[colorIndex][1];
      
      ctx.beginPath();
      ctx.filter = `blur(${thisBlur}px)`;
      let grd = ctx.createLinearGradient(x - thisRadius / 2, y - thisRadius / 2, x + thisRadius, y + thisRadius);
    
      grd.addColorStop(0, colorOne);
      grd.addColorStop(1, colorTwo);
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.arc( x, y, thisRadius, 0, Math.PI * 2 );
      ctx.closePath();
      
      let directionX = Math.round(rand(-99, 99) / 100);
      let directionY = Math.round(rand(-99, 99) / 100);
    
      items.push({
        x: x,
        y: y,
        blur: thisBlur,
        radius: thisRadius,
        initialXDirection: directionX,
        initialYDirection: directionY,
        initialBlurDirection: directionX,
        colorOne: colorOne,
        colorTwo: colorTwo,
        gradient: [ x - thisRadius / 2, y - thisRadius / 2, x + thisRadius, y + thisRadius ],
      });
  }
  
  
  function changeCanvas(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let adjX = 2;
    let adjY = 2;
    let adjBlur = 1;
    items.forEach(function(item) {
      
        if(item.x + (item.initialXDirection * adjX) >= canvas.width && item.initialXDirection !== 0 || item.x + (item.initialXDirection * adjX) <= 0 && item.initialXDirection !== 0) {
          item.initialXDirection = item.initialXDirection * -1;
        }
        if(item.y + (item.initialYDirection * adjY) >= canvas.height && item.initialYDirection !== 0 || item.y + (item.initialYDirection * adjY) <= 0 && item.initialYDirection !== 0) {
          item.initialYDirection = item.initialYDirection * -1;
        }
        
        if(item.blur + (item.initialBlurDirection * adjBlur) >= radius[1] && item.initialBlurDirection !== 0 || item.blur + (item.initialBlurDirection * adjBlur) <= radius[0] && item.initialBlurDirection !== 0) {
          item.initialBlurDirection *= -1;
        }
      
        item.x += (item.initialXDirection * adjX);
        item.y += (item.initialYDirection * adjY);
        item.blur += (item.initialBlurDirection * adjBlur);
        ctx.beginPath();
        ctx.filter = `blur(${item.blur}px)`;
        let grd = ctx.createLinearGradient(item.gradient[0], item.gradient[1], item.gradient[2], item.gradient[3]);
        grd.addColorStop(0, item.colorOne);
        grd.addColorStop(1, item.colorTwo);
        ctx.fillStyle = grd;
        ctx.arc( item.x, item.y, item.radius, 0, Math.PI * 2 );
        ctx.fill();
        ctx.closePath();
      
    });
    window.requestAnimationFrame(changeCanvas);
    
  }
  
  window.requestAnimationFrame(changeCanvas);