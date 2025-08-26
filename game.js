// first learn how this game is played --  rules and board
// 9 boxes (0 to 8 numbered), two players, alternate turns, winning patterns/cases (three horizontal, 3 vertical, 2 diagonal) --- do it in notebook (theoretical understanding)

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn")
let newGameBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO (agar O ka turn hai, then button ke upar O print hoga, agar X ka turn hai, then button ke upar X print hokar ayega

// let arr = ["apple", "banana", "litchi"]
// let arr2 = [
//     ["apple", "litchi"],
//     ["potato", "peas"], 
//     ["pants", "shirts"]
// ]; // 2D array               // will use this to store win patterns

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () => {
    turnO = true
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("box was click");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = "true"
        }
        box.disabled = true; // so that value on btn doesn't change if it's clicked again

        checkWinner();  // everytime a box is clicked, checkWinner function is called
    })
})

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {              // make disable - false
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// arrow function, for checking if someone is winning (looping on winPatterns array)
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner", pos1Val)
                showWinner(pos1Val);
            }
           
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)
        


// console.log(pattern[0], pattern[1], pattern[2])
// console.log(boxes[pattern[0]].innerText,
//             boxes[pattern[1]].innerText,
//             boxes[pattern[2]].innerText);    --- this is the main concept


