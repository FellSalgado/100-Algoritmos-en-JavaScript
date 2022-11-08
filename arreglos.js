let a = "metodos";
const ms = (message) => document.write(message + "<br>")

if (a == "metodos") {
    const numbers = [1, 2, 3, 2];
    ms(numbers.map((x) => x * 2));
    ms(numbers.filter((x) => x < 2));
}

if (a == "a") {
    const array = []
    const objectArray = [
        {languaje: "JavaScript"},
        {languaje: "Python"},
        {languaje: "Golang"}
    ]

    const arrayOfArray = [[2, 3], [8, 6], ["name", true]]
}

if (a == "b") {
    const frameworks = [
        "React", "Next", "Angular",
        "Vue", "Angular", "Next"
    ]

    const unicos = [...new Set(frameworks)]
    ms(frameworks)
    ms(unicos)
}