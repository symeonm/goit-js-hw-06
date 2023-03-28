const input = document.querySelector('#name-input')
console.log(input)
const names = document.querySelector('#name-output')
console.log(names)

input.addEventListener('input', onTextNames)

function onTextNames() {
    if (input.value === '') {
        names.textContent = 'Anonymous'
    } else {
        names.textContent = input.value
    }
}

