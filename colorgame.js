let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let reset = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    resetted();
}

function setupModeButtons(){
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
    
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            resetted();
        });
    }
}

function setupSquares(){
    for(let i = 0; i < squares.length; i++){
        //Add click listeners to squares
        squares[i].addEventListener("click", function(){
            //Grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            //Compare to pickedColor
    
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                reset.textContent = "Play again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }
}


for(let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");


        if(this.textContent === "Easy"){
            numSquares = 3;
        } else {
            numSquares = 6;
        }

        resetted();
        //figure out how many squares to show
        //pick new colors
        //pick a new pickedColor
        //update page to reflect changes
    });
}

function resetted(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    reset.textContent = "New Colors";
    //change colors of squares
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}

reset.addEventListener("click", function(){
    resetted();
});

function changeColors(color){
    //loop through all squares
    for(let i = 0; i < squares.length; i++){
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //Make an array
    let arr = []
    //repeat num times
    for(let i = 0; i < num; i++){
        //get random color to push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor(){
    //Pick a "red" from 0-255
    let r = Math.floor(Math.random() * 256);
    //Pick a "green" from 0-255
    let g = Math.floor(Math.random() * 256);
    //Pick a "blue" from 0-255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + " " +  g + "," + " " +  b + ")";
}
