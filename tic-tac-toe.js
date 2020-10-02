window.addEventListener("DOMContentLoaded", event => {
    let board = document.getElementById("tic-tac-toe-board");
    let squareValues = ["", "", "", "", "", "", "", "", ""];
    let currentPlayerSymbol = "x";
    let gameStatus = "";
    let announcement = document.getElementById("game-status");


    let gameLoop = function() {
        for (i = 0; i < 9; i+=3) {
            if ((squareValues[i] !== "") && (squareValues[i] === squareValues[i+1]) && (squareValues[i+1] === squareValues[i+2])) {
                gameStatus = squareValues[i];
                console.log(gameStatus);
            }
        }

        for (i = 0; i < 3; i+=1) {
            if ((squareValues[i] !== "") && (squareValues[i] === squareValues[i+3]) && (squareValues[i+3] === squareValues[i+6])) {
                gameStatus = squareValues[i];
            }

            if ((squareValues[0] !== "") && (squareValues[0] === squareValues[4]) && (squareValues[0] === squareValues[8])) {
                gameStatus = squareValues[0];
            }

            if ((squareValues[2] !== "") && (squareValues[2] === squareValues[4]) && (squareValues[2] === squareValues[6])) {
                gameStatus = squareValues[2];
            }
    }
}

    board.addEventListener("click", event => {
        if (event.target.id.includes("square")) {
            let thisTarget = event.target.id;
            let number = thisTarget.slice(7);
            if (squareValues[number] === "") {
                let token = document.createElement("img");
                token.src = "images/player-x.svg";
                event.target.appendChild(token);
                squareValues[number] = currentPlayerSymbol;
                if (currentPlayerSymbol === "x") {
                    currentPlayerSymbol = "o";
                } else {
                    currentPlayerSymbol = "x";
                    token.src = "images/player-o.svg";
                }
            } else {
                console.log("Nope!");
            }

        } else {
            console.log("Nope!");
        }
        gameLoop();
        if (gameStatus !== "") {
            announcement.innerHTML = "The winner is " + gameStatus;
        }
    });
});
