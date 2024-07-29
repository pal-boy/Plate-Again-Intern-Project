// registration page code starts here

export {emails,passwords,test};
let emails;
let passwords;
let test = 5;
document.querySelector('#registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errorMessage = document.getElementById('errorMessage');
    // let registerbutton = document.getElementById('registerBtn');

    // Basic validation
    if (!email || !password || !confirmPassword) {
        errorMessage.textContent = 'Please enter email,password and confirm password.';
        return;
    }
    if(password != confirmPassword){
        errorMessage.textContent = 'Password and confirm password does not match.';
    }
    else{
        window.open('./homeDummy.html');
    }
  
     // Get existing values from localStorage
     emails = JSON.parse(localStorage.getItem('emails')) || [];
     passwords = JSON.parse(localStorage.getItem('passwords')) || [];

     // Add the new value to the array
     emails.push(email);
     passwords.push(password);

     // Store the updated array back to localStorage
     localStorage.setItem('emails', JSON.stringify(emails));
     localStorage.setItem('passwords', JSON.stringify(passwords));

     console.log(emails);
     console.log(passwords);
        
    
}); 



// Add password visibility toggle
const passwordInput = document.getElementById('password');

const passwordToggle = document.createElement('span');
passwordToggle.innerHTML = '👀';
passwordToggle.classList.add('text-gray-600', 'cursor-pointer');
passwordInput.parentNode.appendChild(passwordToggle);

passwordToggle.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordToggle.innerHTML = '🙈';
  } else {
    passwordInput.type = 'password';
    passwordToggle.innerHTML = '👀';
  }
});