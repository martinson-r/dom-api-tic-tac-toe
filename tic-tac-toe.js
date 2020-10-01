window.addEventListener("DOMContentLoaded", event => {
    let board = document.getElementById("tic-tac-toe-board");
    //let squares = document.querySelectorAll(".square");
    let turnCount = 0;
    let player1 = [];
    let player2 = [];
    board.addEventListener("click", event => {
        console.log(event.target.className);
        let token = document.createElement("img");
        if (turnCount % 2 === 0) {

            if (event.target.className === "filled") {
                return false;
            }

            token.src = "images/player-x.svg";
            token.className = "filled";
            event.target.appendChild(token);
            turnCount++;
            player1.push(event.target.className);
            let player1Score = 0;
            for (i = 0; i < player1.length; i++) {
                if (player1[i].includes(event.target.className)) {
                    player1Score++;
                }
            }

        } else {

            if (event.target.className === "filled") {
                return false;
            }
            
            player2.push(event.target.className);
            let player2Score = 0;
            for (j = 0; j < player2.length; j++) {
                if (player2[j].includes(event.target.className)) {
                    player2Score++;
                }
            }
            token.src = "images/player-o.svg";
            token.className = "filled";
            event.target.appendChild(token);
            turnCount++;
        }
    });
});
