for(let i = 0; i < 5; i++){
    console.log(i)
}

console.log("El ciclo terminó")

let limite = 100
for(let i = 0; i <= limite; i++){
    if(i % 2 === 0){
        console.log(`El numero ${i} es par`);
    } else {
        console.log(`El numero ${i} es impar`);
        
    }
}

let mensaje = "Hola Mundo";
let mensajeInvertido = "";

for(let i = mensaje.length - 1; i >= 0; i--){
    mensajeInvertido += mensaje.charAt(i);
}

console.log(mensaje);
console.log(mensajeInvertido);

let index = 0

while (index <= 10){
    console.log(index);
    index++;
}

let numeroAleatorio = Math.floor(Math.random()*1)

while (numeroAleatorio !== 50){
    console.log(numeroAleatorio);
    numeroAleatorio = Math.floor(Math.random()*100)
}

let numeroAleatorio2 = 50

do{
    console.log(numeroAleatorio2);
    numeroAleatorio2 = Math.floor(Math.random()*100)
}while(numeroAleatorio2 !== 10)

console.log(numeroAleatorio2);




let numero2 = prompt("Escribeme un numero");

console.log(numero2);

let numero3 = prompt("Dame otro numero");

console.log(numero3)
