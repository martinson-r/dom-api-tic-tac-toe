window.addEventListener("DOMContentLoaded", event => {
    let board = document.getElementById("tic-tac-toe-board");
    let squareValues = ["", "", "", "", "", "", "", "", ""];
    let currentPlayerSymbol = "x";
    let gameStatus = "";
    let announcement = document.getElementById("game-status");
    let computerPlayer = "x";
    let playerTurn = true;



    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }


      let computerAssignment = getRandomInt(2);
    console.log(computerAssignment);
    if (computerAssignment === 0) {
        computerPlayer = "x";
        console.log(computerPlayer);
    } else {
        computerPlayer = "o";
        console.log(computerPlayer);
    }

    if (computerPlayer === gameStatus) {
        playerTurn = false;
        let squareChoice = getRandomInt(9);
        console.log(squareChoice);
        if (squareValues[squareChoice] !== "") {
            let token = document.createElement("img");
            token.src = "images/player-"+ squareValues[squareChoice] + ".svg";
            token.className = "token";
            let targetSquare = "square-" + i;
            let squareToPopulate = document.getElementById(targetSquare);
            squareToPopulate.appendChild(token);

    }
    console.log(squareValues);

    }

    if (localStorage.getItem('gameboard')) {
        let deserialized = JSON.parse(localStorage.getItem('gameboard'));
        squareValues = deserialized;

        for (i = 0; i < squareValues.length; i++) {
            if (squareValues[i] !== "") {
                let token = document.createElement("img");
                token.src = "images/player-"+ squareValues[i] + ".svg";
                token.className = "token";
                let targetSquare = "square-" + i;
                let squareToPopulate = document.getElementById(targetSquare);
                squareToPopulate.appendChild(token);
        }
            }
        console.log(squareValues);
    };

    let saveGame = function() {
            let storedValues = JSON.stringify(squareValues);
            localStorage.setItem('gameboard', storedValues);
    };


let newGameButton = document.querySelectorAll('button')[0];
let giveUpButton = document.querySelectorAll('button')[1];


function resetBoard() {
    localStorage.removeItem('gameboard');
    squareValues = ["", "", "", "", "", "", "", "", ""];
    currentPlayerSymbol = "x";
    gameStatus = "";
    announcement.innerHTML = ""
    location.reload();
    let images = document.querySelectorAll('.token');
    images.forEach(function(item){
        item.remove();
    });

}

newGameButton.addEventListener("click", event => {
    if (announcement.innerHTML === "") {
        return;
    } else {
resetBoard();
}
});

giveUpButton.addEventListener("click", event => {
    if (gameStatus = "") {
return;
    }

if (currentPlayerSymbol === "x") {
    gameStatus  = "x";
    console.log(gameStatus);
    announcement.innerHTML = "The winner is " + gameStatus;
}

if (currentPlayerSymbol === "o") {
    gameStatus = "o";
    console.log(gameStatus);
    announcement.innerHTML = "The winner is " + gameStatus;
}
});


    let gameLoop = function() {
        let boardIsFilled = true;
        for (i = 0; i < 9; i++) {
            if (squareValues[i] === '') {
                boardIsFilled = false;
            }
        }

        if (boardIsFilled) {
            gameStatus = "none";
        }



        for (i = 0; i < 9; i+=3) {
            if ((squareValues[i] !== "") && (squareValues[i] === squareValues[i+1]) && (squareValues[i+1] === squareValues[i+2])) {
                gameStatus = squareValues[i];
            }
        }

        for (i = 0; i < 3; i+=1) {
            if ((squareValues[i] !== "") && (squareValues[i] === squareValues[i+3]) && (squareValues[i+3] === squareValues[i+6])) {
                gameStatus = squareValues[i];
            }
        }

            if ((squareValues[0] !== "") && (squareValues[0] === squareValues[4]) && (squareValues[0] === squareValues[8])) {
                gameStatus = squareValues[0];
            }

            if ((squareValues[2] !== "") && (squareValues[2] === squareValues[4]) && (squareValues[2] === squareValues[6])) {
                gameStatus = squareValues[2];
            }

            for (i = 0; i < 9; i++) {
                if (i === "") {}
            }
}

    board.addEventListener("click", event => {
        if (playerTurn === true) {
        if (event.target.id.includes("square")) {
            let thisTarget = event.target.id;
            let number = thisTarget.slice(7);
            if (squareValues[number] === "") {
                let token = document.createElement("img");
                token.src = "images/player-x.svg";
                token.className = "token";
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
    }

    if (playerTurn === false) {
        return;
    }
        saveGame();
        gameLoop();

        if (gameStatus !== "") {
            announcement.innerHTML = "The winner is " + gameStatus;
        }
    });
});
