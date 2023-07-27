const container = document.querySelector(".container");
generateGrid(16);
const button = document.querySelector(".promptButton");
button.addEventListener("click", handleButton);

function generateGrid(squaresPerLine) {
    Array.from(container.children).forEach(child => child.remove());

    for (let i = 0; i < squaresPerLine * squaresPerLine; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "gridElement");

        let dimensions = Math.floor((100 / squaresPerLine) * 100) / 100;
        div.style.height = `${dimensions}%`;
        div.style.width = `${dimensions}%`;

        container.appendChild(div);
    }


    // CSS Manipulation goes here
    // generateGrid() only works with 16 as arg because the
    // CSS width & height values for each gridElement are hardcoded
    // The task is to change those values based on user input and dimensions of container



    const gridList = document.querySelectorAll("div.gridElement");
    gridList.forEach(element => element.addEventListener("mouseover", handleMouseover));  
}

function handleMouseover(e) {
    e.target.classList.add("hovered");
}


function handleButton() {
    let response = "";
    while (isNaN(response) || !Number.isInteger(response) ||
    response > 100 || response < 0 || response == "") {
        response = Number(prompt("How many squares per line? (Default 16, Max 100)"));
    }
    generateGrid(response);
}

