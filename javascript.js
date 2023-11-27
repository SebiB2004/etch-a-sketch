const div = document.getElementById("grid");
const grid = [];  
for (let i = 0; i < 18; i++) {
    for (let j = 0; j < 18; j++) {
        const newSquare = document.createElement("p");
        div.appendChild(newSquare);

        newSquare.addEventListener("mouseover", function () {
            newSquare.classList.add("hovered");
        });
    }
}
