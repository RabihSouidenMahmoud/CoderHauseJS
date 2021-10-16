// se crea a persona
class persona {
    constructor(nombre, apellido, edad, genero) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
    }

}
// se escribe los llamados para pantalla
let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let edad = parseInt(prompt("ingrese su edad "));
let genero = prompt("ingrese su genero");

// funciona de mostrar la info
function bienvedido() {
    alert("bienvedido " + nombre + " " + apellido + " " + " tu edad es :" + " " + edad + " " + " su genero es : " + " " + genero)
}
// se crea producto
let producto = ['zapato , camisa , pantalones , gorras '];

function crear (){
    const item = prompt("ingrese el producto que quiere crear");
    producto.push(item.toLocaleUpperCase())
}
console.log(producto)
    