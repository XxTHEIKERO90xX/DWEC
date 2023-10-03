
function ValidarFormulario() {
    let name = document.forms["formulario"]["nombre"].value
    let apellidos = document.forms["formulario"]["apellidos"].value
    let edad = document.forms["formulario"]["edad"].value
    let salario = document.forms["formulario"]["salario"].value

    document.getElementById("nombre").innerHTML = "Nombre: " + nombre;
    document.getElementById("apellidos").innerHTML = "Apellidos: " + apellidos;
    document.getElementById("edad").innerHTML = "Edad: " + edad;

    
    if (salario >= 1000 && salario <= 2000){
        if (edad > 45){
            salario = salario + ((3/100) * salario);
            document.getElementById("salario").innerHTML = "Salario: " + salario;
        } 
        else {
            salario = salario + ((10%100) * salario);
            document.getElementById("salario").innerHTML = "Salario: " + salario;
        }
    }
    else if (salario < 1000){
        if (edad < 30){
            document.getElementById("salario").innerHTML = "Salario: 1100";
        } 
        else if (edad >= 30 && edad <= 40){
            salario = salario + ((3 / 100) * salario);
            document.getElementById("salario").innerHTML = "Salario: " + salario;
        }
        else {
            salario = salario + ((15 / 100) * salario);
            document.getElementById("salario").innerHTML = "Salario: " + salario;          
        }

    }
}