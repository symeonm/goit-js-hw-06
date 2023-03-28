const loginForm = document.querySelector('.login-form')
loginForm.addEventListener('submit', onSubmit)



function onSubmit (evt) { 
    evt.preventDefault()
    const {email, password} = evt.currentTarget.elements
    if (email.value === '' || password.value === '') {
        alert('Заповніть будь ласка всі поля')
    } else {
        const data = {
            email : email.value,
            password : password.value
        } 
        console.log(data)
    }
    evt.currentTarget.reset()
}

 









