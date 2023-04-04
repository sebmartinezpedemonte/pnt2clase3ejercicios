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
Ejercicio 2: Sumar edades de los personajes
Utilizar el método reduce para sumar las edades de todos los personajes del array
creado en el Ejercicio 1. Mostrar el resultado en la consola.
    */
    const menores18Años = personajesSimpsons.filter(personaje => personaje.edad<18);
    //console.log(menores18Años);    
    const sumaEdades = menores18Años.reduce((suma, menores18Años)=> suma + menores18Años.edad,0);
    console.log(sumaEdades);