
let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let area = document.getElementById('area')
let usuario = document.getElementById('usuario')
let edad = document.getElementById('edad')
let direccion = document.getElementById('direccion')
let email = document.getElementById('email')
let enviar = document.getElementById('enviar')
let flecha = document.getElementById('flecha')
let formulario = document.getElementById('formulario')
let personas = []
let errores = []
let usuarios = []

class Formulario {
    nombre;
    apellido;
    area;
    usuario;
    edad;
    direccion;
    email;

    constructor(nombre,apellido,area,usuario,edad,direccion,email,enviar){
        this.nombre = nombre;
        this.apellido = apellido;
        this.area = area;
        this.usuario = usuario;
        this.edad = edad;
        this.direccion = direccion;
        this.email = email 
    
    }
}

flecha.addEventListener('click', () => {
    location.href = 'index.html'
})


enviar.addEventListener("click" , () => {




    const persona = new Formulario(
        nombre.value,
        apellido.value,
        area.value,
        usuario.value,
        edad.value,
        direccion.value,
        email.value
    );
    if(nombre.value != "", apellido.value != "", area.value != "", usuario.value != "", edad.value != "", direccion.value != "", direccion.value != "", email.value != ""){
        var formulario = JSON.parse(localStorage.getItem('formulario')) || [];
        formulario.push(persona)
        location.href = 'index.html'

    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa datos en todos los campos',

          })  }

    setTimeout(function() {
        localStorage.setItem('formulario', JSON.stringify(personas));
      }, 100);
      
      
    localStorage.setItem('formulario', JSON.stringify(formulario))

    usuarios.push(persona)

})
    
