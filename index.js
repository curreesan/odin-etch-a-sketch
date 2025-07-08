//DOM Selection
const container = document.querySelector('.container');
const createNewGridBtn = document.querySelector('.grid-create');
const resetGridBtn = document.querySelector('.grid-reset');
const gridColorModeBtn = document.querySelector('.grid-color-mode');

let gridColorMode = '';



//Event Listeners
createNewGridBtn.addEventListener('click', createNewGrid);

resetGridBtn.addEventListener('click', ()=> {
    createGrid();
})

container.addEventListener('mouseover', function(e){
    if (e.target.classList.contains('grid-cell')) {
        const cell = e.target;
        console.log(`Row : ${cell.dataset.row} Column : ${cell.dataset.column}`);
        colorChange(cell);
    }
});

gridColorModeBtn.addEventListener('click', function(e){
    // console.log(e.target);
    
    if (e.target.dataset.colorType == 'single') {
        e.target.innerHTML = 'random';
        e.target.dataset.colorType = 'random'; 
    } else if (e.target.dataset.colorType == 'random') {
        e.target.innerHTML = 'progressive darkening';
        e.target.dataset.colorType = 'progressive-darkening'
    } else if (e.target.dataset.colorType == 'progressive-darkening') {
        e.target.innerHTML = 'single color';
        e.target.dataset.colorType = 'single';
    }
    
    let gridColorMode = e.target.dataset.colorType;
    // console.log(gridColorMode)
})

//Functions
function colorChange(cell) {
    cell.style.backgroundColor = 'black';
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
            cell.dataset.row = i+1;
            cell.dataset.column = j+1;
            cell.classList.add('grid-cell');
            cell.style.flex = `0 0 ${cellSize}%`;
            container.appendChild(cell)
        }
    }
}

createGrid();