/*2. Strings
    a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
    texto en mayúscula (utilizar toUpperCase).

    b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
    string con los primeros 5 caracteres guardando el resultado en una nueva
    variable (utilizar substring).

    c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
    string con los últimos 3 caracteres guardando el resultado en una nueva variable
    (utilizar substring).

    d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
    string con la primera letra en mayúscula y las demás en minúscula. Guardar el
    resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
    el operador +).

    e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
    blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
    variable (utilizar indexOf).

    f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
    algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
    generar un nuevo string que tenga la primera letra de ambas palabras en
    mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
    toUpperCase, toLowerCase y el operador +).*/
//a
    var string1 = 'hola soy yue';
    var mayuscula = string1.toUpperCase();
    console.log(mayuscula);

//b
    var string2 = 'holasoyyue';
    var cinco = string2.substring(0,5);
    console.log(cinco);

//c
    var string3 = 'holasoyyue';
    var tres = string3.substring(7,10);
    console.log(tres);

//d
    var string4 = 'holasoyyue';
    var primera = string4.substring(0,1).toUpperCase();
    var resto = string4.substring(1,10).toLowerCase();
    var mayuscula = primera + resto;

//e
    var string5 = 'hola soy yue';
    var espacio = string5.indexOf(' ');
    console.log(espacio);

//f
    var string6 = 'resulTado de aprendizaje';
    var espacio = string6.indexOf(' ');

    // Procesar la primera palabra
    var primera = string6.substring(0, 1).toUpperCase();
    var resto = string6.substring(1, espacio).toLowerCase();
    var palabra1 = primera + resto;

    // Procesar la segunda palabra (que es "de")
    var espacio2 = espacio + 1;
    var palabra2 = string6.substring(espacio2, espacio2 + 2).toLowerCase();

    // Procesar la tercera palabra (que es "aprendizaje")
    var espacio3 = string6.indexOf(' ', espacio2 + 1);
    var primera3 = string6.substring(espacio3 + 1, espacio3 + 2).toUpperCase();
    var resto3 = string6.substring(espacio3 + 2).toLowerCase();
    var palabra3 = primera3 + resto3;

    // Concatenar las palabras con un espacio entre ellas
    var resultado = palabra1 + ' ' + palabra2 + ' ' + palabra3;

    console.log(resultado);


