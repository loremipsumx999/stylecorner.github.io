document.getElementById('loginForm').addEventListener('submit', function(event){
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('http://localhost:3000/add-users',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({username,password}),
  })
  .then(response => response.text())
  .then(data => {
      alert(data);
      document.getElementById('loginForm').reset(); 
  })
  .catch(error => console.error('Hiba:', error));
});

document.getElementById('login').addEventListener('click', function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
  .then(response => response.text())
  .then(data => {
    if (data === 'success') {
      window.location.href = '../index.html';
    } else {
      alert('Helytelen felhasználónév/jelszó!');
    }
  })
  .catch(error => console.error('Error:', error));
});




function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}