let algoritmo = '#30 ¿nesecito dieta?';

if (algoritmo == '#1 una contraseña') {
    let user = prompt('Ingrese su nombre de usuario:');
    let password = prompt('Ahora por favor ingrese su contraseña:');

    if (user == 'Aprendiz123' && password == 123456) {
        alert('Bienvenido');
    } else {
        alert('Ups, algo salio mal, por favor intente nuevamente');
    }
}

if (algoritmo == '#2 ¿Es mayor de edad?') {
    let anio = prompt('Ingrese el año en que nacio');
    let edad = 2022 - anio;

    if (edad > 17) {
        alert('Usted es mayor de edad y posee ' + edad + ' años');
    } else {
        alert('Usted es menor de edad y posee ' + edad + ' años');
    }
}

if (algoritmo == '#4 ¿Cual es el mayor y cual es el menor?') {
    let num1 = parseInt(prompt('Ingrese el primer numero'));
    let num2 = parseInt(prompt('Ingrese el segundo numero'));

    if (num1 > num2) {
        alert(num1 + ' es el mayor y ' + num2 + ' es el menor');
    } else {
        alert(num2 + ' es el mayor y ' + num1 + ' es el menor');
    }
}

if (algoritmo == '#5 piedra, papel o tijera') {
    const aleatorio = (min, max) =>
        Math.floor(Math.random() * (max - min + 1) + 1);

    function choice(jugada) {
        let resultado = '';
        switch (jugada) {
            case 1:
                resultado = 'piedra 🥌';
                break;
            case 2:
                resultado = 'papel 📄';
                break;
            case 3:
                resultado = 'tijera ✂';
                break;
            default:
                resultado = 'perder';
                break;
        }
        return resultado;
    }

    let pc = 0;
    let triunfos = 0;
    let perdidas = 0;

    for (let i = 0; i < 3; i++) {
        pc = aleatorio(1, 3);
        let jugador = parseInt(
            prompt('Wellcome, to play select:\n 1.Piedra\n 2.Papel\n 3.Tijera')
        );

        alert('Seleccionaste ' + choice(jugador));
        alert('El pc selecciono ' + choice(pc));

        if (jugador == pc) {
            alert('Por lo tanto, quedaron enpatados');
        } else if (jugador == 1 && pc == 3) {
            alert('A si que ganaste');
            triunfos += 1;
        } else if (jugador == 2 && pc == 1) {
            alert('Genial, ganaste');
            triunfos += 1;
        } else if (jugador == 3 && pc == 2) {
            alert('ganaste 😉');
            triunfos += 1;
        } else {
            alert('Asi que perdiste ☠');
            perdidas += 1;
        }
    }
    alert('Ganaste ' + triunfos + ' veses y perdiste ' + perdidas + ' veses');
}

if (algoritmo == '#6 encontrar el numero mayor') {
    const numeros = [];
    let p = 0;
    let cantidad = parseInt(
        prompt('Ingrese la cantidad de numeros a comparar')
    );
    let mayor;

    for (let i = 1; i <= cantidad; i++) {
        numeros[p] = parseInt(prompt('Ingrese numero ' + i));
        if (i == 1) {
            mayor = numeros[p];
        } else if (numeros[p] > numeros[p - 1]) {
            mayor = numeros[p];
        }
        p++;
    }
    alert('El numero mayor es:' + mayor);
}

if (algoritmo == '#7 el perimetro de un cuadrado') {
    let lados = parseInt(prompt('Ingrese la longitud de los lados del cuadrado'))

    let perimetro = lados * 4
    alert(`El perimetro del cuadrado es:\n ${perimetro}cm`)
}

if (algoritmo == '#8 sumando dos numeros') {
    let num1 = parseInt(prompt('ingrese el primer numero'));
    let num2 = parseInt(prompt('ingrese el segundo numero'));

    let resultado = num1 + num2;
    alert(`la suma entre ${num1} y ${num2} es igual a ${resultado}`);
}

if (algoritmo == '#9 el numero anterior y el numero siguiente') {
    let numero = parseInt(prompt('digite un numero'));

    let suc = numero + 1;
    let ant = numero - 1;
    alert(
        `el numero anterior de ${numero} es ${ant}
        y el numero siguiente de ${numero} es ${suc}`
    );
}

