const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");


btn.addEventListener("click", function () {
    let hexColor1 = "#";
    let hexColor2 = "#";

    for (let i = 0; i < 6; i++) {
        hexColor1 += hex[getRandomNumber()];
        hexColor2 += hex[getRandomNumber()];

    }
    console.log(hexColor1)
    color1.textContent = hexColor1;
    color2.textContent = hexColor2;
    orientation = 90;

    // document.body.style.backgroundImage = 'linear-gradient(' + hexColor1 + ', ' + hexColor2 + ')';
    document.body.style.backgroundImage = 'linear-gradient(' + hexColor1 + ', ' + hexColor2 + ')';

        // background-image: linear-gradient(#fff, #000);
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}