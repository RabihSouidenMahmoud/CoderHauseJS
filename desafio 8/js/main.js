class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
    }
    iva() {
        return this.precio *1.19
    }
    total(){
        return this.iva()* this.cantidad
}
}

let lista = [];
do {
    var validar = prompt('ingrese el producto o terminar para dejar de agregar ');
    validar = validar.toUpperCase();
    if (validar != "TERMINAR") {

        escribirNombre = validar;
    
        let escribirPrecio = prompt('Ingresa el valor del producto');
    
        let escribirCantidad = prompt('Ingrese la cantidad solicitada ');
    
        lista.push(new Producto(escribirNombre, escribirPrecio, escribirCantidad));
    
      }
}
while (validar != "TERMINAR");


console.log(lista);

for (let producto of lista) {
    document.write("<ul> El producto que ingreso es :" + producto.nombre + "</ul>");
    document.write("<li> La cantidad de productos agregados es : " + producto.cantidad + "</li>");
    document.write("<li> El precio del o de los productos es :" + producto.total() + "</li>");

    console.log(producto.nombre);
    console.log(producto.cantidad);
    console.log(producto.total());

}
let resultadoFinal
let ordenar =(lista) =>{
    lista.sort(function(a,b){return b-a});
    console.log(resultadoFinal)

}
// manejo con html
const formRegistros = document.getElementById('registros');
const registroNombre = document.getElementById('nombre-registro');
const registrocantidad = document.getElementById('catidad-producto');
const registroprecio = document.getElementById('precio-producto');
// submit




// Escuchar el evento submit del formulario
formRegistros.addEventListener('submit', (event) => {
     event.preventDefault()
     console.log(event)
     console.log("producto agregado")

})