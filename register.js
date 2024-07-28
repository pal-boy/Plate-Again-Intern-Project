// registration page code starts here
document.getElementById('registerForm').addEventListener('submit', function(event) {
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