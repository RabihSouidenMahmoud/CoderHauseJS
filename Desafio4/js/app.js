function productos() {
    let cantidaDecamisa = prompt("Cuantas camisas quieres ?");
    let cantidadDezapato =prompt ("Cuantos zapatos quieres ?");
    alert("camisas pedidas : " + " "+ " "+ cantidaDecamisa + " " +"Zapatos pedidos :" +" " +" " + cantidadDezapato );
}
productos();
function suma (){
    let cantidad = camisas+ zapatos ;
    return cantidad;
}


let camisas = 150;
let zapatos = 300;
let compra = suma(camisas + zapatos );
alert("Su compra es de :" + " " + " " + compra);

const precioIva =parseInt (compra /0.89) ;
alert(precioIva);


function cuotas (){
    let tiempo = prompt("Cuotas a pagar en 3 , 6 y 12 meses eliga una :");
    if (tiempo == 3){
        alert ("cuotas a pagar de :" + " " + precioIva / 3);
    }
    else if (tiempo == 6 ){
        alert ("cuotas a pagar de : " + " " + precioIva/6);
    }
    else if ( tiempo == 12 ){
        alert (" cuotas a pagar de : " + " " + precioIva/12);
    }
}



