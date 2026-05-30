let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let gameOver = false;

function play(cell) {
  if (board[cell] === "" && !gameOver) {
    board[cell] = player;
    document.getElementsByClassName("cell")[cell].innerHTML = player;

    if (checkWin()) {
      document.getElementById("status").innerHTML = player + " wins!";
      gameOver = true;
      return;
    }

    player = player === "X" ? "O" : "X";
    document.getElementById("status").innerHTML = "Turn: " + player;
  }
}

function checkWin() {
  let wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  return wins.some(combo =>
    board[combo[0]] &&
    board[combo[0]] === board[combo[1]] &&
    board[combo[1]] === board[combo[2]]
  );
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  player = "X";
  gameOver = false;
  document.getElementById("status").innerHTML = "";
  let cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
}
