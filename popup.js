const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const message = document.getElementById("message");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === "success") {
      message.innerHTML = "Login successful!";
    } else {
      message.innerHTML = "Invalid username or password.";
    }
  })
  .catch(error => {
    console.error('Error:', error);
    message.innerHTML = "Error: Could not connect to backend server.";
  });
});

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const newUsername = document.getElementById("new-username").value;
  const newPassword = document.getElementById("new-password").value;
  
  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: newUsername,
      password: newPassword
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === "success") {
      message.innerHTML = "Sign up successful!";
    } else {
      message.innerHTML = "Username already taken.";
    }
  })
  .catch(error => {
    console.error('Error:', error);
    message.innerHTML = "Error: Could not connect to backend server.";
  });
});