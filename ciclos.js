let algorithm = '#7 del 1 al 10 y en reversa';

if (algorithm == '#1 buscar numeros pares') {
    let cantidad = parseInt(prompt('Ingrese una cantidad de numeros'));
    for (let i = 0; i < cantidad; i++) {
        document.write(' ' + i * 2);
    }
}

if (algorithm == '#2 juego de sumar') {
    let i = true;
    let num1 = 3;
    let num2 = 2;
    let puntos = 0;

    while (i) {
        let result = prompt(num1 + ' + ' + num2 + ' =');

        if (result != num1 + num2) {
            alert('Ya perdiste🤦‍♂️');
            i = false;
        }
        puntos++;
        num1 += 2;
        num2++;
    }
    alert('Tu puntuacion quedo en: ' + puntos + ' puntos');
}

if (algorithm == '#3 piramide de numeros') {
    
}

if (algorithm == '#4 piramide invertida') {
    let pisos = prompt('Ingrese el numero de pisos');

    document.write('<center>');
    for (let i = pisos; i > 0; i--) {
        for (let c = i; c > 0; c--) {
            document.write(' ' + c + ' ');
        }
        document.write('<br>');
    }
    document.write('</center>');
}

if (algorithm == '#5 mas el anterior') {
    let num = 1;

    while (num < 60) {
        document.write(num);
        num += num;
    }
}

if (algorithm == '#6 La sucesión de FIBONNACI') {
    let first = 0;
    let second = 1;

    for (let i = 0; i < 20; i++) {
        console.log(first);
        const suma = first + second;

        first = second;
        second = suma;
    }
}

if (algorithm == '#7 de 1 en 1 hasta el 40') {
    /*Desarrolle un programa que le permita al usuario ingresar un numero y este vaya
    incrementandose de 1 en 1 hasta llegar al 40. Con la condición de que, sí digita un número mayor o igual a 40,
    entonces este se irá desminuyendo de 1 en 1 hasta llegar a 0.*/

    let numero = parseInt(prompt('Digite un numero'));
    if (numero < 40) {
        while (numero <= 40) {
            console.log(numero);
            console.log('<br>');
            numero++;
        }
    } else {
        while (numero >= 0) {
            console.log(numero);
            console.log('<br>');
            numero--;
        }
    }
}

if (algorithm == '#8 una alcancia') {
    let dinero = 0;
    let i = true;

    while (i == true) {
        let nuevoDinero = prompt(
            "deposite la catidad nueva [de 0 en adelante, sin decimales] o digite 'ok' para terminar"
        );

        if ((nuevoDinero == 'cancelar') | (nuevoDinero == 'ok')) {
            alert(`su dinero total depositado:\n $${dinero}`);
            i = false;
        } else if (nuevoDinero > 0) {
            dinero += parseInt(nuevoDinero);
            alert(dinero);
        } else {
            alert(
                "por favor ingrese un valor valido o digite 'cancelar' para salir"
            );
        }
    }
}

if (algorithm == '#9 comprando dolares') {
    let cartera = 10;
    let dolares = cartera / 4.45;

    alert(`con $${cartera} usted puede comprar ${dolares} USD`);
}

if (algorithm == '#10 descuentos del dia de la mujer') {
    /* Un almacen abre un promocion exclusiva en el dia de la mujer, donde dara descuentos a todos,
	pero especialmente a las mujeres,
	Desarrolle un programa que lea el nombre, el genero y el valor de las compras del cliente y calcule el precio
	con descuento, teniendo en cuenta que:
	-Los homres ganan un 5% de descuento
	-Las mujeres ganan un 13% de descuento */

    let nombre = prompt('Ingrese el nombre');
    let genero = prompt('Ingrese el genero h/m');
    let valorCompra = parseInt(prompt('ingrese el valor de la compra'));
    let descuentoHombres = (5 * valorCompra) / 100;
    let descuentoMujeres = (13 * valorCompra) / 100;

    if (genero == 'h') {
        alert(
            `la compra del sr.${nombre}\n dio ${
                valorCompra - descuentoHombres
            } con el 5% de descuento`
        );
    } else if (genero == 'm') {
        alert(
            `la compra de la sra.${nombre}\n dio ${
                valorCompra - descuentoMujeres
            } con el 13% de descuento`
        );
    } else {
        alert('ingrese una genero valido h/m');
    }
}

if (algorithm == '#11 formar un triangulo') {
    /* desarrolle un programa que lea el tamaño de tres
	segmentos de una recta. Analice sus medidas y diga si es posible formar
	un triangulo con esas rectas, Matematicamente, para que tres segmentos formen un triangulo, cada medida de cada
	lado debe ser menor a la suma de los otros dos. */

    let recta1 = 5;
    let recta2 = 5;
    let recta3 = 5;
    if (
        recta1 < recta2 + recta3 &&
        recta2 < recta1 + recta3 &&
        recta3 < recta1 + recta2
    ) {
        alert(`Es posible formar un triangulo`);
    } else {
        alert(`No es posible formar un triangulo`);
    }
}

