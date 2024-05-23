console.log('Hello World!');
var Nombre = 'Juan';
var nacimiento = 1990;
var edad = 34;
var soltero = true;
var Trabajo = null;

var resultado = 10 === 10 //comparar tipo de variable y valor si usa 3=, si usa 2= solo compara valor   
var resultado2 = 10 !== 10 //comparar tipo de variable y valor si usa 3=, si usa 2= solo compara valor

var resultado3 = edad;//si uso resultado3 = ++edad me incrementa en 1 y cambia el valor de la variable
var actualidad = nacimiento +=edad; // no hay q  poner var porque ya esta declarada
console.log(Nombre);
console.log(edad);
console.log(soltero);
console.log(Trabajo);
console.log(resultado);
console.log(resultado2);
console.log(++resultado3);//incrementa en 1 pero no cambia el valor de la variable
console.log(actualidad);

console.log('tipo de nombre es :'+typeof Nombre);
console.log('tipo de edad es :'+typeof edad);
console.log('tipo de soltero es :'+typeof soltero);
console.log('tipo de Trabajo es :'+typeof Trabajo);
console.log('tipo de resultado es :'+typeof resultado);

//sentencias if else
if (soltero ){
        console.log(Nombre + ' esta soltero');
}else{
        console.log(Nombre + ' esta casado');
}

edad < 18 ? console.log(Nombre + ' es un niño') : console.log(Nombre + ' es un adulto');//operador ternario
//usa 2 signos ? adelante de ? pone la condicion y atras de ? seria de q en caso sale true y : para indicar el else

//sentencias switch
var dia =1;

switch(dia){
        case 1:
                console.log('Hoy es lunes');
                break;
        case 2:
                console.log('Hoy es martes');
                break;
        case 3:
                console.log('Hoy es miercoles');
                break;
        case 4:
                console.log('Hoy es jueves');
                break;
        case 5:
                console.log('Hoy es viernes');
                break;
        case 6:
                console.log('Hoy es sabado');
                break;
        case 7:
                console.log('Hoy es domingo');
                break;
        case 'lunes'://tambien se puede poner un string
                console.log('Hoy es lunes');
                break;
        default:
                console.log('No es un dia valido');
}

//sentencias bucle
for (var i = 0; i <= 10; i++) {
        console.log('indice',i);
}

while (i == 10) {
        i--;
        console.log('indice',i);    
}

do {
        i--;
        console.log('indice',i);
} while (i > 8);

//arrays
var frutas = ['manzana','banana','palta'];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas.length);//cantidad de elementos, si pongo .length-1 me da el ultimo elemento
console.log(frutas[frutas.length-1]);//ultimo elemento
frutas.push('naranja');//agregar al final
console.log(frutas);
frutas.unshift('frutilla');//agregar al inicio
console.log(frutas);
for (var i = 0; i < frutas.length; i++) {//recorrer array,length es la cantidad de elementos
        var fruta = frutas[i];
        console.log(fruta);
}

//metodos de array
frutas.pop();//eliminar el ultimo
console.log(frutas);
frutas.shift();//eliminar el primero
console.log(frutas);
frutas.splice(1,1);//eliminar el elemento en la posicion 1
console.log(frutas);
frutas.reverse();//invertir el orden
console.log(frutas);
frutas.sort();//ordenar alfabeticamente
console.log(frutas);
frutas.unshift('banana');//agregar al inicio
console.log(frutas);
frutas.push('banana');//agregar al final

var copioFrutas =frutas.map(function(fruta){//crea un nuevo array con los resultados de la funcion
        return fruta;
});
console.log(copioFrutas);


var existe = frutas.some(function(fruta){//devuelve true si al menos un elemento cumple con la condicion        
        return fruta === 'banana';//recorre el array y compara si hay banana
});
console.log(existe);


//clases
class Persona{
        constructor(nombre,apellido,edad,soltero){
                this.nombre=nombre;
                this.apellido=apellido;
                this.edad=edad;
                this.soltero=soltero;
        }
        saludar(){
                console.log('Hola soy '+this.nombre+' '+this.apellido);
        }
}

var persona1 = new Persona('Maria', 'Gomez', 28, false);
persona1.saludar();



//objetos sin clase
var persona2={
        nombre:'Juan',
        apellido:'Perez',
        edad:34,
        soltero:true,
        direccion:{
                calle:'Av. Siempre viva',
                numero:123,
                ciudad:'Springfield'
        },
        frutasFavoritas:['manzana','banana','palta']
}

console.log(persona2['frutasFavoritas']);//muestra todas las frutas
console.log(persona2.frutasFavoritas[1]);//solo muestra banana

//funciones
function suma(a,b){
        return a+b;
}
function resta(a,b){
        return a-b;
}
function multiplicacion(a,b){
        return a*b;
}
function division(a,b){
        return a/b;
}
console.log(suma(5,10));