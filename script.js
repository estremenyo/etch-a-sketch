const container = document.querySelector(".container");
generateGrid(16);
const button = document.querySelector(".promptButton");
button.addEventListener("click", handleButton);

function generateGrid(squaresPerLine) {
    Array.from(container.children).forEach(child => child.remove());

    for (let i = 0; i < squaresPerLine * squaresPerLine; i++) {
        let div = document.createElement("div");

        let dimensions = Math.floor((100 / squaresPerLine) * 100) / 100;
        div.style.height = `${dimensions}%`;
        div.style.width = `${dimensions}%`;

        div.addEventListener("mouseover", handleMouseover);
        container.appendChild(div);
    }
}

function handleMouseover(e) {
    let colorR = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);

    e.target.style.background = `rgb(${colorR}, ${colorG}, ${colorB})`;
}


function handleButton() {
    let response = "";
    while (isNaN(response) || !Number.isInteger(response) ||
    response > 100 || response < 0 || response == "") {
        response = Number(prompt("How many squares per line? (Default 16, Max 100)"));
    }
    generateGrid(response);
}

