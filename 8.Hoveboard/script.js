const container = document.getElementById('container')
const colors = ['blue', 'orange','black', 'gray', 'green', 'chocolat', 'coral','gold', 'purpose', 'red', 'yellow']
const SQUARES = 500
console.log(colors.length)



for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

  square.addEventListener('mouseover',  () => setColor(square))
    
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 7px ${color}`
   
}

function removeColor(element) {
   element.style.background = ''
   element.style.boxShadow = ''
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length-1)];  //Para generar un aleatorio

}
