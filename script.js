const square = document.getElementById("square");
const grid = document.getElementById("theGrid");
const erase = document.getElementById("erase");
const resize = document.getElementById("resize");
const pickColor = document.getElementById("pickColor");
const rainbow = document.getElementById("rainbow");
let squareChildren = grid.childNodes;
let initial = 32;
let nodeArray;

//Set initial dimension of grid, number of squares
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
    nodeArray = Array.from(squareChildren);
}

//Changes color of squares on mouseover
function draw() {
    for (let i=0; i < nodeArray.length; i++) {
    nodeArray[i].addEventListener("mouseover", () => nodeArray[i].style.backgroundColor=pickColor.value);
    }
}

//Reset grid
function resetGrid() {
        grid.querySelectorAll('.squareStyle').forEach(n => n.remove());
    produceGrid(gridSize+1);
    nodeArray = Array.from(squareChildren);
    draw();
}

//Generates a random color for the rainbow Pen
function randomColor() {
    const randomR = Math.floor(Math.random()*256);
    const randomG = Math.floor(Math.random()*256);
    const randomB = Math.floor(Math.random()*256);
    return "rgb("+randomR+","+randomG+","+randomB+")";
}

//Rainbow Pen
function randomPen() {
    for (let i=0; i < nodeArray.length; i++) {
        nodeArray[i].addEventListener("mouseover", () => nodeArray[i].style.backgroundColor=randomColor());        
    }
}

function colorSelector() {
    draw();
}

//Reset grid and change size
function changeSize() {
    let newSize = prompt("Enter a number between 3-100.");
    if (newSize === null || newSize === ""){
        return;
    } else if (newSize > 100 || newSize < 3) {
        prompt("Must be between 3 and 100.")
        return;
    } else {
        grid.querySelectorAll('.squareStyle').forEach(n => n.remove());
        setDimensions(newSize);
        produceGrid(gridSize+1);
        nodeArray = Array.from(squareChildren);
        draw();
    }
}

//Pen of various colors
function rainbowPen() {
    for (let i=0; i < nodeArray.length; i++) {
        nodeArray[i].addEventListener("mouseover", () => nodeArray[i].style.backgroundColor=randomColor())
    }
}

erase.addEventListener("click", () => resetGrid());
resize.addEventListener("click", () => changeSize());
pickColor.addEventListener("click", () => colorSelector());
rainbow.addEventListener("click", () => rainbowPen());

setDimensions(initial);
produceGrid(gridSize);
draw();



