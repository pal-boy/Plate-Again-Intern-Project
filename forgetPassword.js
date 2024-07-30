console.log('Forget Password');

const emails = JSON.parse(localStorage.getItem('emails')) || [];
const passwords = JSON.parse(localStorage.getItem('passwords')) || [];


document.getElementById('forgetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    let email = document.getElementById('email').value;
    let forgetPassword = document.getElementById('forgetPassword');
    
    for (let i = 0; i < emails.length; i++) {
        if (email === emails[i]) {
          forgetPassword.textContent = `your password is ${passwords[i]}`;
        }
    }
});