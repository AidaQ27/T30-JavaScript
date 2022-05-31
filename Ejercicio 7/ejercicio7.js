let numero = prompt("Introduce un numero: ");
let resultado = 1;

//Comprobamos si el numero introducido es positivo
if(numero <= 0){
    window.alert("El numero introducido tiene que ser positivo");
}else {
    window.alert("El numero introducido es correcto");
}

//Calculamos a través de un for
let concatenado = "";
for (let i = numero; i > 1; i--) {
    resultado = resultado * i; 
    concatenado += (i + " x ");
    
}
concatenado+=1; //Para finalizar la cadena de texto
window.alert(concatenado);
window.alert("El resultado es " + resultado);


