const inputRange = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text')



inputRange.addEventListener('input', onRange);
inputText.style.fontSize = inputRange.value + 'px'

function onRange (evt) {
    inputText.style.fontSize = evt.currentTarget.valueAsNumber + 'px'
}

