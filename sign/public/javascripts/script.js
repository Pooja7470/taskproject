const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  
  // Reset error messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';
  
  // Perform validation
  if (name.value.trim() === '') {
    nameError.textContent = 'Name is required';
  }
  
  if (email.value.trim() === '') {
    emailError.textContent = 'Email is required';
  } else if (!isValidEmail(email.value)) {
    emailError.textContent = 'Please enter a valid email address';
  }
  
  if (password.value.trim() === '') {
    passwordError.textContent = 'Password is required';
  }
  
  if (confirmPassword.value.trim() === '') {
    confirmPasswordError.textContent = 'Confirm password is required';
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
  }
  
  // If all fields are valid, submit the form
  if (!nameError.textContent && !emailError.textContent && !passwordError.textContent && !confirmPasswordError.textContent) {
    form.submit();
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

