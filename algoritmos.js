let algoritmo = "#1";

if (algoritmo == "#1 una contraseña") {
    let user = prompt("Ingrese su nombre de usuario:");
    let password = prompt("Ahora por favor ingrese su contraseña:");

    if (user == "Aprendiz123" && password == 123456) {
        alert("Bienvenido");
    } else {
        alert("Ups, algo salio mal, por favor intente nuevamente");
    }
}

if (algoritmo == "#2 ¿Es mayor de edad?") {
    let anio = prompt("Ingrese el año en que nacio");
    let edad = 2022 - anio;

    if (edad > 17) {
        alert("Usted es mayor de edad y posee " + edad + " años");
    } else {
        alert("Usted es menor de edad y posee " + edad + " años");
    }
}

if (algoritmo == "#4 ¿Cual es el mayor y cual es el menor?") {
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));

    if (num1 > num2) {
        alert(num1 + " es el mayor y " + num2 + " es el menor");
    } else {
        alert(num2 + " es el mayor y " + num1 + " es el menor");
    }
}