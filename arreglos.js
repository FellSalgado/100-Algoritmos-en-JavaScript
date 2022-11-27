let algoritmo = '#5 sumando elementos de un conjunto';
const ms = (message) => document.write(message);

/* "metodos"
    const numbers = [1, 2, 3, 2];

    ms(numbers.map((x) => x * 2));
    ms(numbers.filter((x) => x < 2));
*/

/* if (a == "a") {
    const array = []
    const objectArray = [
        {languaje: "JavaScript"},
        {languaje: "Python"},
        {languaje: "Golang"}
    ]

    const arrayOfArray = [[2, 3], [8, 6], ["name", true]]
}
*/

if (algoritmo == '#1 elementos unicos') {
    const frameworks = ['React', 'Next', 'Angular', 'Vue', 'Angular', 'Next'];

    const unicos = [...new Set(frameworks)];
    ms(frameworks);
    ms(unicos);
}

if (algoritmo == '#2 suma de positivos') {
    const numeros = [];
}

if (algoritmo == '#3 block de notas') {
    let note = prompt('ingrese sus notas, separando una de otras con una coma');
    let split = note.split('');
    let from = Array.from(split);

    console.log(split);
    console.log(from);
}

if (algoritmo == '#4 carrito de compras') {
    const productos = [];
    let cantidad = parseInt(prompt('Digita cuantos productos desea guardar'));

    for (let i = 1; i <= cantidad; i++) {
        productos[i] = prompt(`producto ${i}`);
    }

    alert(`Sus productos fueron guardados exitosamente:\n ${productos}`);
}

if (algoritmo == '#5 sumando elementos de un conjunto') {
    const numeros = []
    numeros[0] = parseInt(prompt("Ingrese el primer numero"))
    numeros[1] = parseInt(prompt("Ingrese el segundo numero"))

    let operacion = numeros[0] + numeros[1]

    alert("El resultado es: " + operacion)
}