// registration page code starts here
let names;
let emails;
let passwords;
document.querySelector('#registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errorMessage = document.getElementById('errorMessage');
    const mobileInput = document.getElementById('mobile').value;

    // Basic validation
    if (!email || !password || !confirmPassword) {
        errorMessage.textContent = 'Please enter email,password and confirm password.';
        return;
    }
    if(password != confirmPassword){
        errorMessage.textContent = 'Password and confirm password does not match.';
    }

    // Regular expression to check if the input is exactly 10 digits
    const mobilePattern = /^\d{10}$/;

    if (!mobilePattern.test(mobileInput)) {
        errorMessage.textContent = 'Please enter a valid 10-digit mobile number.';
    }

    else{
        showSuccessModal();
    }
  
     // Get existing values from localStorage
     names = JSON.parse(localStorage.getItem('names')) || [];
     emails = JSON.parse(localStorage.getItem('emails')) || [];
     passwords = JSON.parse(localStorage.getItem('passwords')) || [];

     // Add the new value to the array
     names.push(name);
     emails.push(email);
     passwords.push(password);

     // Store the updated array back to localStorage
     localStorage.setItem('names', JSON.stringify(names));
     localStorage.setItem('emails', JSON.stringify(emails));
     localStorage.setItem('passwords', JSON.stringify(passwords));
    
}); 

// this will clear the localStorage mtlb deletes all emails and passwords from the storage
localStorage.clear();

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

// register Success
// Helper function to display the success modal
function showSuccessModal() {
  const modal = document.getElementById('success-modal');
  const closeModalButton = document.getElementById('close-modal');

  // Show the modal
  modal.classList.add('show');

  // Hide the modal when the close button is clicked
  closeModalButton.addEventListener('click', () => {
    modal.classList.remove('show');
    window.open('login.html');
  });

  // Hide the modal when clicking outside of the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  });
}