if (algorithm == '#12 el area de un terreno') {
    /* cree un programa que lea el ancho y el alto de un terreno
	rectangular, calculando y mostrando su area en m². El programa tambien deve mostrar la clasificacion del terreno,
	deacuerdo con la lista de abajo:
	-abajo de 100m2 = terreno regular
	-entre 100m2 y 500m2 = terreno master
	-arriba de los 500m2 = terreno VIP */

    let largo = 26;
    let ancho = 20;
    let area = largo * ancho;

    if (area < 100) {
        alert(
            `El area total del terreno es ${area}m², su terreno es un terreno regular`
        );
    } else if (area > 100 && area <= 500) {
        alert(`El area total del terreno es ${area}m², su terreno es master`);
    } else {
        alert(`El area total del terreno es ${area}m², su terreno es VIP`);
    }
}

if (algorithm == '#13 confirmar la contraseña') {
    let password = prompt('Ingrese la nueva contraseña');
    let newPassword = prompt('Confirma la nueva contraseña');

    alert(
        password == newPassword
            ? 'Genial, se ha cambiado tu contraseña'
            : 'las contraseñas no coinciden'
    );
}

if (algorithm == '#14 tipo de triangulo') {
    /* desarrolle un programa que lea el tamaño de tres
	segmentos de una recta. Analice sus medidas y diga si es posible formar
	un triangulo con esas rectas, Matematicamente, para que tres segmentos formen un triangulo, cada medida de cada
	lado debe ser menor a la suma de los otros dos.

	ademas, si los segmentos pueden formar un triangulo, el programa debera mostrar si el triangulo es de tipo:
	- EQUILATERO: Todos los lados iguales.
	- ISOSCELES: Dos lados iguales.
	- ESCALENO: Todos los lados diferentes. */

    let recta1 = 5;
    let recta2 = 6;
    let recta3 = 9;
    if (
        recta1 < recta2 + recta3 &&
        recta2 < recta1 + recta3 &&
        recta3 < recta1 + recta2
    ) {
        console.log(`✔ Es posible formar un triangulo`);
        if (recta1 == recta2 && recta2 == recta3) {
            console.log('de tipo EQUILATERO');
        } else if (recta1 == recta2 || recta1 == recta3 || recta2 == recta3) {
            console.log('de tipo ISOSCELES');
        } else if (recta1 != recta2 && recta2 != recta3) {
            console.log('de tipo ESCALENO');
        }
    } else {
        console.log(`No es posible formar un triangulo`);
    }
}

if (algorithm == '#15 del 6 al 11') {
    /* escriba un programa que muestre lo siguiente en pantalla:
	6 7 8 9 10 11 termino */

    let i = 6;
    while (i < 12) {
        console.log(i++);
    }
    console.log('termino');
}

if (algorithm == '#16 cuenta regresiva') {
    /* escriba un programa que muestre lo siguiente en pantalla:
	5 4 3 2 1 despegue 🚀 */

    let i = 5;
    while (i > 0) {
        console.log(i--);
    }
    console.log('despegue 🚀');
}

if (algorithm == '#17 de tres en tres') {
    /* escriba un programa que muestre lo siguiente en pantalla:
	0 3 6 9 12 15 18 termino*/

    let i = 0;
    while (i < 18) {
        console.log((i += 3));
    }
    console.log('Termino');
}

if (algorithm == '#18 valor inicial y valor final') {
    /* Desarrolle un programa que le permita al usuario ingresar un numero entero
	positivo inicial y un numero final, para luego mostarle todos los numeros entre estos dos
	ej:
	ingrese el primer numero: 2
	ingrese el segundo numero: 5
	-> salida: 2, 3, 4, 5 */

    let primerNumero = prompt('Ingrese el primer numero');
    let segundoNumero = prompt('Ingrese el segundo numero');

    while (primerNumero <= segundoNumero) {
        console.log(primerNumero++);
    }
}

if (algorithm == '#19 divididos por 4') {
    /* desarrolle un algoritmo que muestre una cuenta regresiva del 30 al 1,
	marcando los numero que al dividirse por cuatro no tomen decimales. */
    let numero = 30;

    while (numero > 0) {
        if (numero % 4 == 0) {
            console.log([numero--]);
        } else {
            console.log(numero--);
        }
    }
}

if (algorithm == '#20 valor inicial, valor final y incremento') {
    /* desarrolle un algoritmo que lea un valor inicial del contador,
	un valor final y un incremento, mostrando enseguida todos los valores del intervalo.
	ej:
	Digite el primer valor: 10
	Digite el ultimo valor: 20
	Digite el incremento: 2 */

    let inicial = 2;
    let final = 20;
    let incremento = 2;

    if (inicial < final) {
        while (inicial <= final) {
            console.log(inicial);
            inicial += incremento;
        }
    } else {
        while (inicial >= final) {
            console.log(inicial);
            inicial -= incremento;
        }
    }
}

if (algorithm == '#21 ') {
}

if (algorithm == '#22 fizzBuzz') {
    function fizzBuzz() {
        for (let i = 0; i <= 50; i++) {
            if (i % 15 == 0) console.log('fizzbuzz');
            else if (i % 3 == 0) console.log('fiz');
            else if (i % 5 == 0) console.log('buzz');
            else console.log(i);
        }
    }
}

if (algorithm == '#23 de cinco en cinco') {
    /* desarrolle un algoritmo utilizando la estructura "para" que muestre
	lo siguiente en la pantalla: 0 5 10 15 20 25 30 termino! */

    for (let i = 0; i <= 30; i += 5) {
        console.log(i);
    }
    console.log('termino!');
}

if (algorithm == '#24 ¿es un numero primo?') {
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
        primerNumero(i) && console.log(i);
    }
}

if (algorithm == '#25 ') {

}