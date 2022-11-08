let algorithm = "#3 pisos de numeros"

if (algorithm == "#1 buscar numeros pares") {
	let cantidad = parseInt(prompt("Ingrese una cantidad de numeros"))
	for (let i = 0; i < cantidad; i++) {
		document.write(" " + i*2)
	}
}

if (algorithm == "#2 juego de sumar") {
	let i = true;
	let num1 = 3;
	let num2 = 2;
	let puntos = 0;

	while (i) {
		let result = prompt(num1 + " + " + num2 + " =");

	    if (result != num1 + num2) {
			alert("Ya perdiste🤦‍♂️")
			i = false;
		}
		puntos++
		num1 += 2
		num2++
	}
	alert("Tu puntuacion quedo en: " + puntos + " puntos")
}

if (algorithm == "#3 pisos de numeros") {
    let pisos = prompt("Ingrese el numero de pisos")

    document.write("<center>")
    for (let i = pisos; i > 0; i--) {
        for (let c = i; c > 0; c--) {
            document.write(" " + c + " ")
        }
        document.write("<br>")
    }
    document.write("</center>")
}

if (algorithm == "#4 mas el anterior") {
	let num = 1

	while (num < 60) {
		document.write(num)
		num += num
	}
}

if (algorithm == "#5 La sucesión de FIBONNACI") {
	let first = 0;
	let second = 1;

	for (let i = 0; i < 20; i++) {
		console.log(first);
		const suma = first + second;

		first = second;
		second = suma;
	}
}

if (algorithm == "#6 ¿es un numero primo?") {
	const primerNumero = (number) => {
		if (number < 2) {
			return false;
		}

		for (let i = 2; i < number; i++) {
			if (number % i === 0) return false;
		}

		return true;
	};

	for (let i = 0; i <= 100; i++) {
		primerNumero(i) && console.log(i)
	}
}