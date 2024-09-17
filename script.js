let numeros = [1, 3, 5];
console.log(numeros.length); 

numeros.push(20); 
console.log(numeros);

numeros.pop(); 
console.log(numeros);

// REDUCE

let suma = numeros.reduce((suma, valor) => {
    return suma + valor;
});
console.log(suma);

let mult = numeros.reduce((mult, valor) => {
    return mult * valor;
});
console.log(mult);

// FOR EACH
let sumaArreglo = 0;
numeros.forEach((numero) => {
    sumaArreglo += numero;
});
console.log(sumaArreglo);

// FILTER
let filtro = numeros.filter(numero => {
    return numero < 5;
});
console.log(filtro);

// MAPEO
let mapeo = numeros.map(valor => {
    return "$" + valor * 20;
});
console.log(mapeo);

let datos = ["Juan", true, 20, 10.56];
console.log(datos);

datos.push("Nuevo"); 
console.log(datos);

datos.pop(); 
console.log(datos);

let arreglo = [];
arreglo[0] = 10;
arreglo[1] = "Pedro";
arreglo[2] = true;
console.log(arreglo);

arreglo.push("Otro"); 
console.log(arreglo);

arreglo.pop(); 
console.log(arreglo);

// FOR

for (let i = 0; i < datos.length; i++) {
    console.log(datos[i]);
}
