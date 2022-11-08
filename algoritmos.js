let a = "#3 elegir operacion";

if (a == "#3 elegir operacion") {
	const message = []
	let num1 = parseInt(prompt("Ingrese el primer numero"))
	let num2 = parseInt(prompt("Ingrese el segundo numero"))
	
	function resultado(n1, n2, operacion) {
		if (operacion > 3) {
			return alert("Ingreso una opcion incorrecta")
		} else {
			if (n1 > n2) {
			message[0] = n1 + " Es mayor"
			message[1] = n2 + " Es menor"
			message[2] = n1 - n2
			} else {
			message[0] = n2 + " Es mayor"
			message[1] = n1 + " Es menor"
			message[2] = n2 - n1
			}
			return alert(message[operacion - 1])
		}
	}
	
	let operacion = prompt("ingrese:\n [1] par encontrar el mayor\n [2] para encontrar el menor\n [3] para hayar la difererencia entre los dos numeros")
	resultado(num1, num2, operacion)
}