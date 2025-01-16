const colorSelector = document.querySelector("#colorSelector");
const getRandomColor = document.querySelector("#getRandomColor");

function getRandomRGBValue(){
    return (Math.floor(Math.random() * 256));
}

colorSelector.addEventListener("input", (event) => {
    document.querySelector("body").style.backgroundColor = event.target.value;
})


getRandomColor.addEventListener("click", () => {
    document.querySelector("body").style.backgroundColor = `rgb(${getRandomRGBValue()},${getRandomRGBValue()},${getRandomRGBValue()})`;
});