if (algoritmo == '#10 convirtiendo metros') {
    let metros = prompt('digite la distancia en metros');
    let km = metros * 0.001;
    let dm = metros * 10;
    let hm = metros * 0.01;
    let cm = metros * 100;
    let dam = metros * 0.1;
    let mm = metros * 1000;

    alert(
        `La distancia de ${metros} metros corresponde a: \n
        ${km} km \n
        ${dm} dm\n
        ${hm} hm\n
        ${cm} cm\n
        ${dam} dam\n
        ${mm} mm`
    );
}

if (algoritmo == '#11 dormir 8 horas') {
    let horas = parseInt(prompt('Ingrese las horas que descanso'));

    if (horas == 8) {
        alert('Has dormido lo suficiente');
    } else if (horas > 8) {
        alert('Has dormido demasiado');
    } else {
        alert('Has dormido muy poco');
    }
}

if (algoritmo == '#12 pintado paredes') {
    //realize un algortimo que lea
    //el ancho y la altura de una pared, calcule y muestre el
    //area a ser pintada y calcule la cantidad de pintura necesaria
    //para el servicio, teniendo en cuenta que cada litro de pintura
    //pinta un area de 2 metros cuadrados.

    let alturaPared = parseInt(prompt('ingrese la altura de la pared'));
    let anchoPared = parseInt(prompt('ingrese el ancho de la pared'));
    let areaTotal = alturaPared * anchoPared;
    let pintura = areaTotal / 2;

    alert(
        `para pintar un pared con un area de ${areaTotal} m², nesecitara ${pintura} litro/s de pintura`
    );
}

if (algoritmo == '#13 un producto en descuento') {
    //desarrolle un programa que lea el precio de un producto
    //calcule y muestre su precio promocional, con 5% de descuento.

    let precio = 80;
    let descuento = 5 * (precio / 100);
    let valorProm = precio - descuento;

    alert(`el valor promacional será ${valorProm}`);
}

if (algoritmo == '#14 aumento de salario') {
    //haga un algoritmo que lea el salario de un funcionario,
    //calcule y muestre su nuevo salario, con 15% de aumento

    let salario = 1800;
    let aumento = 15 * (salario / 100);
    let nuevoSalario = salario + aumento;
    alert(
        `Salario antiguo:\n
        ${salario}\n
        nuevo salario:\n
        ${nuevoSalario}`
    );
}

if (algoritmo == '#15 el salario del mes') {
    /* desarrolle un programa que lea el numero de dias trabajados
    en un mes y muestre el salario del funcionario, sabiendo que el trabaja 8 horas
    y gana $25.000 por hora trabajada */

    let diasTrabajados = 2;
    let salario = diasTrabajados * 8 * 25000;
    alert(salario);
}

if (algoritmo == '#16 cigarros diarios') {
    /* Desarrolle un programa para calcular la reduccion de tiempo de vida de
    un fumador. Pregunte la cantidad de cigarros fumados por dia y cuantos años
    ya lleva fumando. Considere que un fumador pierde 10 minutos de vida con cada cigarrillo.
    Calcule cuantos dias de vida un fumador perdera y muestre el total en dias. */

    let cigarrosPorDia = parseInt(
        prompt('escriba cuantos cigarros fuma al dia')
    );
    let aniosFumando = parseInt(
        prompt('escriba desde hace cuantos años ya lleva fumando')
    );
    let aniosParaDias = aniosFumando * 365;
    let diasPerdidos = cigarrosPorDia * aniosParaDias * 10;
    alert(`usted perdera ${diasPerdidos} dias, si continua fumando asi`);
}

if (algoritmo == '#17 exceso de velocidad') {
    /* Desarrolle un programa que pregunte la velocidad de un carro,
    en caso de pasarse los 80Km/h, muestre un mensaje diciendo que el usuario fue multado,
    en ese caso, muestre el valor de la multa, cobrando $10 por cada km arriba de la velocidad
    permitida */

    let velocidad = parseInt(prompt('a que velocidad va?'));
    let multa = (velocidad - 80) * 10;
    if (velocidad > 80) {
        alert(
            `Usted fue multado por exceso de velocidad, su multa cuesta $${multa}`
        );
    } else {
        alert('Todo bien, maneje con cuidado');
    }
}

