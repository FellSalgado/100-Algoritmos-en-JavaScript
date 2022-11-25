let algoritmo = '#3 block de notas';
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

if (algoritmo = '#4 ') {
}