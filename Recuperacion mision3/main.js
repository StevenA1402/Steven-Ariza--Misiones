const login = document.getElementById("login");
const email = document.getElementById("email");
const usuario = document.getElementById("usuario");
const emailCambio = document.getElementById("emailCambio");
const userCambio = document.getElementById("userCambio");
const array = [];

class Persona {
  constructor(email, usuario) {
    this.email = email;
    this.usuario = usuario;
  }
}

const datos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  localStorage.setItem('data', JSON.stringify(data));
}
const main = () => {
  const data = JSON.parse(localStorage.getItem('data'));
  let usuarioCorrecto = false;
  let emailCorrecto = false;
  for (let index = 0; index < data.length; index++) {
    const emailData = data[index].email;
    const usuarioData = data[index].username;
    console.log(emailData);
    console.log(usuarioData);
    if (usuarioData == usuario.value) {
      usuarioCorrecto = true;
      if (emailData == email.value) {
        emailCorrecto = true;
        location.href = 'inicio.html'
        break;
      }
    }
  }
  if (!usuarioCorrecto) {
    usuario.value = '';
    userCambio.innerHTML = `<h2>Usuario incorrecto, Por favor ingrese nuevamente</h2>`
  }
  if (usuarioCorrecto && !emailCorrecto) {
    email.value = '';
    emailCambio.innerHTML = `<h2>Email incorrecto, Por favor ingrese nuevamente</h2>`
  }
};

login.addEventListener('click', async () => {
  await datos();
  main();
});
