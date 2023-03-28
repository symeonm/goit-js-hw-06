const input = document.querySelector('#validation-input')
const lengthText = Number(input.dataset.length)



input.addEventListener("blur", onBlure);

function onBlure () {

const inputLength = input.value.trim();

    if (lengthText === inputLength.length) {
            input.classList.add('valid');
            input.classList.remove('invalid')
            
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid')
           
        }
}










