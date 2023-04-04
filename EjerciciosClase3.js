const personajesSimpsons = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucón" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" }
    ];
    /*
Ejercicio 3: Obtener los nombres de los personajes
Utilizar el método map y una función arrow para crear un nuevo array que contenga
solamente los nombres de los personajes del array del Ejercicio 1. Mostrar el nuevo
array en la consola.
    */
    const menores18Años = personajesSimpsons.filter(personaje => personaje.edad<18);
    //console.log(menores18Años);    
    //const sumaEdades = menores18Años.reduce((suma, menores18Años)=> suma + menores18Años.edad,0);
    //console.log(sumaEdades);

    const nombresPersonajesMenores = menores18Años.map(menores18Años => menores18Años.nombre);
    console.log(nombresPersonajesMenores);

