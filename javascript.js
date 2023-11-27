const div = document.getElementById("matrice16");
const eraser = document.getElementById("eraser");
const creion = document.getElementById("creion");

const marime = document.getElementById("marime");
const marime2 = document.getElementById("marime2");

let row = 16;

function matrice(){
    div.innerHTML = '';
for (let i = 0; i < row; i++) {
    for (let j = 0; j < row; j++) {
        const newSquare = document.createElement("p");
        newSquare.style.boxSizing = "border-box";
        newSquare.style.height = `${480 / row}px`;
        newSquare.style.width = `${480 /row}px`;
        newSquare.style.margin = "0";

        div.appendChild(newSquare);

        marime.addEventListener("click", function(){
            row = 32;
        })

        creion.addEventListener("click",function(){

            newSquare.addEventListener("mouseover", function () {
                let red = Math.floor(Math.random()* 255);
                let green = Math.floor(Math.random()* 255);
                let blue = Math.floor(Math.random()* 255);
                newSquare.style.backgroundColor = `rgb(${red},${green}, ${blue})`;
            });
        })
            eraser.addEventListener("click", function(){
    
                newSquare.addEventListener("mouseover", function(){
                    newSquare.style.backgroundColor = "white";
                })
            })
        }
        

}
}
marime2.addEventListener("click", function(){
    row = 32;
    matrice();
})

marime.addEventListener("click",function(){
    row = 16;
    matrice();
})







const restart = document.getElementById("restart");

restart.addEventListener("click", function(){
    location.reload();
});


function color(){
    return Math.floor(Math.random()) * 255;

}
matrice();

