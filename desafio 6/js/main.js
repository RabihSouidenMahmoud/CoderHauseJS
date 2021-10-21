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
    if (validar == "TERMINAR") {
        break;
    } else {
        escribirNombre = validar;
        let escribirPrecio = prompt('Ingresa el valor del producto');
        let escribirCantidad = prompt('Ingrese la cantidad solicitada ');
        lista.push(new Producto(escribirNombre, escribirPrecio, escribirCantidad));
    }
}
while (validar != "TERMINAR");


console.log(lista);

for (let producto of lista) {
    document.write("<h2> El producto que ingreso es :" + producto.nombre + "</h2>");
    document.write("<h2> La cantidad de productos agregados es : " + producto.cantidad + "</h2>");
    document.write("<h2> El precio del o de los productos es :" + producto.total() + "</h2>");

    console.log(producto.nombre);
    console.log(producto.cantidad);
    console.log(producto.total());

}
let resultadoFinal
let ordenar =(lista) =>{
    lista.sort(function(a,b){return b-a});

}