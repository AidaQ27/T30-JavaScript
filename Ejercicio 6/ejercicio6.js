var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 
'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


let numDNI = prompt("Introduce tu numero de DNI: ");
let letraDNI = prompt("Introduce la letra del DNI: ");
let letraEncontrada = letras[numDNI % 23];

function comprobarLetra(letraEncontrada) {
    if (letraDNI === letraEncontrada) {
        window.alert("Correcto");
    }else{
        window.alert("La letra indicada no es correcta");

    }
}

if (numDNI < 0 || numDNI > 99999999) {
    window.alert("El numero introducido no es correcto");
}else {
   comprobarLetra(letraEncontrada);

}