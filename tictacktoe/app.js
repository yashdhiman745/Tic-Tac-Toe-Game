let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset")
let new_buttn = document.querySelector("#new-btn")
let msg = document.querySelector("#msg")
let msg_container = document.querySelector(".msg-container")
let count = 0;

let turn0 = true; //x or y
// winning patterns are (0,1,2) (3,4,5) (6,7,8)and 6 more.
const winpatrns = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O"
            turn0 = false;
        }
        else {
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkwinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    })
})

let checkwinner = () => {
    for (pat of winpatrns) {
        // console.log(pat[0], pat[1], pat[2])

        // console.log(boxes[pat[1]])  //this will give element of boxes array of pat 1 index
        let pos1val = boxes[pat[0]].innerText;
        let pos2val = boxes[pat[1]].innerText;
        let pos3val = boxes[pat[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "")
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("winner")
                showWinner(pos1val);
                return true;
            }
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations winner is ${winner}`
    msg_container.classList.remove("hide")
    disableboxes();
}
const disableboxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const resetgame = () => {
    turn0 = true;
    count = 0;
    enableboxes();
    msg_container.classList.add('hide')
}
const enableboxes = () => {
    for (box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}
const gameDraw = () => {
    msg.innerText = "Game Draw"
    msg_container.classList.remove("hide")
    disableboxes();
}
resetbtn.addEventListener("click", resetgame)
new_buttn.addEventListener("click", resetgame)
