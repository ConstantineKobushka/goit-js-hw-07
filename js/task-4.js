const loginForm = document.querySelector('.login-form');

function submitLoginFormHandler(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  let loginFormData = {};
  if (email !== '' && password !== '') {
    loginFormData = {
      email,
      password,
    };
    console.log(loginFormData);
  } else {
    alert('All form fields must be filled in');
  }
  form.reset();
}

loginForm.addEventListener('submit', submitLoginFormHandler);
