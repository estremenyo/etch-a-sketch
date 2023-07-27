const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "gridElement");
    container.appendChild(div);
}

const gridList = document.querySelectorAll("div.gridElement");
gridList.forEach(grid => grid.addEventListener("mouseover", handleMouseover));  

function handleMouseover(e) {
    e.target.setAttribute("class", "hovered");
}

const button = document.querySelector(".promptButton");
button.addEventListener("click", handleButton);

function handleButton() {
    let response = "";
    do {
        response = Number(prompt("How many squares per line? (Default 16, Max 100)"));
    }
    while (isNaN(response) || !Number.isInteger(response) || response > 100 || response < 0)
    generateNewGrid(response);
}


// TODO
function generateNewGrid(squares) {
    console.log(squares);
}