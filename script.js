
const gridContainer = document.querySelector('#container');
const gridSize = document.querySelector('#gridSize');


//grid setup function
let gridSetup = () => {
    size = gridSize.value;

    console.log(size);
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0 ; i <  (size * size) ; i++ ){
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', changeColor);
        
        gridContainer.appendChild(square);


    }
}
//Change color function:
let changeColor = (e) => e.target.style.backgroundColor = 'black';


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

//
gridSetup();



