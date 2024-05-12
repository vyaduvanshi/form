const password = document.querySelector('#password')
const confirm_password = document.querySelector('#confirm-password')

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
    if ((password.value) !== (confirm_password.value))
        console.log('Passwords dont match')
})