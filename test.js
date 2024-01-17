const persona = {
    name: 'John',
    lastname: 'Doe',
    address: '',
    age: 19,
    gender: 'Man'
}

const { name, lastname } = persona;

// const fullname = `${persona.name} ${persona.lastname}`;
const fullname = `${name} ${lastname}`;

const nombres = ["Hugo", "Paco", "Luis", "Donald"];

const [nombre1, nombre2, nombre3] = nombres;
//const [,b,,d] = nombres;

console.log(nombre1)
console.log(nombre2)
console.log(nombre3)


let a = 10;
let b = 15;

/* let temp = a;
a = b;
b = temp; */

[a, b] = [b, a];