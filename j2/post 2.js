// PETICION DE POST PARA EL LOGIN
const loginForm = document.getElementById('form-login');

loginForm.addEventListener('submit', async (event) => {
  // Previene que la página se recargue por defecto
  event.preventDefault();

  const username = loginForm.username.value;
  const password = loginForm.password.value;

  try {
    const response = await fetch('/localhost:5500', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    console.log('Respuesta del servidor:', data);
  } catch (error) {
    console.error('Error al enviar los datos:', error);
  }
});