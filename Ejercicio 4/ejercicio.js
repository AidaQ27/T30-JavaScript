var valores = [true, 5, false, "hola", "adios", 2];


//1.Determina cual de los elementos de texto es mayor
let txtMayor = "";                 // Crea la variable 
valores.forEach(x =>{              //Recorremos el array valores
    if(typeof x === 'string'){     // si el valor del array es un string
        if(x.length >= txtMayor.length) // se compran los dos, y se guarda el mayor
        txtMayor = x;
    }
});
console.log(txtMayor); //Se muestra el mayor


//2. Utilizando exclusivamente los dos valores booleanos del array, determinar los
//operadores necesarios pra obtener un resultado true y otro resultado false.

valores.forEach(y =>{               //Recorremos el array de valores
    if(typeof y === 'boolean'){     //si es de tipo boolean
        if(y  == true)              // si es de tipo true 
            console.log(true)       //Imprime true
        if(y == false)              //Si es de tipo false
            console.log(false);    //Imprime false
    }
});


//3. Determinar el resultado de las 5 operaciones matematicas 
//realizadas con los 2 elementos numericos.

var num1 = valores[1];
var num2 = valores[5];

var suma = num1 + num2;
console.log(suma);

var resta = num1 - num2;
console.log(resta);

var multi = num1 * num2;
console.log(multi);

var division = num1 / num2;
console.log(division);

var resto = num1 % num2;
console.log(resto);
