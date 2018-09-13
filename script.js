var container = document.querySelector('.container')
var pixel = document.querySelector('.pixel')
var currentColor = ''

//select pixel
function clickPixel(event){
  console.log(event.target)
  event.target.style.backgroundColor = 'red'
}
container.addEventListener('click', clickPixel)

//select currentColor

function colorSelect(event){
  
}
