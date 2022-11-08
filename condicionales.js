let algoritmo = "#5 piedra, papel o tijera"

if (algoritmo == "#1 una contraseña") {
	let user = prompt("Ingrese su nombre de usuario:");
    let password = prompt("Ahora por favor ingrese su contraseña:");
    
    if (user == "Aprendiz123" & password == 123456) {
    	alert("Bienvenido");
    } else {
    	alert("Ups, algo salio mal, por favor intente nuevamente");
    }
}

if (algoritmo == "#2 ¿Es mayor de edad?") {
	let anio = prompt("Ingrese el año en que nacio")
	let edad = 2022 - anio

	if (edad > 17) {
		alert("Usted es mayor de edad y posee " + edad + " años")
	} else {
		alert("Usted es menor de edad y posee " + edad + " años")
	}
}

if (algoritmo == "#4 ¿El numero es mayor o menor?") {
    let num1 = parseInt(prompt("Ingrese el primer numero"))
    let num2 = parseInt(prompt("Ingrese el segundo numero"))

    if (num1 > num2) {
        alert(num1 + " es el mayor y " + num2 + " es el menor")
    } else {
        alert(num2 + " es el mayor y " + num1 + " es el menor")
    }
}

if (algoritmo == "#5 piedra, papel o tijera") {
    const aleatorio = (min, max) => Math.floor((Math.random() * (max-min+1)) + 1);
    
    function choice(jugada) {
    	let resultado = "";
        switch (jugada) {
            case 1:
                resultado = "piedra 🥌";
                break;
            case 2:
                resultado = "papel 📄";
                break;
            case 3:
                resultado = "tijera ✂";
                break;
            default:
                resultado = "perder";
                break;
        }
    	return resultado;
    }

    let pc = 0
    let triunfos = 0
    let perdidas = 0

    for (let i = 0; i < 3; i++) {
        pc = aleatorio(1, 3)
        let jugador = parseInt(prompt("Wellcome, to play select:\n 1.Piedra\n 2.Papel\n 3.Tijera"));

        alert("Seleccionaste " + choice(jugador));
        alert("El pc selecciono " + choice(pc));

        if (jugador == pc) {
    	    alert("Por lo tanto, quedaron enpatados");
        } else if (jugador == 1 && pc == 3) {
        	alert("A si que ganaste");
            triunfos = triunfos + 1
        } else if (jugador == 2 && pc ==1) {
        	alert("Genial, ganaste");
            triunfos = triunfos + 1
        } else if (jugador == 3 && pc == 2) {
        	alert("ganaste 😉");
            triunfos = triunfos + 1
        } else {
        	alert ("Asi que perdiste ☠");
            perdidas = perdidas + 1
        }
    }
    alert("Ganaste " + triunfos + " veses y perdiste " + perdidas + " veses")
}

//Event Listener .Escuchador de eventos