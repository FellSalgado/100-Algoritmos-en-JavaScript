let a = 17;
const ms = (message) => document.write(message + "<br>")

if (a == "añadir propiedades") {
    const player = {
        name: "Felix",
        life: 99,
    }
    ms(player.name);
    ms(player["name"]);

    player.power = 10;

    ms(player.power)
}

if (a == "eliminar propiedades") {
    const user = {
        name: "Felix",
        age: 17,
        "likes birds": true
    };

    delete user.age;
    ms(Object.entries(user));
}

if (a == "acceso por medio de una variable") {
    const user = {
        name: "Felix",
        age: 30
    };

    let key = prompt("¿Que te gustaria saber acerca del usuario?", "name");
    alert( user[key]);
}

if (a == "metodo toString") {
    const user = {
        name: "Felix",
        talk: function() {
            return "Hello";
        }
    };
    ms(user.name);
    ms(user.talk);

    ms(user.toString());
    //Devuelve "[object Object]"
    //representacion textual de un objeto genérico
}

//propiedades calculadas
if (a == 1) {
    let fruit = prompt("¿What fruit to buy?", "Manzana");

    const bag = {
        [fruit]: 5,
    }

    alert()
}

if (a == 2) {
    let fruit = 'apple';
    let bag = {
        [fruit + 'Computers']: 5
    }
    //bag.appleComputers = 5
}

//atajo para valores de propiedad
if (a == 3) {
    function makeUser(name, age) {
        return {
            name, //igual que name: name
            age: age
        }
    }

    let user = makeUser("Felix", 17)
    ms(user.name)
}

//limitaciones de nombres de propiedad
if (a == 4) {
    let object = {
        for: "advance",
        let: "they advanced",
        return: "we will advance"
    }
    alert(object.for)
}

if (a == 5) {
    let obj = {
        0: "test" //igual que "0": "test"
    }

    alert( obj[0])
    alert( obj["0"])
}

//provar propiedades existentes (operador in)
if (a == 6) {
    let user = {}

    alert("name" in user)
}

//el bucle "for..in"
if (a == 7) {
    let user = {
    name: "Felix",
    age: 30,
    isAdmin: true
    }

    for (let key in user) {
        alert(key) //name, age, isAdmin
        alert(user[key]) //"Felix", 30, true
    }
}

//ordenado como un objeto
if (a == 8) {
    let codes = {
        "+49": "Germany",
        "+41": "Switzerland",
        "+44": "Great Britain",
        "+1": "USA"
    }
    for (let code in codes) {
        alert(+code);
    }
}

// [JSON] a objeto
if (a == 9) {
    const json = `{
        "name": "Felix",
        "life": 99
    }`

    const user = JSON.parse(json);

    ms(user.name)
}

// objeto a [JSON]
if (a == 10) {
    const user = {
        name: "Felix",
        age: 17,
        id: 1064981680,
    };
    //JSON.stringify(user);

    /* JSON.stringify(user, ["age"])
    JSON.stringify(user, ["name", "age"])
    JSON.stringify(user, []) filtra todo
    JSON.stringify(user, null) no filtra nada */
    
    const json1 = JSON.stringify(user, null, 2)
    //"2" <- los espacios en el json
    console.log(json1)
}

//desestructuring of objects
if (a == 11) {
    const user = {
        name: "Felix",
        role: "Aprendiz",
        age: 17
    }
    const {name: nombre, role = "normaluser", age = 100} = user;

    console.log(nombre);
    console.log({nombre, role, age});
}

//restructuring new objects
if (a == 12) {
    const user = {
        username: "Felix",
        role: "Aprendiz"
    };
    const userPremiun = {
        ...user,
        stitching: 40,
    };
}

//making copies of objects
if (a == 13) {
    const user = {
        username: "Felix",
        role: "Aprendiz",
        age: 17,
        features: ["learn", "code", "paint"]
    };
    const userPremiun = {
        ...structuredClone(user),
        stitching: 40,
    };
    console.log(userPremiun);

    userPremiun.features[0] = "program";

    console.log(user.features);
    console.log(userPremiun.features);
}

//nested structures
if (a == 14) {
    const user = {
        name: "Felix",
        role: "Aprendiz",
        contactInfo: {
            email: "salgadocanga@gmail.com",
            cell: 3143523205,
            address: undefined
        }
    };
    const { contactInfo } = user;
    console.log(contactInfo)

    //extraemos la propiedad email y la cambiamos por nombre correo
    const { contactInfo: {email: correo} } = user;
    console.log(correo);
}

//desestructuring (rest)
if (a == 15) {
    const user = {
        name: "Felix",
        role: "Aprendiz",
        anotherRole: "Programmer"
    };
    const {name,...rest} = user;
}

//desestructured parameters
if (a == 16) {
    const user = {
        name: "Felix",
        role: "Aprendiz",
        life: 99
    }

    function show({name, role, life}) {
        const stars = "⭐".repeat(life/20);
        return `Nombre: ${name} (${role}) ${stars}`;
    }
    alert(show(user));
}

//convert an array to object
if (a == 17) {
    const keys = ["name", "life", "power"];
    const values = ["Felix", 99, 10];
    
    const entries = values.map((value, index) => [keys[index],value]);
    const user = Object.fromEntries(entries);
    ms(Object.entries(user))
}

if (a == "a") {
    const felix = {
    twitter: "@fellsalgado",
    facebook: "Felix Salgado",
    GitHub: "fellsalgado"
    }

    ms(Object.keys(felix))
    ms(Object.values(felix))
    ms(Object.entries(felix))
}

if (a == "b") {
    const person = {
        name: "Felix",
        age: 17,
        hobbies: [
            "reading",
            "games",
            "coding"
        ],
        greet: function() {
            ms("Hello")
        },
        score: {
            maths: 96,
            science: 80
        }
    }

    ms(typeof person);
    ms(person.hobbies);
    ms(person.hobbies[0]);
    person.greet();
    ms(person.score.maths);
}

if (a == "r1") {
    let user = {
        name: "Felix",
        surname: "Salgado"
    }
    ms(user.name)

    user.name = "Gonzalo"
    ms(user.name)

    delete user.name
    ms(user.name)
}