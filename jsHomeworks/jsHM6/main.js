//! 1

function increaseNumberByTen(number) {
    const result = number.map(number => number + 10)
    return result
}

const array = [5,15,25,35]
const newArray = increaseNumberByTen(array)

console.log(newArray);

//! 2

function arrayWordsFunction(words) {
    const word = words.filter(word => word.length > 5)
    return word
}

const words = ["Рука","Ant","Киви","Красивый","Кыргызстан"]
const newWords = arrayWordsFunction(words)

console.log(newWords);

//! 3

function forEachArray(array) {
    array.forEach(number => {
        const square = number * number;
        console.log(square);
    })
}
const numbers = [1,2,3,4,5]
forEachArray(numbers)

//! 4

function getArray(numbers) {
    const total = numbers.reduce((elem, idx) => elem + idx)
    return total
}

const number4 = [1,2,3,4,5]
const sum = getArray(number4)

console.log(sum);

//! 5

function someArray(number5) {
    const even = number5.some(number5 => number5 % 2 === 0)
    return even
}

const numbers5 = [1,2,3,4,5]
const result5 = someArray(numbers5)

console.log(result5);

//! 6

function everyArray(number6) {
    const every = number6.every(number6 => number6 > 0)
    return every
}

const numbers6 = [1,2,3,4,5]
const result6 = everyArray(numbers6)

console.log(result6);

//! 7

function findEven(number7) {
    const firstEven = number7.find(number7 => number7 % 2 === 0)
    return firstEven || null
}

const numbers7 = [1,3,5,8,9]
const result7 = findEven(numbers7)

console.log(result7);

//! 8 

function ToUppercase(strings) {
    return strings.map(function(string) {
        return string.toUpperCase();
    });
  }
  
  const inputStrings = ["apple", "kiwi", "pineaplle", "arbuz"];
  const result = ToUppercase(inputStrings);
  console.log(result);

  //! 9

function getPositiveNumbers(number9) {
    return number9.filter(function(number9) {
        return number9 > 0;
});
}
  
const numbers9 = [1, -2, 3, -4, 5, -6];
const positiveNumbers = getPositiveNumbers(numbers9);
console.log(positiveNumbers);

//! 10

function greetNames(names) {
    names.forEach(function(name) {
    console.log("Hello " + name + "!")
})
}

const names = ["Islam", "Ulan", "Nursultan", "Shabdan"];
greetNames(names);

//! 11

function multiplyArray(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
    return numbers.reduce(function (elem, idx) {
      return elem * idx;
    })
  }
  
const number11 = [2, 3, 4, 5];
const result11 = multiplyArray(numbers);

console.log(result11);

//! 12

function someBigWords(word12) {
    return word12.some(function (string12) {
        return string12.length > 10
    })
}

const string12 = ["ABS", "QWERTY", "QWERTYZXCNU"];
const result12 = someBigWords(string12);

console.log(result12);

//! 13

function findNumberDelenieNa7(number) {
    return number.find(function(numbers){
        return numbers % 7 === 0 
    }) || null
}

const number13 = [8,14,25,64]
const result13 = findNumberDelenieNa7(number13)

console.log(result13);
