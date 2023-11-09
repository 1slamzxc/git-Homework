//! 1

const person = {
    name: "Islam",
    age: 24,
    pol: "Мужской",
    city: "Bishkek"
}

const {name, age, pol, city} = person  // сделал с помощью оператора rest

console.log(name, age, pol, city);

//! 2

const num = [1,2,3,4,5]

const [a, , , , b] = num

console.log(a , b);

//! 3

function informationPerson(person) {
    const {name3, age3} = person;
    return {name3, age3}
}

const info = {
    name3: "Ulan",
    age3: 24,
    city: "Bishkek"
}

const {name3, age3} = informationPerson(info)

console.log(name3, age3);

//! 4

let q = 5;
let w = 10;

[q, w] = [w, q];

console.log(q);
console.log(w);

//! 5

const company5 = {
    companyName: "Tunduk",
    address: "bla bla",
    informationAboutPersons: [
        {
            Name: "Sbabdan",
            age: 24,
            city: "bishkek"
        }, {
            Name: "Nursultan",
            age: 24,
            city: "bishkek"
        }
    ]
}

const {companyName, informationAboutPersons: [{Name}] } = company5

console.log(companyName, Name);

//! 6

const array = [
    {name: "Alibek", age: 20, city: "Bishkek"},
    {name: "Baibol", age: 20, city: "Bishkek"},
    {name: "Askat", age: 20, city: "Bishkek"},
    {name: "Amantur", age: 20, city: "Bishkek"}
]

for (let i = 0; i < array.length; i++) {
    const { name, age } = array[i];
    console.log("Имя:", name, "Возраст:", age);
}