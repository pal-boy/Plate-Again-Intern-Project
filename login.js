
// Login page Logic starts

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('errorMessage');
    let button = document.getElementById('loginBtn');

    // Basic validation
    if (!email || !password) {
        errorMessage.textContent = 'Please enter both email and password.';
        return;
    }

    // Simulate server-side validation
    if (email === 'user@example.com' && password === 'password123') {
        
            window.open('./homeDummy.html');
        // Redirect to another page or perform other actions upon successful login
    } else if(email !== 'user@example.com' && password === 'password123') {
        errorMessage.textContent = 'Invalid email or password.';
    }
     else if(email === 'user@example.com' && password !== 'password123') {
        errorMessage.textContent = 'Invalid email or password.';
    }
    else{
        errorMessage.textContent = 'Account does not exist.\n Please Register';
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

// Login page Logic ends
