const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let isGameActive = true;
const text = document.querySelector('.text')

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            cells[a].dataset.cell === currentPlayer &&
            cells[b].dataset.cell === currentPlayer &&
            cells[c].dataset.cell === currentPlayer
        ) {
            isGameActive = false;
            cells[a].style.backgroundColor = cells[b].style.backgroundColor = cells[c].style.backgroundColor = 'yellow';
            // alert(`${currentPlayer} wins!`);
            text.innerHTML = `Player ${currentPlayer} wins!`
            return;
        }
    }

    if ([...cells].every(cell => cell.dataset.cell)) {
        isGameActive = false;
        alert("It's a draw!");
    }
}

function handleClick(event) {
    const cell = event.target;
    if (!isGameActive || cell.dataset.cell) return;

    cell.dataset.cell = currentPlayer;
    cell.textContent = currentPlayer;
    checkWin();

    if (isGameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

cells.forEach(cell => cell.addEventListener('click', handleClick));