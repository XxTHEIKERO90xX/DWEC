function validarNumero() {
    let esNumero;
    let num = document.forms["formulario"]["num"].value;
    
    if (num === null || num === ""){
        alert("El cuadro de texto está vacío.");
    }
    else{
        esNumero = isNaN(num);
        if (esNumero === false){
            alert("El dato introducido es un numero.");
        }
        else{
            alert("El dato introducido no es un numero.");
        }
    }
}