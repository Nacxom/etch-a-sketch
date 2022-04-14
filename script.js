const gridContainer = document.querySelector('#container');
const gridSize = document.querySelector('#gridSize');
const colorPicker = document.querySelector('#colorPicker');
const rainbow = document.querySelector('#rainbow');
const eraser = document.querySelector('#eraser');
const clearAll = document.querySelector('#clearAll');
const chosenColor = document.querySelector('#chosenColor');

//Default Color:
let color = colorPicker.value;

//Color Modes:
let colorMode = 'color';
let eraserMode = 'eraser';
let rainbowMode = 'rainbow';

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
        square.addEventListener('mousedown', changeColor);
        
        gridContainer.appendChild(square);
    }
}

//Behaviour with mousedown instead hover: 
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Change color function:
let changeColor = (e) => {
    if ((mouseDown == false)){
        return;
    } else if (colorMode == 'color' ){
        color = colorPicker.value;
    }else if (colorMode == 'eraser' ){
        color = `white`;
    }else if (colorMode == 'rainbow' ) {
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        color = `rgb(${randomR},${randomG},${randomB})`;
    } else {
        
    }
    e.target.style.backgroundColor = color;
    
};

//clear grid function
let clearGrid = () => {
    container.innerHTML = '' ;
    gridSetup();
}
//clear grid event listener
clearAll.addEventListener('click', clearGrid);

//change grid size function
let changeGridSize = () => {
    container.innerHTML = '' ;
    gridSetup();
}
//grid size event listener
gridSize.addEventListener('click', changeGridSize);

//Color Mode switcher
let colorModeSwitch = () => {
    if (colorMode != 'color' ) {
        colorMode = 'color';
    }
}

//color button event listener
chosenColor.addEventListener('click', colorModeSwitch);

//Eraser Mode switcher
let eraserModeSwitch = () => {
    if (colorMode != 'eraser' ) {
        colorMode = 'eraser';
    }
}

//eraser button event listener
eraser.addEventListener('click', eraserModeSwitch);

//Rainbow Mode switcher
let rainbowModeSwitch = () => {
    if (colorMode != 'rainbow' ) {
        colorMode = 'rainbow';
    }
}

//rainbow button event listener
rainbow.addEventListener('click', rainbowModeSwitch);




//On startup:
gridSetup();



