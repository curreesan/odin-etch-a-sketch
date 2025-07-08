//DOM Selection
const container = document.querySelector('.container');
const createNewGridBtn = document.querySelector('.grid-create');
const resetGridBtn = document.querySelector('.grid-reset');


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