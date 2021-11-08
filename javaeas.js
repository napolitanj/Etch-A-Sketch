const square = document.getElementById("square");
const grid = document.getElementById("theGrid");
const erase = document.getElementById("erase");
const resize = document.getElementById("resize");
let random = document.getElementById("random");
let squareChildren = grid.childNodes;


//Set initial dimension of grid, number of squares
let initial = 32;
function setDimensions (x) {
    document.querySelector(".grid").style.gridTemplateColumns = ("repeat(" + x + ", auto)");
    document.querySelector(".grid").style.gridTemplateRows = ("repeat(" + x + ", auto)");
    return gridSize = x*x;
}

//Fills the container with squares
function produceGrid(z) {
    for (let i = 0; i < z-1; i++) {
        grid.appendChild(square.cloneNode(false));
    }
}

//Changes color of squares on mouseover
function draw() {
    for (let i=0; i < nodeArray.length; i++) {
    nodeArray[i].addEventListener("mouseover", () => nodeArray[i].style.backgroundColor="black");
    }
}

setDimensions(initial);
produceGrid(gridSize);

//Converts the grid into an array of items
nodeArray = Array.from(squareChildren);

draw();

//Reset grid
function resetGrid() {
        grid.querySelectorAll('.squareStyle').forEach(n => n.remove());
    produceGrid(gridSize+1);
    nodeArray = Array.from(squareChildren);
    draw();
}

//Random color
function randomPen() {
    const randomR = Math.floor(Math.random()*256);
    const randomG = Math.floor(Math.random()*256);
    const randomB = Math.floor(Math.random()*256);
        for (let i=0; i < nodeArray.length; i++) {
            nodeArray[i].addEventListener("mouseover", () => nodeArray[i].style.backgroundColor="rgb("+randomR+","+randomG+","+randomB+")");        
        }
        }

//Reset grid and change size
function changeSize() {
    let newSize = prompt("How big would you like your grid to be? Enter a number of columns and rows.");
        if (newSize > 100) {
            let newSize = prompt("Tf broh? You trying to make this crash? Try again.")
        }
        else 
        grid.querySelectorAll('.squareStyle').forEach(n => n.remove());
    setDimensions(newSize);
    produceGrid(gridSize+1);
    nodeArray = Array.from(squareChildren);
    draw();
}

erase.addEventListener("click", () => resetGrid());
resize.addEventListener("click", () => changeSize());
random.addEventListener("click", () => randomPen());




