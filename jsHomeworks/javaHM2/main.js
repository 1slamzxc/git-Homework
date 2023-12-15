//! 1 

const age = 24
if ( age >=18 ) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний")
}

//! 2

const isStudent = true 
if (isStudent) {
    console.log("Студент")
} else {
    console.log("Не студент")
}

//! 3

const num1 = 8
const num2 = 9

const sum = num1 + num2
console.log(sum)

console.log(num1)
console.log(num2)

//! 4

const day = 6

switch (day) {
    case 6: 
        console.log("Суббота")
}

//! 5

const temperature = 1
if (temperature > 35) {
    console.log("Горячо")
} else if (temperature >20)
{
    console.log("Тепло")
} if (temperature <20)
{ 
    console.log("Холодно")
}

//! 6

const score = 60
const result = (score >=60) ? "Cдал" : "не сдал"

console.log(result)

//! 7

const num = 28
if (num % 2 === 0) {
    console.log("Четное")
} else {
    console.log("Нечетное");
}

//! 8

const language = "Java"
if (language === "Java") {
    console.log("Поддерживается");
} else {
    console.log("Не поддерживается");
}

//! 9

const userRole = "editor"

if (userRole === "admin") {
    console.log("Доступ разрешен");
}  else if (userRole === "editor") {
    console.log("Доступ ограничен");
} else if (userRole === "Viewer") 
{console.log("Доступ запрещен");
} 

//! 10

const a = 5
const b = 10
const c = 3

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b);
} else if (c >= b && c >= a) 
{
    console.log(c);
}

//! 11 

const fruit = "orange" 

if (fruit === "apple") {
    console.log("Краный");
} else if (fruit === "banana") {
    console.log("Желтный");
} else if (fruit === "orange") 
{   console.log("Оранжевый");
}

//! 12 

const income = 600000;
const zarik = (income > 1000000)
    ? "Высокий доход"
    : (income > 500000)
        ?"средний доход"
        :(income > 100000)
            ?"низкий доход"
            :"низкий доход"

    console.log(zarik)

//! 13

const grade = "A"

switch (grade) {
    case "A" :
        console.log("Отлично");
        break;
    case "B" :
        console.log("Хорошо");
        break;
    case "C" :
         console.log("Удов");
         break;
    case "D" :
        console.log("Неудов");
        break;
    case "f" :
        console.log("???");
        break;
    }

//! 14

const password = "qwerty12345"
 
if (password.length >= 9 ) {
    console.log("Пароль надежный");
} else {
    console.log("Пароль слишком короткий");
}

//! 15

const x = 3
const y = 3

const result2 = (x > y)
    ? "x больше y"
    : (x < y)
        ? "x меньше y"
        : "x и y равны"
console.log(result2);

//! 16

const isRaining = true

if (isRaining) {
    console.log("Идет дождь");
} else {
    console.log("Дождя нет");
}

//! 17

const isLeapYear = true

if (isLeapYear) {
    console.log("Год високосный");
}   else {
    console.log("Год не високосный");
}

//! 18

const userInput = ""

if (userInput === "") {
    console.log("Пустая строка");
} else {
    console.log("Строка не пустая");
}

//! 19

const num19 = 20

if (num19 > 0) {
    console.log("положительное");
} else if (num19 < 0) {
    console.log("Отрицательное");
} else if (num19 === 0) 
{   console.log("Ноль");    
}

//! 20

const dayOfWeak = "Вс"

switch (dayOfWeak) {
    case "Пн" :
    console.log("Рабочий день");
    break;
    case "Вт" :
    console.log("Рабочий день");
    break;
    case "Ср" :
    console.log("Рабочий день");
    break;
    case "Чт" :
    console.log("Рабочий день");
    break;
    case "Пт" :
    console.log("Рабочий день");
    break;
    case "Сб" :
    console.log("Выходной");
    break;
    case "Вс" :
    console.log("Выходной");
    break;
    default:
        console.log("???");
}

//! доп

//* 3

const examScore = 100; 
const homeworkScore = 100; 

const all = examScore + homeworkScore;

if (all > 90) {
  console.log("A");
} else if (all > 80) {
  console.log("B");
} else if (all > 70) {
  console.log("C");
} else if (all > 60) {
  console.log("D");
} else {
  console.log("F");
}

//* 4 

const balance = 40
const withdrawal = 500

if (balance >= withdrawal) {
    console.log("Средств достаточно");
} else {
    console.log("Недостаточно средств");
}