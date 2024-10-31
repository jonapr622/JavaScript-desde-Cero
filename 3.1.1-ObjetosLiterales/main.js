const persona = {
    nombre: "Jonathan",
    apellido: "Polin",
    edad: 17,
    MayorDeEdad: false,
    pasaTiempos: ["deporte", "dibujo", "videojuegos"],
    mascota: {
        nombre: "Hercules",
        especie: "Perro",
    },

    saludo: function () {
        return `Hola me llamo ${this.nombre} ${this.apellido}`
    }
}

console.log(persona.saludo());

console.log(persona.edad);
console.log(persona["edad"]);

console.log(persona.mascota.nombre);

console.log(persona.pasaTiempos[0]);

const{nombre, apellido, edad} = persona;

console.log(nombre);


const artistas = [
    {
        nombre: "Michael Jackson",
        albums: ["Music and Me", "Thriller", "Off the Wall"],
        genero: "pop",
    },
    {
        nombre:"Trueno",
        albums:["Bien o Mal", "Atrevido", "Un paso"],
        genero:"rap",
    },
    {
        nombre:"Eminen",
        albums:["The Slim Shady LP", "The Eminem Show", "The Death of Slim Shady"],
        genero:"rap",
    }
]

