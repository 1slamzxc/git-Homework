//! 1

const user = {
    name: "Islam",
    age: 24,
    information: function() {
        console.log(`name: ${this.name}  age:${this.age}`);
    }
}
user.information()

//! 2

const car = {
    marka: "Lexus",
    information2: function() {
        return "моя машина - " + this.marka
    }
}

console.log(car.information2());

//! 3

const krug = {
    radius: 25,
    information3: function() {
        return 
    }
}

//! 4 

const calculate = {
    num1: 9,
    num2: 8,
    slojit: function() {
    return this.num1 + this.num2
    },
    umnojit: function() {
    return this.num1 * this.num2
    }
}

console.log(calculate.slojit());
console.log(calculate.umnojit());

//! 5


function getDayOfWeek() {
        const DaysOfTheWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        const Today = new Date();
        const dayoftheweek = Today.getDay();
        
        return "Сегодня " + DaysOfTheWeek[dayoftheweek];
    }


console.log(getDayOfWeek());

//! 6

const product = {
    name: "Котлеты",
    price: 240,
    information6: function() {
        return console.log("Продукт: " + `${this.name}` +   `   Цена: ` + `${this.price}` + "Сом");
    }
}

product.information6()

//! 7

const animal = {
    name: "Кошка",
    sound: function() {
        return console.log(`${this.name} ` + "издает звук: Мяу");
    }
}

animal.sound()