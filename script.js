var container = document.querySelector('.container')
var pixel = document.querySelector('.pixel')
var currentColor = ''
var palette = document.querySelector('.palette')
var colorPicks = ['red', 'blue', 'orange' , 'yellow', 'green', 'purple', 'brown', 'grey', 'black', 'white']

//create divs w/ color options (palette)
for(let i=0; i< colorPicks.length; i++){
  let div = document.createElement('div')
  palette.appendChild(div);
  div.classList= "";
  div.classList.add("pixel");
  div.classList.add(colorPicks[i]);
}

//create divs for canvas

  var pixelTotal = 0
  for(let i=0; i<400; i++){
    let div = document.createElement("div")
    container.appendChild(div);
    div.classList = "";
    div.classList.add("pixel");
    div.addEventListener("click", clickPixel)
    div.addEventListener("mouseover", paintbrush)
    pixelTotal += 1
  }




//select currentColor
palette.addEventListener('click', colorSelect)

function colorSelect(event){
  currentColor = event.target.classList[1]

}

//color pixel on the canvas
var isPainting = false
function clickPixel(event){
  event.target.style.backgroundColor = currentColor
  if(isPainting === false){
    isPainting = true
  }
  else if(isPainting === true){
    isPainting = false
  }
}

//drag and draw (paintbrush)
function paintbrush(event){
  //if mouse clicked, color any divs mouse passes over until mouse is clicked
  //again
  if(isPainting == true){
    event.target.style.backgroundColor = currentColor

  }
}
