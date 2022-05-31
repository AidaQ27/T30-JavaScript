var frase = prompt("Introduce la frase que quieras: ");

//Pasamos toda la frase a minusculas
frase = frase.toLowerCase();
//Se quitan todos los espacios de la frase
frase = frase.replaceAll(" ", "");

//Invertimos el String
var reves = frase.split(""). reverse().join("");


//Funcion para comprobar si es palindromo o no
function palindromo(frase) {
    if(frase == reves) {
        window.alert("Es un palindromo");
    }else {
        window.alert("No es un palindromo");
    }
}

palindromo(frase);