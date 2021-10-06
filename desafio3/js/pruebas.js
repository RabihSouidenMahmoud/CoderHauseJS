let ingreseNumero = parseInt(prompt("ingrese un numero"));

 
for(let i = 1 ; i<= 10 ; i++){
    let resultados = ingreseNumero * i;
    alert(ingreseNumero + " x" +" " + i + " =" + " " + resultados);
    console.log(ingreseNumero + " x" +" " + i + " =" + " " + resultados);
    if(i ==5){
        break;
    }
    if(i == 3){
        continue;
    }

}
for(let i = 1; i<=5 ; i++);{
let ingreseNombre = prompt("ingrese su nombre");
alert( "Turno " + 1 + " nombre " + ingreseNombre);
console.log(ingreseNombre);
}

let entrega = prompt("Escriba");
while(entrega != "ESC" ){
    alert("Ingreso :" + entrega);
    entrega = prompt("Intente de nuevo")
}
let valorNumerico = 0;
do{
    valorNumerico = prompt("ingrese un numero");
    console.log(valorNumerico);
}while (parseInt(valorNumerico));
