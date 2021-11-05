const square = document.getElementById("square");
const grid = document.getElementById("theGrid");
let squareChildren = grid.childNodes;


//Set dimension of grid, number of squares
let x = 32;
let y = 32;
let gridSize = x*y;


//Fills the container with squares
function produceGrid(z) {
    for (let i = 0; i < z-1; i++) {
        grid.appendChild(square.cloneNode(false));
    }
}
produceGrid(gridSize);


//Converts the grid into an array of items
nodeArray = Array.from(squareChildren);


//Changes color of squares on mouseover
for (let i=0; i < nodeArray.length; i++) {
    nodeArray[i].addEventListener("mouseover", () => nodeArray[i].style.backgroundColor="purple");
}



