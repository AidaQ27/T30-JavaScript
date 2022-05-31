let numero = prompt("Inttroducce un numero: ");
parImpar(numero);

function parImpar(numero){
    if(numero % 2 == 0) {
        window.alert("Es Par");
    } else {
        console.log("Es Impar");
    }
}