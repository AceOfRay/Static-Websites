
class TicTacToeGame {
    constructor() {
        this.restartBtn = document.getElementById('restart_btn');
        this.boxList = Array.from(document.getElementsByClassName('box'));
        this.spaces = Array(9).fill(null);
        this.result = document.getElementById('result');
        this.currentPlayer = 'X';
        this.count = 0;
        this.running_game = true;

        this.restartBtn.addEventListener('click', this.restart.bind(this));
        this.startGame();
    }

    startGame() {
        this.boxClickListener = this.boxClicked.bind(this);
        this.boxList.forEach((box) => box.addEventListener('click', this.boxClickListener));
    }

    boxClicked(e) {
        this.count++;
        const id = e.target.id;
        const writId = e.target;
        writId.textContent = this.currentPlayer;
        if (this.spaces[id] === null) {
            this.spaces[id] = this.currentPlayer;
        }
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        if (this.checkPossible()) {
            this.checkWin();
        }
    }

    checkWin() {
        this.checkDiagonal();
        this.checkRow();
        this.checkColumn();
        this.checkFull();
    }

    checkDiagonal() {
        if ((this.spaces[0] === this.spaces[4] && this.spaces[4] === this.spaces[8] && this.spaces[4] !== null) ||
            (this.spaces[2] === this.spaces[4] && this.spaces[4] === this.spaces[6]) && this.spaces[4] !== null) {
            this.endGame();
        }
        else {console.log('checkDiagonal Fail')}
    }

    checkRow() {
        for (let i = 0, j = 1, k = 2; i < 9; i += 3, j += 3, k += 3) {
            if (this.spaces[i] === this.spaces[j] && this.spaces[j] === this.spaces[k] && this.spaces[i] !== null) {
                this.endGame();
            }
            else { console.log('checkRow Fail') }
        }
    }

    checkColumn() {
        for (let i = 0, j = 3, k = 6; i < 3; i++, j++, k++) {
            if (this.spaces[i] === this.spaces[j] && this.spaces[j] === this.spaces[k] && this.spaces[i] !== null) {
                this.endGame();
            }
            else { console.log('checkColumn Fail') }
        }
    }

    endGame() {
        this.running_game = false;
        const winner = this.currentPlayer === 'X' ? 'O' : 'X';
        this.result.textContent = `The winner is ${winner}`;
        this.disablePlayerMoves()
    }
    endGameDraw() {
        this.running_game = false;
        this.result.textContent = `Draw, Everyone Loses`;
        this.disablePlayerMoves()
    }

    checkPossible() {
        return this.count >= 5;
    }

    restart() {
        this.boxList.forEach((box) => {
            box.textContent = '';
        });
        for (let i=0; i<9; i++){
            this.spaces[i] = null
        }
        this.spaces = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.count = 0;
        this.result.textContent = '';
        this.startGame();
    }
    disablePlayerMoves() {
        this.boxList.forEach((box) => box.removeEventListener('click', this.boxClickListener));
    }
    checkFull() {
        let count = 0;
        for (let i=0; i<9; i++) {
            if (this.spaces[i] !== null) {
                count += 1
            }
            if (count === 9) {
                this.endGameDraw()
            }
        }
    }
}

const ticTacToe = new TicTacToeGame();
