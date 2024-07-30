// registration page code starts here

let emails;
let passwords;
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
        showSuccessModal();
        console.log("working");
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

    //  console.log(emails);
    //  console.log(passwords);
    //  console.log(localStorage.length);
    //  console.log(localStorage.emails.length);
    //  console.log(localStorage);
    
}); 

// this will clear the localStorage mtlb deletes all emails and passwords from the storage
// localStorage.clear();

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
// register Sussecc
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