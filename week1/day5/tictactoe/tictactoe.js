console.log("Ready To Go!");

// click a square, x shows up in square
// click to make 0
// turns taken between x and o
// make played square unplayable
// check winner
// if winner, display winner

const squares = document.getElementsByClassName("square");

let playerPiece = "X"

const squarePlayed = (event) => {
    return event.target.dataset.played
}

const buildArray = () => {
  let board = [];
  for (let i=0; i<squares.length; i++) {
    let piece = squares[i].innerHTML;
    board.push(piece)
  }
  return board;
}

const firstRowWin = (board) => {
  if (board[0] !== "") {
  return board[0] === board[1] && board[1] === board[2];
  } else {
    return false;
  }
}

const secondRowWin = (board) => {
  if (board[3] !== "") {
  return board[3] === board[4] && board[4] === board[5];
  } else {
    return false;
  }
}

const thirdRowWin = (board) => {
  if (board[0] !== "") {
  return board[6] === board[7] && board[7] === board[8];
  } else {
    return false;
  }
}


const checkHorizontal = (board) => {
  return firstRowWin() || secondRowWin() || thirdRowWin()
}

const checkWinner = () => {
  let board = buildArray();
  if (horizontalWin(board)) {
    console.log("Winner");
  };
}
const playPiece = (square) => {
  if (!squarePlayed(event)) {
  square.innerHTML = playerPiece;
    if (playerPiece == "X") {
      playerPiece = "O";
    } else {
      playerPiece = "X";
  }
  square.dataset.played = "true";
  checkWinner();
}

for (let i=0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    playPiece(event.target);
  });
}
