document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('email');
  
    const nameError = document.getElementById('nameError');
    const passwordError = document.getElementById('passwordError');
    const emailError = document.getElementById('emailError');
  
    function validateName() {
      const nameValue = nameInput.value.trim();
      if (nameValue === '') {
        nameError.style.display = 'block';
        nameInput.classList.add('invalid');
        return false;
      } else {
        nameError.style.display = 'none';
        nameInput.classList.remove('invalid');
        return true;
      }
    }
  
    function validatePassword() {
      const passwordValue = passwordInput.value.trim();
      if (passwordValue.length < 8) {
        passwordError.style.display = 'block';
        passwordInput.classList.add('invalid');
        return false;
      } else {
        passwordError.style.display = 'none';
        passwordInput.classList.remove('invalid');
        return true;
      }
    }
  
    function validateEmail() {
      const emailValue = emailInput.value.trim();
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(emailValue)) {
        emailError.style.display = 'block';
        emailInput.classList.add('invalid');
        return false;
      } else {
        emailError.style.display = 'none';
        emailInput.classList.remove('invalid');
        return true;
      }
    }
  
    nameInput.addEventListener('input', validateName);
    passwordInput.addEventListener('input', validatePassword);
    emailInput.addEventListener('input', validateEmail);
  
    form.addEventListener('submit', function(event) {
      const isNameValid = validateName();
      const isPasswordValid = validatePassword();
      const isEmailValid = validateEmail();
  
      if (!isNameValid || !isPasswordValid || !isEmailValid) {
        event.preventDefault();
      }
    });
  });  