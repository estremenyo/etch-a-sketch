const container = document.querySelector(".container");

function generateGrid(squares) {
    Array.from(container.children).forEach(child => child.remove());
    for (let i = 0; i < squares * squares; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "gridElement");
        container.appendChild(div);
    }
    const gridList = document.querySelectorAll("div.gridElement");
    gridList.forEach(element => element.addEventListener("mouseover", handleMouseover));  
}

generateGrid(16);


function handleMouseover(e) {
    e.target.setAttribute("class", "hovered");
}

const button = document.querySelector(".promptButton");
button.addEventListener("click", handleButton);

function handleButton() {
    let response = "";
    while (isNaN(response) || !Number.isInteger(response) || response > 100 || response < 0) {
        response = Number(prompt("How many squares per line? (Default 16, Max 100)"));
    }
    generateGrid(response);
}