const counterValueEl = document.querySelector("#counter-value");
const decrementBtn = document.querySelector("#decrement");
const incrementBtn = document.querySelector("#increment");
const resetBtn = document.querySelector("#reset");

let count = 0;

function updateDom(value){
    counterValueEl.textContent = value;
}

function setColor(){
    if(count > 0){
        counterValueEl.style.color = "green";
    }else if( count < 0 ){
        counterValueEl.style.color ="red";
    }else{
        counterValueEl.style.color = "gray";
    }
}


decrementBtn.addEventListener("click", () => {
    count = count - 1;
    updateDom(count);
    setColor();
})

incrementBtn.addEventListener("click", () => {
    count = count + 1;
    updateDom(count);
    setColor();
})

resetBtn.addEventListener("click", () => {
    count = 0;
    updateDom(count);
    setColor();
})