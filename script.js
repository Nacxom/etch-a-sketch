
const gridContainer = document.querySelector('#container');
const gridSize = document.querySelector('#gridSize');



//Behaviour with mousedown instead hover: 
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


//grid setup function
let gridSetup = () => {
    size = gridSize.value;

    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0 ; i <  (size * size) ; i++ ){
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', changeColor);
        square.addEventListener('mousedown', changeColor)
        
        gridContainer.appendChild(square);
    }
}
//Change color function:
let changeColor = (e) => {
    if ((mouseDown == false)){
        return
    } 
    e.target.style.backgroundColor = colour;
    
};


//clear grid function
let clearGrid = () => {
    container.innerHTML = '' ;
    gridSetup();
}
const clearAll = document.querySelector('#clearAll');
clearAll.addEventListener('click', clearGrid);


//change grid size function

let changeGridSize = () => {
    container.innerHTML = '' ;
    gridSetup();
}
gridSize.addEventListener('click', changeGridSize);

//Colour Picker
const colorPicker = document.querySelector('#colourPicker');
let colour = colourPicker.value;
colourPicker.onchange = (e) => changeColour(e.target.value);
let changeColour = () => {
    colour = colourPicker.value;
}




//On startup:
gridSetup();



