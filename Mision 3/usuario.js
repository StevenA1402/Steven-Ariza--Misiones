
let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let area = document.getElementById('area')
let usuario = document.getElementById('usuario')
let edad = document.getElementById('edad')
let direccion = document.getElementById('direccion')
let email = document.getElementById('email')
let enviar = document.getElementById('enviar')
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



enviar.addEventListener("click" , () => {

    usuarios.forEach(e => {
        if(e == usuario.value){
            alert('Usuario repetido')
            return e
        }else{
            location.href = 'usuario.html'
            return e
  
        }
    })


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
        errores.push(persona)
        // location.href = 'usuario.html'

    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa datos en todos los campos',

          })  }

    setTimeout(function() {
        localStorage.setItem('formulario', JSON.stringify(personas));
      }, 100);
      
      

    localStorage.setItem('formulario', JSON.stringify(personas))
    personas.push(persona)
    console.log(personas);


})
    
