const gridContainer = document.querySelector('#container');
const gridSize = document.querySelector('#gridSize');
const colorPicker = document.querySelector('#colourPicker');
const eraser = document.querySelector('#eraser');
const clearAll = document.querySelector('#clearAll');
const chosenColour = document.querySelector('#chosenColour');

//grid setup function
let gridSetup = () => {
    size = gridSize.value;

    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0 ; i <  (size * size) ; i++ ){
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', changeColour);
        square.addEventListener('mousedown', changeColour);
        
        gridContainer.appendChild(square);
    }
}

//Behaviour with mousedown instead hover: 
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Change color function:
let changeColour = (e) => {
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
clearAll.addEventListener('click', clearGrid);

//change grid size function
let changeGridSize = () => {
    container.innerHTML = '' ;
    gridSetup();
}
gridSize.addEventListener('click', changeGridSize);

//Colour Picker
let colour = colourPicker.value;
colourPicker.onchange = (e) => {
    eraserMode = false; //por ahora
    switchColour(e.target.value);

};

let switchColour = () => {
    if (eraserMode == true){
        colour = 'white';
    } else {
        colour = colourPicker.value;
    }

}

//Eraser Mode
let eraserMode = false;

let eraserModeSwitch = () => {
    if (eraserMode == false ) {
        eraserMode = true;
    } else {
        eraserMode = false;
    }
    switchColour();
}



eraser.addEventListener('click', eraserModeSwitch);

//Chosen Color
chosenColour.addEventListener('click', eraserModeSwitch);

//colourMode


//On startup:
gridSetup();