if (algoritmo == '#18 ¿puedo votar?') {
    /* realice un programa que lea un la edad de una persona y
    le muestra si esta tiene la edad suficiente para votar. */

    let edad = prompt('Ingrese su edad');
    if ((edad >= 16 && edad < 18) || edad >= 65) {
        alert('su voto no es obligatorio');
    } else if (edad >= 18 && edad < 65) {
        alert('su voto es obligatorio');
    } else {
        alert('usted no puede votar');
    }
}

if (algoritmo == '#19 notas de un alumno') {
    /* desarrolle un algoritmo que calcule el promedio de las notas de un alumno y se muestre en pantalla el resultado final
    diciendo si aprobo(el promedio debera estar arriba de 5.0). */

    let n1 = parseFloat(prompt('Ingrese la primera nota'));
    let n2 = parseFloat(prompt('Ingrese la segunda nota'));
    let promedio = (n1 + n2) / 2;
    if (promedio >= 6.0) {
        alert(`Su promedio es ${promedio}, usted aprovo`);
    } else {
        alert(`Su promedio es ${promedio}, usted fue reprovado`);
    }
}

/* desarrolle un programa que lea un numero entero
y muestre si este es par o impar */
if (algoritmo == '#20 ¿numero par o impar?') {
    let numero = parseInt(prompt('ingrese un numero'));
    let conversor = numero % 2;

    if (conversor == 0) {
        alert(`${numero} es par`);
    } else {
        alert(`${numero} es impar`);
    }
}

if (algoritmo == '#21 años Bisiestos') {
    let anio = prompt('Ingrese un año');

    if (anio % 400 == 0) {
        alert(`${anio} es un año bixiesto`);
    } else {
        alert(`${anio} no es un año bixiesto`);
    }
}

if (algoritmo == '#22 ¿Cual es mayor y cual es menor, o son iguales?') {
    /* Desarrolle un algoritmo que le permita al usuario ingresar dos numeros y luego
    le muestre cual de los dos numeros es el mayor, el menor o sí son iguales. */

    let num1 = parseInt(prompt('Ingrese el primer numero'));
    let num2 = parseInt(prompt('Ingrese el segundo numero'));

    if (num1 == num2) {
        document.write('Los numeros son iguales');
    } else if (num1 > num2) {
        document.write(num1 + ' Es mayor que ' + n2);
    } else {
        document.write(num2 + ' Es mayor que ' + n1);
    }
}

if (algoritmo == '#23 el perimetro de un rectangulo') {
    let base = parseInt(prompt('Ingrese la base del rectangulo'))
    let altura = parseInt(prompt('Ingrese la altura del rectangulo'))

    let perimetro = (base + altura) * 2
    alert(`El perimetro del rectangulo es:\n ${perimetro}cm`)
}

if (algoritmo == '#24 el perimetro de un triangulo equilatero') {
    let lados = parseInt(prompt('Ingrese la longitud de los lados del triangulo'))

    let perimetro = lados * 3
    alert(`Por lo tanto el perimetro del triangulo es:\n ${perimetro}cm`)
}

if (algoritmo == '#25 el perímetro de un rombo') {
    let lados = parseInt(prompt('Ingrese la longitud de los lados del rombo'))

    let perimetro = lados * 4
    alert("Por lo tanto el perimetro del rombo es:\n" + perimetro)
}

if (algoritmo == '#26 el perímetro de un triangulo isósceles') {
    let ladosRepetidos = parseInt(prompt('Ingrese la longitud de los 2 lados que se repiten'))
    let ladoDiferente = parseInt(prompt('Ingrese la longitud del lado diferente'))

    let perimetro = (ladosRepetidos * 2) + ladoDiferente
    alert("Por lo tanto el perimetro del triangulo isósceles es:\n" + perimetro)
}

if (algoritmo == '#27 ') {
}

if (algoritmo == '#28') {
}

if (algoritmo == '#29 el area de un circulo') {
    let radio = parseFloat(prompt('Ingrese el radio del circulo'));
    let area = Math.PI * (radio * 2);

    if (area < 100) {
        alert('El area del circulo es de: ' + area + 'cm²');
    } else {
        alert('error!');
    }
}

if (algoritmo == '#30 ¿necesita una a dieta?') {
    let peso = parseInt(prompt('Ingrese su peso'));

    alert((peso < 200) ? 'Usted está bien de peso': '¡Usted se debe poner a dieta!')
}

if (algoritmo == '#31') {
}