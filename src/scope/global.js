// Variables

var a; // Declaramos
var b = 'b';// declaramos / asignamos
b = 'bb';// reasignacion
var a = 'aa';// redeclaracion

// Global Scope

var fruit = 'Apple'; // global

function bestFruit () {
    console.log(fruit);
}

bestFruit();

function countries () {
    country = 'Mexico';//Al asignar una variable sin declararla dentro de una funcion, pasara a ser una variable global 
    console.log(country);
}

countries();
console.log(country);