let frase = prompt("Introduce la frase que quieras: ");
contadorTexto(frase);

function contadorTexto(text){
    let mayuscula = false;
    let numMayus = 0;
    let minuscula = false;
    let numMinus = 0;
    let ambos = false;

    for (let index = 0; index < text.length; index++) {
        const element = text.charAt(index);

        if(element == element.toUpperCase()){
            mayuscula = true;
            numMayus += 1;
        }if(element == element.toLowerCase()){
            minuscula = true;
            numMinus += 1;
        }if(element == element.toUpperCase() && element.toLowerCase()) {
            ambos = true;
        }

    }

    if(mayuscula){
        window.alert("La frase contiene solo mayusculas");
    }
    if(minuscula){
        window.alert("La frase contiene solo minisculas");
    }
    if(ambos){
        window.alert("La frase contiene " + numMayus + " mayusculas " + numMinus + " minusculas ");
    }
}