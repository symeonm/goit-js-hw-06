let counterValue = 0;

const decr = document.querySelector('#counter [data-action="decrement"]') 
console.log(decr)
const incr = document.querySelector('#counter [data-action="increment"]')
console.log(incr)
const value = document.querySelector('#value')
console.log(value)

decr.addEventListener('click', onDecrementButtonClick)


function onDecrementButtonClick() {
    counterValue = counterValue - 1;
    value.textContent = counterValue;   
}

incr.addEventListener('click', onIncrementButtonClick)


function onIncrementButtonClick() {
    counterValue = counterValue + 1;
    value.textContent = counterValue;
}












