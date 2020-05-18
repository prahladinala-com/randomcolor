const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const getcode = document.getElementById("code");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const htmlcode = document.getElementById("htmlcode");


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

    var code = 'radial-gradient(circle,' + hexColor1 + ', ' + hexColor2 + ')';

    // document.body.style.backgroundImage = 'linear-gradient(' + hexColor1 + ', ' + hexColor2 + ')';
    document.body.style.backgroundImage = code;
    return code;
});

getcode.addEventListener("click", function(){
    htmlcode.style.display = 'block'
    
    htmlcode.value = "background-image: radial-gradient(circle, color1, color2);";
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}