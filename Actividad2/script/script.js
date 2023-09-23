function Ejercicio1() {
    let num = parseInt(prompt("Introduzca un número: "));
    if ((num % 2) == 0){
        alert("El numero introducido " + num + " es PAR.");
    }
    else{
        alert("El numero introducido " + num + " es IMPAR.");
    }
}

function Ejercicio2() {
    let lugarVivienda = prompt("Introduce el lugar donde vives: ");
    let edad = parseInt(prompt("Introduce tu edad: "));
    if (lugarVivienda === "Alicante" && edad >= 18 && edad <= 35){
        alert("Puedes acceder al carnet de empresarios emprendendores.");
    }
    else{
        alert("No puedes acceder al carnet de empresarios emprendedores.");
    }
}

function Ejercicio3() {
    let numHermanos = parseInt(prompt("Introduce el numero de hermanos que tienes: "));
    let cantidad = parseInt(prompt("Introduce la cantidad: "));
    let res = 0.00;
    if (numHermanos >= 3){
        res = cantidad * 0.15;
        alert("Se le ha hecho un descuento de 15% lo cual se le ha descontado hasta " + res);
    }
    else {
        res = cantidad * 0.05;
        alert("Se le ha hecho un descuento de un 5% lo cual se ha descontado hasta " + res);
    }
}

function Ejercicio4() {
    let month = parseInt(prompt("Introduce el numero de un mes (1 - 12): "));
    if (month >= 1 && month <= 12){
        if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
            alert("El mes " + month + " tiene 31 días.");
        }
        else if (month === 2){
            alert("El mes " + month + " tiene 28 días.");
        }
        else {
            alert("El mes " + month + " tiene 30 días.");
        }
    }
}

function BuscarEnLaTabla3(num) {
    let EsMultiplo = false;
    for(let i = 0; i <= 10; i++){
        if((3 * i) === num){
            EsMultiplo = true;
        }
    }
    return EsMultiplo;
}

function BuscarEnLaTabla5(num){
    let EsMultiplo = false;
    for(let i = 0; i <= 10; i++) {
        if((5 * i) === num) {
            EsMultiplo = true;
        }
    }
    return EsMultiplo;
}

function ComprobarNumeroPar(num) {
    let esPar;
    if ((num % 2) === 0) {
        esPar = true;
    }
    else {
        esPar = false;
    }
    return esPar;
}

function Ejercicio5() {
    let num = parseInt(prompt("Introduce un número: "));

    if (ComprobarNumeroPar(num) === true){
        if (BuscarEnLaTabla5(num) === true && BuscarEnLaTabla3(num) === true){
            alert("El número " + num + " es par, es multiplo de 3 y es multiplo de 5.");
        }
        else if (BuscarEnLaTabla5(num) === false && BuscarEnLaTabla3(num) === true){
            alert("El número " + num + " es par y es multiplo de 3.");
        }
        else if (BuscarEnLaTabla5(num) === false && BuscarEnLaTabla3(num) === false){
            alert("El número")
            
        }
        else {
            alert("El numero " + num + " es par y es multiplo de 5.");
        }
    }
    else{
        if (BuscarEnLaTabla5(num) === true && BuscarEnLaTabla3(num) === true){
            alert("El número " + num + " es impar, es multiplo de 3 y es multiplo de 5.");
        }
        else if (BuscarEnLaTabla5(num) === false && BuscarEnLaTabla3(num) === true){
            alert("El número " + num + " es impar y es multiplo de 3.");
        }
        else {
            alert("El numero " + num + " es impar y es multiplo de 5.");
        }

    }

}

function Ejercicio6(){
    let num1 = parseInt(prompt("Número1: "));
    let num2 = parseInt(prompt("Número2: "));
    let operator = prompt("Operador (+, -, *, /): ");
    let res = 0;

    switch(operator){
        case "+":
            res = num1 + num2;
            alert("El resultado de " + num1 + " + " + num2 + " es " + res);
            break;
        
        case "-":
            res = num1 - num2;
            alert("El resultado de " + num1 + " - " + num2 + " es " + res);
            break;
        
        case "*":
            res = num1 * num2;
            alert("El resultado de " + num1 + " * " + num2 + " es " + res);
            break;

        case "/":
            res = num1 / num2;
            alert("El resultado de " + num1 + " / " + num2 + " es " + res);
            break;
        
        default:
            alert("Operador no permitido.");
    }
}
function Ejercicio7(){
    let num = parseInt(prompt("Introduce un número: "));
    let res = 0 + num;

    while (num > 0){
        num = parseInt(prompt("Introduce un número: "));
        res = res + num;
    }
    alert("El resultado de la operacion es: " + res);
}
function Ejercicio8(){
    let res = "Los números pares entre 25 y 1 son: ";
    for (let i = 25; i > 0; i--){
        if((i % 2) === 0){
            res = res + String(i) + " ";
        }
    }
    alert(res);
}
function Ejercicio9(){
    let num = parseInt(prompt("Introduce un número: "))
    let res = 0;
    let text = "Factorial de " + num + ": \n\n";
    while(num >= 1 ){
        if (res == 0){
            res = num * (num - 1);
            num = num - 2;
        }
        else {
            res = res * num;
            num--;
        }
    }
    alert(text + String(res));
}


function Ejercicio10(){
    let num1 = parseInt(prompt("Numero a adivinar: "));
    let num2 = 0;

    while (num2 != num1){
        num2 = parseInt(prompt("Numero a introducir: "));
        if (num2 > num1) {
            alert("El numero introducido es MAYOR que el numero a adivinar.");
        }
        else if (num2 < num1) {
            alert("El número introducido es MENOR que el numero a adivinar.");
        }
        else{
            alert("Enorabuena, has adivinado el número correcto: " + num1);
        }
    }
}