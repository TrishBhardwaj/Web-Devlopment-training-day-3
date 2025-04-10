const chessboard = document.getElementById('chessboard');
const pieces = {
    'r': 'url("https://upload.wikimedia.org/wikipedia/commons/5/5c/Chess_rdt45.svg")',
    'n': 'url("https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_ndt45.svg")',
    'b': 'url("https://upload.wikimedia.org/wikipedia/commons/e/e3/Chess_bdt45.svg")',
    'q': 'url("https://upload.wikimedia.org/wikipedia/commons/1/12/Chess_qdt45.svg")',
    'k': 'url("https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_kdt45.svg")',
    'p': 'url("https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_pdt45.svg")',
    'R': 'url("https://upload.wikimedia.org/wikipedia/commons/0/0f/Chess_rlt45.svg")',
    'N': 'url("https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt45.svg")',
    'B': 'url("https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_blt45.svg")',
    'Q': 'url("https://upload.wikimedia.org/wikipedia/commons/3/3b/Chess_qlt45.svg")',
    'K': 'url("https://upload.wikimedia.org/wikipedia/commons/8/81/Chess_klt45.svg")',
    'P': 'url("https://upload.wikimedia.org/wikipedia/commons/0/04/Chess_plt45.svg")',
};

const initialBoard = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

let selectedPiece = null;
let selectedSquare = null;

function createBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
            square.dataset.row = row;
            square.dataset.col = col;

            if (initialBoard[row][col]) {
                const piece = document.createElement('div');
                piece.classList.add('piece');
                piece.style.backgroundImage = pieces[initialBoard[row][col]];
                square.appendChild(piece);
            }

            square.addEventListener('click', () => handleSquareClick(square));
            chessboard.appendChild(square);
        }
    }
}

function handleSquareClick(square) {
    const row = square.dataset.row;
    const col = square.dataset.col;

    if (selectedPiece) {
        // Move the piece to the new square
        if (square !== selectedSquare) {
            const targetPiece = square.querySelector('.piece');
            if (!targetPiece || (targetPiece && targetPiece.style.backgroundImage !== selectedPiece.style.backgroundImage)) {
                square.appendChild(selectedPiece);
                selectedSquare = null;
                selectedPiece = null;
            }
        }
    } else {
        // Select the piece
        const piece = square.querySelector('.piece');
        if (piece) {
            selectedPiece = piece;
            selectedSquare = square;
        }
    }
}

createBoard();