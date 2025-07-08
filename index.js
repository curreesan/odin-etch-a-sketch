//DOM 
const container = document.querySelector('.container');

const createNewGridBtn = document.querySelector('.grid-create');
const resetGridBtn = document.querySelector('.grid-reset');
const gridColorModeBtn = document.querySelector('.grid-color-mode');

const gridDisplay = document.querySelector('.grid-size');
const gridModeDisplay = document.querySelector('.grid-mode');

//EVENT LISTENERS
createNewGridBtn.addEventListener('click', createNewGrid);
resetGridBtn.addEventListener('click', resetGridColor);
gridColorModeBtn.addEventListener('click', toggleColorMode);

container.addEventListener('mouseover', changeColor);

//FUNCTIONS
let gridColorMode='single';
let progressiveColor = {r:250,g:128, b:114};
let singleColor = setColorRandom();

function displayGridSize(size) {
    console.log(gridDisplay.innerHTML, size);
    gridDisplay.innerHTML = `grid size: ${size}x${size}`;
}

function displayGridMode(htmlContent) {
    gridModeDisplay.innerHTML = `current mode: ${htmlContent}`
}

function resetGridShade() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.dataset.shade = 0;
    })
}

function resetGridColor() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    })
}

function toggleColorMode(e) {
    
    if (e.target.dataset.colorType == 'single') {
        e.target.innerHTML = 'random';
        e.target.dataset.colorType = 'random';

    } else if (e.target.dataset.colorType == 'random') {
        e.target.innerHTML = 'progressive darkening';
        e.target.dataset.colorType = 'progressive-darkening'
        resetGridShade();
        progressiveColor = generateRandomColor();

    } else if (e.target.dataset.colorType == 'progressive-darkening') {
        e.target.innerHTML = 'single color';
        e.target.dataset.colorType = 'single';
        singleColor = setColorRandom();
    }
    
    gridColorMode = e.target.dataset.colorType;
    displayGridMode(e.target.innerHTML);
}

function changeColor(e) {
    if (e.target.classList.contains('grid-cell')) {
        const cell = e.target;

        if (gridColorMode == 'single') {
            cell.style.backgroundColor = singleColor;

        } else if (gridColorMode == 'random') {
            cell.style.backgroundColor = setColorRandom();

        } else if (gridColorMode == 'progressive-darkening') {
            setColorProgressive(cell); 
        }
    }
}

function setColorRandom() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
}

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}

function setColorProgressive(cell) {
    let shade = parseInt(cell.dataset.shade);
    if (shade <10) {
        shade++;
        cell.dataset.shade = shade;
        const opacity = shade /10;
        cell.style.backgroundColor = `rgba(${progressiveColor.r},${progressiveColor.g},${progressiveColor.b}, ${1 - opacity})`;
    }

}

function createNewGrid() {
    const newGridSize = Number(prompt("Choose grid size between 1-100"));
    createGrid(newGridSize);
}

function createGrid(size = 16) {

    container.innerHTML = '';

    const cellSize = 100 / size; 

    for (let i = 0; i < size; i++) {
        for (let j= 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.dataset.shade = 0;
            cell.dataset.row = i+1;
            cell.dataset.column = j+1;
            cell.classList.add('grid-cell');
            cell.style.flex = `0 0 ${cellSize}%`;
            container.appendChild(cell)
        }
    }
    displayGridSize(size);
}

createGrid();