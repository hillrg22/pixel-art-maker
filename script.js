var container = document.querySelector('.container')
var pixel = document.querySelector('.pixel')
var currentColor = ''
var palette = document.querySelector('.palette')
var colorPicks = ['red', 'blue', 'orange' , 'yellow', 'green', 'purple', 'brown', 'grey', 'black', 'white']

//create divs w/ color options
for(let i=0; i< colorPicks.length; i++){
  let div = document.createElement('div')
  palette.appendChild(div)
  div.classList= "";
  div.classList.add("pixel");
  div.classList.add(colorPicks[i]);
  console.log("color picks", colorPicks[i])
}

//select currentColor
palette.addEventListener('click', colorSelect)

function colorSelect(event){
  currentColor = event.target.classList[1]
  console.log("Class name", event.target.classList[1], currentColor)
}



//select pixel
function clickPixel(event){
  console.log(event.target)
  console.log(event)
  event.target.style.backgroundColor = currentColor
}
container.addEventListener('click', clickPixel)
