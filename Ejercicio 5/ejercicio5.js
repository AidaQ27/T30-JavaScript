var num1 = 5;
var num2 = 8;

if(num1 <= num2) {
    console.log("numero "+ num1 + " no es mayor que numero " + num2);
}

if(num2 > 1){
    console.log(num2 + " es positivo");
}

if (num1 < 0 || num1 != 0) {
    console.log(num1 + " es negativo o distinto a cero");
}

if(++num1 < num2){
    console.log("incrementar en 1 unidad el valor de " + num1 +  " no lo hace mayor o igual que " + num2);
}