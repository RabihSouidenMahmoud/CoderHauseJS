//Ejecutando funciones

document.getElementById("iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("registrarse").addEventListener("click", registrarse);
window.addEventListener("resize", tamañoPagina);
document.getElementById("formulario")

//Declarando variables
let formulario_ingreso = document.querySelector(".formulario-ingreso");
let formulario_registro = document.querySelector(".formulario-registro");
let contenedor_ingreso_registro = document.querySelector(".contenedor-ingreso-registro");
let caja_posterior_ingreso = document.querySelector(".caja-posterior-ingreso");
let caja_posterior_registro = document.querySelector(".caja-posterior-registro");
let nombre = document.getElementById("nombre")
let correo = document.getElementById("correo")
let usuario = document.getElementById("usuario")
let contraseña = document.getElementById("contraseña")
let registrar = document.getElementById("registro")

//FUNCIONES

function tamañoPagina() {

    if (window.innerWidth > 850) {
        caja_posterior_registro.style.display = "block";
        caja_posterior_ingreso.style.display = "block";
    } else {
        caja_posterior_registro.style.display = "block";
        caja_posterior_registro.style.opacity = "1";
        caja_posterior_ingreso.style.display = "none";
        formulario_ingreso.style.display = "block";
        contenedor_ingreso_registro.style.left = "0px";
        formulario_registro.style.display = "none";
    }
}

function iniciarSesion() {
    if (window.innerWidth > 850) {
        formulario_ingreso.style.display = "block";
        contenedor_ingreso_registro.style.left = "10px";
        formulario_registro.style.display = "none";
        caja_posterior_registro.style.opacity = "1";
        caja_posterior_ingreso.style.opacity = "0";
    } else {
        formulario_ingreso.style.display = "block";
        contenedor_ingreso_registro.style.left = "0px";
        formulario_registro.style.display = "none";
        caja_posterior_registro.style.display = "block";
        caja_posterior_ingreso.style.display = "none";
    }
}

function registrarse() {
    if (window.innerWidth > 850) {
        formulario_registro.style.display = "block";
        contenedor_ingreso_registro.style.left = "410px";
        formulario_ingreso.style.display = "none";
        caja_posterior_registro.style.opacity = "0";
        caja_posterior_ingreso.style.opacity = "1";
    } else {
        formulario_registro.style.display = "block";
        contenedor_ingreso_registro.style.left = "0px";
        formulario_ingreso.style.display = "none";
        caja_posterior_registro.style.display = "none";
        caja_posterior_ingreso.style.display = "block";
        caja_posterior_ingreso.style.opacity = "1";
    }
}