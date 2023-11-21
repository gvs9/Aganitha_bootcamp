const fs = require('fs');
const yaml = require('js-yaml');

class Chessboard {
    constructor() {
        this.board = Array.from({ length: 8 }, () => Array(8).fill(null));
        this.initializeChessboard();
    }

    initializeChessboard() {
    
        this.board[1] = Array(8).fill('♟'); //BP
        this.board[6] = Array(8).fill('♙'); //Wp

    
     this.board[0] = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];  // Black['BR','BK','BM','BZ','BQ','BM','BK','BR'];
        this.board[7] =  ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']; // White['Wr','Wk','Wm','Wz','Wq','Wm','Wk','Wr'];
    }

    printChessboard() {
        for (let i = 0; i < 8; i++) {
            console.log(this.board[i].join(' '));
        }
    }

    movePiece(startRow, startCol, endRow, endCol) {
        const piece = this.board[startRow][startCol];
        this.board[startRow][startCol] = null;
        this.board[endRow][endCol] = piece;
    }

    killPiece(row, col) {
        this.board[row][col] = null;
    }

    storeChessboardToFile(filename) {
        const yamlData = yaml.dump(this.board);
        fs.writeFileSync(filename, yamlData, 'utf8');
    }

    loadChessboardFromFile(filename) {
        const yamlData = fs.readFileSync(filename, 'utf8');
        this.board = yaml.load(yamlData);
    }
}


const chessboard = new Chessboard();

console.log("Initial Chessboard:");
chessboard.printChessboard();


chessboard.movePiece(1, 0, 2, 0);

console.log("\nChessboard after moving a piece:");
chessboard.printChessboard();


chessboard.killPiece(7, 7);

console.log("\nChessboard after killing a piece:");
chessboard.printChessboard();


chessboard.storeChessboardToFile('chessboard.yaml');
console.log("\nChessboard stored in 'chessboard.yaml'");

const newChessboard = new Chessboard();
newChessboard.loadChessboardFromFile('chessboard.yaml');

console.log("\nChessboard loaded from 'chessboard.yaml':");
newChessboard.printChessboard();
