let funcion = "#6 obtener la raiz, cuadrada o cubica"

/* if (funcion == "#setTimeout") {
    const greet = () => ms("hi")
    
    setTimeout(greet, 3000)
    ms("hello")
    //This message is shown first
}

if (funcion == "#setInterval") {
    const greet = () => ms("hi")
    setInterval(greet, 1000)
    //hi
    //hi ...
} */

if (funcion == "#1 área de un polígono") {
	function calcularArea(polygon, x, y) {
		if(polygon === "Triángulo") {
			return (x * y) / 2;
		}
		return x * y;
	}

	console.log(`Triangulo = ${calcularArea("Triángulo", 10, 10)}`);
	console.log(`Cuadrado o rectangulo = ${calcularArea("", 10, 10)}`);
}

if (funcion == "#2 Convertir Booleano a String") {
    function booleantoString(b) {
        return b.toString();
    }
    let bolean = true
    console.log(booleantoString(bolean));
}

if (funcion == "#3 operaciones basicas") {
    function operacionesBasicas(operacion, n1, n2) {
        switch (operacion) {
            case "+":
                return n1 + n2
                break;
            case "-":
                return n1 - n2
                break;
            case "*":
                return n1 * n2
                break;
            case "/":
                return n1 / n2
                break;
            default:
                return "ingreso una opcion incorrecta"
                break;
        }
    }
    console.log(operacionesBasicas("+", 5, 20));
}

if (funcion == "#4 numero a cadena") {
    function numbertoString(b) {
        return b.toString();
    }
    let number = parseInt(80)
    console.log(numbertoString(number));
}

if (funcion == "#5 el numero opuesto") {
    function numeroOpuesto(num) {
        return (-num);
    }
    console.log(numeroOpuesto(8));
}

if (funcion == "#6 obtener la raiz, cuadrada o cubica") {
    function obtenerRaiz(raiz, num) {
        if(raiz == "cuadrada") {
            return Math.sqrt(num);
        } else {
            return Math.pow(num, 0.33);
        }
    }

    console.log(`Raíz cuadrada = ${obtenerRaiz("cuadrada", 2)}`)
    console.log(`Raíz cubica = ${obtenerRaiz("", 2)}`)
}

if (algoritmo == "#7 saludar al usuario") {
    const saludar = (name) => alert("Hola " + name)

    saludar(prompt("ingrese su nombre"))
}