window.addEventListener("DOMContentLoaded", event => {
    let board = document.getElementById("tic-tac-toe-board");
    let squareValues = ["", "", "", "", "", "", "", "", ""];
    let currentPlayerSymbol = "x";
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
        console.log(squareValues);
    });
});
