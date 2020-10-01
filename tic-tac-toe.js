window.addEventListener("DOMContentLoaded", event => {
    let board = document.getElementById("tic-tac-toe-board");
    let squares = document.querySelectorAll(".square");
    console.log(squares);
    board.addEventListener("click", event => {
        let token = document.createElement("img");

        for (let i = 0; i < squares.length; i++) {
            let turnCount = 0;

            if (i % 2 === 0) {
                token.src = "images/player-x.svg";
                event.target.appendChild(token);
            } else {
                token.src = "images/player-o.svg";
                event.target.appendChild(token);
            }
        }
    });













})