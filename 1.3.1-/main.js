const Calificacion = 78;

let Nota = null;

if(Calificacion >= 90){
    Nota = "Excelente";
}else if(Calificacion >= 75){
    Nota = "Bien";
}else if(Calificacion >= 60){
    Nota = "Suficiente";
}else{
    Nota = "No aprueba";
}

console.log(`El estudiante aprueba con ${Nota}`)
