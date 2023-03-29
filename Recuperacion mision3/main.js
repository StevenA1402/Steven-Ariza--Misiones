const login = document.getElementById("login");
const email = document.getElementById("email");
const usuario = document.getElementById("usuario");
const emailCambio = document.getElementById("emailCambio");
const userCambio = document.getElementById("userCambio");



const array = [];

// function setLocal(event){
//     localStorage.setItem('id',  event.target.id)
// }

class Persona {
  constructor(email, usuario) {
    this.email = email;
    this.usuario = usuario;
  }
}

// login.addEventListener('click',()=>{
//     // if(email.value != '' && usuario.value != ''){
//     //     const nuevoUsuario = new Persona(email.value,usuario.value)
//     //     array.push(nuevoUsuario)
//     //     console.log(nuevoUsuario)
//     //     localStorage.setItem("productos", JSON.stringify(array));

//     //     email.value=''
//     //     usuario .value=''
//     // }else{
//     //     alert("Faltan Campos")
//     // }

// })

const main = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  login.addEventListener ('click', () => {
    for (let index = 0; index < data.length; index++) {
        const emailData = data[index].email;
        const usuarioData = data[index].username;
        console.log(emailData);
        console.log(usuarioData);
        if(emailData == email.value && usuarioData == usuario.value){
            location.href='inicio.html'
        }else if(emailData != email.value ){
            email.value = ``
            emailCambio.innerHTML = `<h2>Email incorrecto, Por favor ingrese nuevamente</h2>`
        }else if(usuarioData != usuario.value){
            userCambio.innerHTML = `<h2>Usuario incorrecto, Por favor ingrese nuevamente</h2>`
           
        }
      }
  })    
};

main();
