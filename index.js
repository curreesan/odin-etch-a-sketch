const container = document.querySelector('.container');
const createNewGridBtn = document.querySelector('.grid-create');
const resetGridBtn = document.querySelector('.grid-reset');

createNewGridBtn.addEventListener('click', createNewGrid);
resetGridBtn.addEventListener('click', ()=> {
    createGrid();
})

function createNewGrid() {
    const newGridSize = Number(prompt("Choose grid size between 1-100"));
    createGrid(newGridSize);
}



function createGrid(size = 16) {

    container.innerHTML = '';

    const cellSize = 100 / size; 

    for (let i = 0; i < (size*size); i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.style.flex = `0 0 ${cellSize}%`;
        container.appendChild(cell)
    }
}

createGrid();