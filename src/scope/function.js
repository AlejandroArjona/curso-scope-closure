function greeting() {
    let userName = 'Ana'; // Tendremos acceso a esta vbariable solo dentro de esta funcion
    console.log(userName);

    if (userName === 'Ana') {
        console.log('Hello ' + userName);
    }
}

greeting();
console.log(userName); // Fuera de la funcion no tenemos acceso a la variable UserName