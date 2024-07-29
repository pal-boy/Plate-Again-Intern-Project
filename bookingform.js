// Get all the form elements
const form = document.getElementById('booking-form');
const foodTypeButtons = document.querySelectorAll('#veg, #non-veg');
const foodNameInput = document.getElementById('food-name');
const foodQuantityInput = document.getElementById('food-quantity');
const coldStorageButtons = document.querySelectorAll('#yes-button, #no-button');
const dateTimeInput = document.getElementById('date-time');
const submitButton = document.getElementById('submit-button');

// Helper function to display error messages
function showError(input, message) {
    const error = document.createElement('div');
    error.style.color = 'red'
    error.className = 'error-message';
    error.innerText = message;
    input.parentNode.appendChild(error);
    input.classList.add('input-error');
}

// Helper function to clear all error messages
function clearErrors() {
    document.querySelectorAll('.error-message').forEach(error => error.remove());
    document.querySelectorAll('.input-error').forEach(input => input.classList.remove('input-error'));
}

// Add event listeners to the form elements
foodTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active class on food type buttons
        foodTypeButtons.forEach(btn => btn.classList.remove('bg-yellow-500', 'text-white'));
        button.classList.add('bg-yellow-500', 'text-white');
    });
});

coldStorageButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle active class on cold storage buttons
        coldStorageButtons.forEach(btn => btn.classList.remove('bg-yellow-500', 'text-white'));
        button.classList.add('bg-yellow-500', 'text-white');
    });
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    clearErrors();
    // Validate the form
    if (!validateForm()) return;
    // Store the form data in local storage
    storeFormData();
    // Show a success message
    showSuccessMessage();
});

// Form validation function
function validateForm() {
    let isValid = true;

    // Check if food type is selected
    if (!Array.from(foodTypeButtons).some(button => button.classList.contains('bg-yellow-500'))) {
        showError(foodTypeButtons[0].parentNode, 'Please select a food type.');
        isValid = false;
    }

    // Check if food name is entered
    if (!foodNameInput.value.trim()) {
        showError(foodNameInput, 'Please enter the name of the food.');
        isValid = false;
    }

    // Check if food quantity is entered
    if (!foodQuantityInput.value.trim() || foodQuantityInput.value <= 0) {
        showError(foodQuantityInput, 'Please enter a valid quantity of food.');
        isValid = false;
    }

    // Check if cold storage is selected
    if (!Array.from(coldStorageButtons).some(button => button.classList.contains('bg-yellow-500'))) {
        showError(coldStorageButtons[0].parentNode, 'Please indicate if cold storage is needed.');
        isValid = false;
    }

    // Check if date and time is selected
    if (!dateTimeInput.value) {
        showError(dateTimeInput, 'Please select a pick-up date and time.');
        isValid = false;
    }

    return isValid;
}

// Store form data in local storage
function storeFormData() {
    const formData = {
        foodType: Array.from(foodTypeButtons).find(button => button.classList.contains('bg-yellow-500')).innerText,
        foodName: foodNameInput.value.trim(),
        foodQuantity: foodQuantityInput.value.trim(),
        coldStorage: Array.from(coldStorageButtons).find(button => button.classList.contains('bg-yellow-500')).innerText,
        dateTime: dateTimeInput.value
    };
    // check kar rha hu data aa rha ki nahi
    console.log(formData);
    localStorage.setItem('formData', JSON.stringify(formData));
}

// Helper function to display the success modal
function showSuccessModal() {
  const modal = document.getElementById('success-modal');
  const closeModalButton = document.getElementById('close-modal');

  // Show the modal
  modal.classList.add('show');

  // Hide the modal when the close button is clicked
  closeModalButton.addEventListener('click', () => {
    modal.classList.remove('show');
    window.open('bookingDetails.html');
    form.reset();
    foodTypeButtons.forEach(button => button.classList.remove('bg-yellow-500', 'text-white'));
    coldStorageButtons.forEach(button => button.classList.remove('bg-yellow-500', 'text-white'));
  });

  // Hide the modal when clicking outside of the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('show');
      form.reset();
      foodTypeButtons.forEach(button => button.classList.remove('bg-yellow-500', 'text-white'));
      coldStorageButtons.forEach(button => button.classList.remove('bg-yellow-500', 'text-white'));
    }
  });
}

// Show success message
function showSuccessMessage() {
  showSuccessModal();

}