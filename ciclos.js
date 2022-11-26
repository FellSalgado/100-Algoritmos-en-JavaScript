let algorithm = "#10 descuentos del dia de la mujer"

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

if (algorithm == "#7 fizzBuzz") {
    function fizzBuzz() {
        for (let i = 0; i <= 50; i++) {
            if (i % 15 == 0) console.log('fizzbuzz');
			else if (i % 3 == 0) console.log('fiz');
			else if (i % 5 == 0) console.log('buzz');
			else console.log(i);
        }
    }
}

if (algorithm == "#8 una alcancia") {
	let dinero = 0
	let i = true

	while(i == true) {
		let nuevoDinero = prompt("deposite la catidad nueva [de 0 en adelante, sin decimales] o digite 'ok' para terminar")
		
		if (nuevoDinero == "cancelar" | nuevoDinero == "ok") {
			alert(`su dinero total depositado:\n $${dinero}`);
			i = false
		} else if (nuevoDinero > 0) {
			dinero += parseInt(nuevoDinero)
			alert(dinero);
		} else {
			alert("por favor ingrese un valor valido o digite 'cancelar' para salir")
		}
	}
}

if (algorithm == "#9 comprando dolares") {
	let cartera = 10
	let dolares = cartera / 4.45

	alert(`con $${cartera} usted puede comprar ${dolares} USD`)
}

if (algorithm == "#10 descuentos del dia de la mujer") {
	/* Un almacen abre un promocion exclusiva en el dia de la mujer, donde dara descuentos a todos,
	pero especialmente a las mujeres,
	Desarrolle un programa que lea el nombre, el genero y el valor de las compras del cliente y calcule el precio
	con descuento, teniendo en cuenta que:
	-Los homres ganan un 5% de descuento
	-Las mujeres ganan un 13% de descuento */

	let nombre = prompt("Ingrese el nombre")
	let genero = prompt("Ingrese el genero h/m")
	let valorCompra = parseInt(prompt("ingrese el valor de la compra"))
	let descuentoHombres = 5 * valorCompra / 100
	let descuentoMujeres = 13 * valorCompra / 100

	if (genero == "h") {
		alert(`la compra del sr.${nombre}\n dio ${valorCompra - descuentoHombres} con el 5% de descuento`)
	}
	else if (genero == "m") {
		alert(`la compra de la sra.${nombre}\n dio ${valorCompra - descuentoMujeres} con el 13% de descuento`)
	} else {
		alert("ingrese una genero valido h/m")
	}
}

if (algorithm == "#11 formar un triangulo") {
	/* desarrolle un programa que lea el tamaño de tres
	segmentos de una recta. Analice sus medidas y diga si es posible formar
	un triangulo con esas rectas, Matematicamente, para que tres segmentos formen un triangulo, cada medida de cada
	lado debe ser menor a la suma de los otros dos. */

	let recta1 = 5
	let recta2 = 5
	let recta3 = 5
	if() {
		
	}
}

if (algorithm == "#22 contando ovejas") {
    /* realice un algoritmo que cumpla con al tarea de imprimir en pantalla
    un numero infinito de ovejas, donde secuancialmente las muestre primero una, luego dos y asi
    sucecivamente, hasta que el usuario se se canse y cancele la secuencia. */
    document.write("<center>")

    for (let i = 0; i < 20; i++) {
		for (let c = 0; c < i; c++) {
			if (c % 2 == 0) {
				document.write("😎");
			} else if (c % 3 == 0) {
				document.write("🥰");
			} else {
				document.write("👻")
			}
		}
		document.write("<br>")
    }
	document.write("</center>")
}