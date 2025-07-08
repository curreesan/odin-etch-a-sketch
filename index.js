const container = document.querySelector('.container');

function createGrid(size = 16) {

    const cellSize = 100 / size; 

    for (let i = 0; i < (size*size); i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.style.flex = `0 0 ${cellSize}%`;
        container.appendChild(cell)
    }
}

createGrid();