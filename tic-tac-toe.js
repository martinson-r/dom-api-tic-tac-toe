window.addEventListener("DOMContentLoaded", event => {
    let board = document.getElementById("tic-tac-toe-board");
    //let squares = document.querySelectorAll(".square");
    let turnCount = 0;
    board.addEventListener("click", event => {
        console.log(event.target.id);
        let token = document.createElement("img");
        if (turnCount % 2 === 0) {
            token.src = "images/player-x.svg";
            console.log(event.target.value);
            event.target.appendChild(token);
            turnCount++;

        } else {
            token.src = "images/player-o.svg";
            console.log(event.target.value);
            event.target.appendChild(token);
            turnCount++;

        }


    });
});
