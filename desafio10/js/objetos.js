class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
    }
    iva() {
        return this.precio * 1.19
    }
    total() {
        return this.iva() * this.cantidad
    }
}

let lista = [];



// manejo con html
const formAgregar = document.getElementById('agrego');
const registroNombre = document.getElementById('nombre-producto');
const registrocantidad = document.getElementById('catidad-producto');
const registroprecio = document.getElementById('precio-producto');
const listaProductos = document.getElementById('nombre-del-producto');


// Escuchar el evento submit del formulario
formAgregar.addEventListener('click', () => {
    console.log(registroNombre.value)
    console.log(registrocantidad.value)
    console.log(registroprecio.value)

    lista.push(new Producto(registroNombre.value, registrocantidad.value, registroprecio.value))

    registroNombre.value = ""
    registrocantidad.value = ""
    registroprecio.value = ""

    console.log(lista);

    const li = document.createElement("li");
    li.innerHTML = `El producto que ingreso es: ${lista[0].nombre}`;
    document.listaProductos.appendChild(li);

})

for (let producto of lista) {
    const li = document.createElement("li");
    li.innerHTML = `El producto que ingreso es: ${producto.nombre}`;
    document.body.appendChild(li);
}
$(document).ready(function () {
   $('#titulo').addClass('text-danger');
   $('#fondo').css('color','black');
   $(document).ready(function(){
       alert('bienvenido a la pagina')
   })
   $('#agrego').click(function(){
       alert('gracias por agregar sus productos')
   })
 
});



// document.write(`<ul> El producto que ingreso es: ${producto.nombre}</ul>`)