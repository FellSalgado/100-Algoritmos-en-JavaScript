let algoritmo = '#7 un formulario';
const ms = (message) => document.write(message);

//"metodos"//
[4, 5, 6, 7]
    .at(1) //5
    [(4, 5, 6, 7)].push(8) //[4, 5, 6, 7, 8]
    [(4, 5, 6, 7)].pop() //[4, 5, 6]
    [(4, 5, 6, 7)].fill(1) //[1, 1, 1, 1]
    [(4, 5, 6, 7)].join(' ') //'4, 5, 6' (string)
    [(4, 5, 6, 7)].shift() //[5, 6, 7]
    [(4, 5, 6, 7)].unshift(3) //[3, 4, 5, 6, 7]
    [(4, 5, 6, 7)].reverse() //[7, 6, 5, 4]
    [(4, 5, 6, 7)].map((item) => 2 * item) //[8, 10, 12, 14]
    [(4, 5, 6, 7)].includes(6) //true
    [(4, 5, 6, 7)].filter((item) => item > 5) //[6, 7]
    [(4, 5, 6, 7)].find((item) => item > 5) //6 (first match)
    [(4, 5, 6, 7)].every((item) => item > 0) //true
    [(4, 5, 6, 7)].findIndex((item) => item === 5) //1
    [(4, 5, 6, 7)].reduce((prev, curr) => prev + curr, 0); //12

if (algoritmo == '#1 elementos unicos') {
    const frameworks = ['React', 'Next', 'Angular', 'Vue', 'Angular', 'Next'];

    const unicos = [...new Set(frameworks)];
    ms(frameworks);
    ms(unicos);
}

if (algoritmo == '#2') {
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

if (algoritmo == '#5 sumando elementos de un arreglo') {
    const numeros = [];
    numeros[0] = parseInt(prompt('Ingrese el primer numero'));
    numeros[1] = parseInt(prompt('Ingrese el segundo numero'));

    let operacion = numeros[0] + numeros[1];

    alert('El resultado es: ' + operacion);
}

if (algoritmo == '#6 multiplicando elementos de un arreglo') {
    const numeros = [];
    numeros[0] = parseInt(prompt('Ingrese el primer numero'));
    numeros[1] = parseInt(prompt('Ingrese el segundo numero'));

    let operacion = numeros[0] * numeros[1];

    alert(`El resultado es: ${operacion}`);
}

if (algoritmo == '#7 un formulario') {
    function leer(value) {
        return prompt('Ingrese ' + value) + ' ';
    }

    const datos = [];

    datos[0] = leer('su nombre');
    datos[1] = leer('su apellido');
    datos[2] = leer('su edad');
    datos[3] = leer('su tipo de documento');
    datos[4] = leer('su numero de documento');

    alert(`Sus datos ingresados fueron guardados exitosamente:\n ${datos}`);
}

if (algoritmo == '#8 busqueda binaria') {
    function binarySearch(array, target) {
        let left = 0;
        let right = array.length - 1;
        while (left <= right) {
            const middle = left + Math.floor((right - left) / 2);
            if (array[middle] === target) {
                return middle;
            }
            if (array[middle] < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        return -1;
    }
}

if (algoritmo == '#9 Quicksort') {
    function quickSort(array) {
        if (array.length <= 1) {
            return array;
        }
        const pivot = array[array.length - 1];
        const left = [];
        const right = [];
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
}

if (algoritmo == '#10 Merge sort') {
    function mergeSort(array) {
        if (array.length <= 1) {
            return array;
        }
        const middle = Math.floor(array.length / 2);
        const left = array.slice(0, middle);
        const right = array.slice(middle);
        return merge(mergeSort(left), mergeSort(right));
    }
    function merge(left, right) {
        const result = [];
        while (left.length > 0 && right.length > 0) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }
        return [...result, ...left, ...right];
    }
}

if (algoritmo == '#11 Eliminar el último elemento de una matriz') {
    const arr = [1, 2, 3, 4, 5];
    arr.pop(); // elimina el elemento 5 de la matriz
    console.log(arr); // imprime [1, 2, 3, 4]
}

if (algoritmo == '#12 Calcular la suma de los elementos de una matriz') {
    const arr = [1, 2, 3, 4, 5];
    let sum = 0;
    while (arr.length > 0) {
        sum += arr.pop();
    }
    console.log(sum); // imprime 15
}

if (algoritmo == '#13 Invertir el orden de los elementos en una matriz') {
    const arr = [1, 2, 3, 4, 5];
    const reversedArr = [];
    while (arr.length > 0) {
        reversedArr.push(arr.pop());
    }
    console.log(reversedArr); // imprime [5, 4, 3, 2, 1]
}

if (
    algoritmo ==
    '#14 Extraer una submatriz de elementos de una matriz dada con el método slice()'
) {
    // Inicializamos una matriz de números enteros
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Definimos una función que acepta dos índices (start y end) y extrae
    // una submatriz de la matriz dada con los elementos comprendidos entre
    // start y end (inclusive)
    function extractSubarray(array, start, end) {
        // Usamos el método slice() para extraer la submatriz desde la matriz dada
        const subarray = array.slice(start, end + 1);
        return subarray;
    }

    // Probar la función con diferentes valores de start y end
    console.log(extractSubarray(arr, 0, 4)); // imprime [1, 2, 3, 4, 5]
    console.log(extractSubarray(arr, 3, 7)); // imprime [4, 5, 6, 7, 8]
    console.log(extractSubarray(arr, 5, 9)); // imprime [6, 7, 8, 9, 10]
}

if (algoritmo == '#15 Transformando la lista') {
    //Tenemos una lista de números enteros y queremos eliminar todos los elementos
    //pares y añadir el doble de cada elemento impar en su lugar.
    let lista = [1, 2, 3, 4, 5, 6, 7, 8];

    let i = 0;
    while (i < lista.length) {
        if (lista[i] % 2 == 0) {
            lista.splice(i, 1); // Eliminar el elemento par
        } else {
            lista.splice(i, 1, lista[i] * 2); // Reemplazar el elemento impar por su doble
            i += 1; // Avanzar el índice en una posición
        }
    }

    console.log(lista); // imprime [2, 6, 10, 14]
}
