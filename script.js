var container = document.querySelector('.container')
var pixel = document.querySelector('.pixel')
var currentColor = ''
var palette = document.querySelector('.palette')
var colorPicks = ['red', 'blue', 'orange' , 'yellow', 'green', 'purple', 'brown', 'grey', 'black', 'white']

for(let i=0; i< colorPicks.length; i++){
  let div = document.createElement('div')
  palette.appendChild(div);
  div.classList= '';
  div.classList.add('pixel');
  div.classList.add(colorPicks[i]);
}

  for(let i=0; i<405; i++){
    let div = document.createElement('div')
    container.appendChild(div);
    div.classList = '';
    div.classList.add('pixel');
    div.addEventListener('click', clickPixel);
  }

palette.addEventListener('click', colorSelect)

function colorSelect(event){
  currentColor = event.target.classList[1];

}

function clickPixel(event){
  event.target.style.backgroundColor = currentColor;
}
