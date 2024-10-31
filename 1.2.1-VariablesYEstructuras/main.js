let nombre = "Jonathan";
console.log(nombre);

nombre = "Yahir";
console.log(nombre);

const pi = 3.14159;
console.log(pi);

const apellido = "Polin";
console.log(apellido);

console.log(3%2);

let numero = 0;

numero += 10;

console.log(numero);
numero -= 10;
console.log(numero);

let numero2 = 0;

numero2 = 10;
numero2 = "no es un numero";

console.log(numero2)

let caracter = "H";
caracter += "o";
caracter += "l";
caracter += "a";
console.log(caracter);

console.log("igualdad");
console.log(5 == "5");
console.log(5 === "5");
console.log(5 === 5);

console.log("desigualdad");
console.log(5 != "5");
console.log(5 !== 10);

console.log("Comparación");
console.log(5 > 2);
console.log(5 > 6);
console.log(5 < 6);
console.log(5 <= 5);
console.log(5 >= 10);

console.log("Operadores Logicos");
console.log(true && false);
console.log(5 > 2 && 7 < 10);
console.log(true || false);
console.log(5 < 2 || 7 < 10);
console.log(!true);
console.log(!5 < 2);

if(5 > 2){
    console.log("Esto es verdadero");
} else {
    console.log("Esto es falso");
}

if(5 < 2){
    console.log("Esto es verdadero");
} else {
    console.log("Esto es falso");
}



const puntajeCliente = 300;

if(puntajeCliente >= 3000){
    console.log(`El cliente tiene 50% de descuento`);
}else if(puntajeCliente >= 1000){
    console.log(`El cliente tiene 25% de descuento`);
}else if(puntajeCliente >= 500){
    console.log(`El cliente tiene 5% de descuento`);
}else{
    console.log(`El cliente tiene 0% de descuento`);
}


let porcentaje = null;

if(puntajeCliente >= 3000){
    porcentaje = 50;
}else if(puntajeCliente >= 1000){
    porcentaje = 25;
}else if(puntajeCliente >= 500){
    porcentaje = 5;
}else{
    porcentaje = 0;
}

console.log(`El cliente tiene ${porcentaje}% de descuento`)




const edad = 18

if(edad >= 18){
    edadUsuario = "Es mayor de edad";
}else{
    edadUsuario = "Es menor de edad";
}

console.log(edadUsuario)










let randomNumber = Math.random()*1000;
randomNumber = Math.ceil(randomNumber);

console.log(randomNumber)
if(randomNumber >= 95){
    console.log(`El numero aleatorio ${randomNumber} es mayor o igual a 95`);
}else{
    console.log(`El numero aleatorio ${randomNumber} es menor a 95`);
}