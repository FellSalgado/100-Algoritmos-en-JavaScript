let funcion = "#setTimeout"

const ms = (message) => document.write(message + "<br>")

if (funcion == "#setTimeout") {
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
}

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