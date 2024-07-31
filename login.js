
// Login page Logic starts

// these two lines of code fetches all emails and passwords from the local storage
const emails = JSON.parse(localStorage.getItem('emails')) || [];
const passwords = JSON.parse(localStorage.getItem('passwords')) || [];

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

    let emailFlag = false;
    let passwordFlag = false;
    let emailPasswordFlag = false;

    // this for loop iterates the emails and passwords in the localStorage and match the user's email password
    for (let i = 0; i < emails.length; i++) {
      if (email === emails[i] && password === passwords[i]) {
        emailFlag = false;
        passwordFlag = false;
        emailPasswordFlag = false;
        window.open('./homeDummy.html');
        break;
        // Redirect to another page or perform other actions upon successful login
      }
      else{
        if(email !== emails[i] && password === passwords[i]) {
          emailFlag = true;
        }
        if(email === emails[i] && password !== passwords[i]) {
          passwordFlag = true;
        }
        if(email !== emails[i] && password !== passwords[i]){
          emailPasswordFlag = true;
        }
      }
      
    }
    if(emails.length == 0){
      errorMessage.textContent = 'Account does not exist\nPlease register.';
    }
    
    if(emailPasswordFlag){
      errorMessage.textContent = 'Account does not exist\nPlease register.';
    }
    if(emailFlag){
      errorMessage.textContent = 'Invalid email.';
    }
    if(passwordFlag){
      errorMessage.textContent = 'Invalid password.';
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
