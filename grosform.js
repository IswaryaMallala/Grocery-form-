document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form from submitting automatically

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value.trim();

  let errors = [];

  // Validate Name
  if (name === '') {
    errors.push('Name is required.');
  } else if (name.length < 3) {
    errors.push('Name must be at least 3 characters long.');
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    errors.push('Email is required.');
  } else if (!emailRegex.test(email)) {
    errors.push('Email is not valid.');
  }

  // Validate Password
  if (password === '') {
    errors.push('Password is required.');
  } else if (password.length < 6) {
    errors.push('Password must be at least 6 characters long.');
  }

  // Display Errors or Submit Form
  if (errors.length > 0) {
    alert(errors.join('\n'));
  } else {
    alert('Form submitted successfully!');
    // Perform further actions, like sending data to the server
    // document.getElementById('myForm').submit();
  }
});
