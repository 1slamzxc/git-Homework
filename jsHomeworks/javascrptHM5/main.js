//! 1

const string1 = "Hello "
const string11 = "world"
const result1 = concatString(string1, string11)

function concatString(string1,string11) {
    return string1.concat(string11)
}

console.log(result1);

//! 2

function replace (string2, search, replacement) {
    return string2.replaceAll(search, replacement);
  }
  
  const string2 = "stroka stroka stroka. stroka";
  const searchString2 = "abs abs abs";
  const replacementString = "текст";
  
  const newString = replace(string2, searchString2, replacementString);
  
  console.log(newString);

  //! 3

  function stringToLowerCase(inputString) {
    return inputString.toLowerCase();
  }
  
  const string3 = "HELLO wORld";
  const lowerCaseString = stringToLowerCase(string3);
  
  console.log(lowerCaseString);

  //! 4

  function stringIncludes(string4, trueString) {
    return string4.includes(trueString);
  }

  const string4 = "HEllo";
  const trueString = "HEllo";
  
  const truefalse = stringIncludes(string4, trueString);
  
  console.log(truefalse);

  //! 5 ?? 

  const findIndexOf = (mainString, string5) => mainString.indexOf(string5);

  const text = "Не понятно почему -1 возвращает";
  const string5find = "asd";

  const indexOfString = findIndexOf(text, string5find);

  console.log(indexOfString);

  //! 6

  function splitString(String6) {
    return String6.split(" ");
  }
  
  const String6 = "ХЕЛЛО ХЕЛЛО ХЕЛЛО ХЕЛЛО ХЕЛЛО";
  const words = splitString(String6);
  
  console.log(words);

  //! 7

  function getSubstring(string7, start, end) {
    return string7.slice(start, end);
  }
  
  const String7 = "Hello world";
  const startIndex = 0;
  const endIndex = 8;
  
  const substring = getSubstring(String7, startIndex, endIndex);
  
  console.log(substring);

  //! 8

  function ToString8(number) {
    return number.toString();
  }

  const myNumber = 42;
  const stringNumber = ToString8(myNumber);
  
  console.log(stringNumber);

  //! 9 

  function ToFloat9(reString) {
    return parseFloat(reString);
  }
  
  const numberString = "322341";
  const floatValue = ToFloat9(numberString);
  
  console.log(floatValue);

  //! 10

  const sumNumbers = (num1, num2) => num1 + num2;

  const result10 = sumNumbers(5, 7);
  
  console.log(result10);

  //! 11 

  function getFixedNumber(number) {
    return number.toFixed(6);
  }
  
  const myNumber11 = 5.678910;
  const formattedNumber = getFixedNumber(myNumber11);
  
  console.log(formattedNumber);

  //! 12

  function toNum(string12) {
    return parseInt(string12)
  }

  const stringtoNum = "25"
  const num12 = toNum(stringtoNum)

  console.log(num12);

  //! 13

  function addNumbers(num13, num113) {
    return num13 + num113;
  }

  const result13 = addNumbers(5, 5);
  console.log(result13);


  //! 14

  function parseFloatFromString(string14) {
    return parseFloat(string14)
  }

  let string14 = "3.14"
  let result14 = parseFloatFromString(string14)
  console.log(result14);

  //! 15

  const fruits = ["Банан", "яблоко", "киви", "апельсин"]

  fruits.push("груша")
  fruits.pop()

  console.log(fruits);
  
  //! 16

  const number = [1,2,3,4,5,6,7,8,9,10]

  const number16 = number.slice(1, number.length, 2)

  let NumbersString = number16.join(", ");

  console.log(NumbersString);

  //! 17 

  const colors = ["black", "blue", "tomato", "yellow", "white"]

  colors.unshift("pink");

  colors.shift();

  console.log(colors);

  //! 18

  let firstArray = [1, 2, 3];
  let secondArray = [4, 5, 6];

  let mergedArray = firstArray.concat(secondArray);

  const searchValue = 6;
  const containsValue = mergedArray.includes(searchValue);

  if (containsValue) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }

  //! 19

  let animals = ["слон", "тигр", "лев", "крокодил"];
  let newAnimal = "жираф";

  animals.push(newAnimal);

  let index = animals.indexOf(newAnimal);

  console.log("индекс нового животного" + ": " + index);

  //! 20 

  let numbers = [1, 2, 3, 4, 5];

  let slicedArray = numbers.slice(0, 2);

  slicedArray.reverse();

  let result20 = slicedArray.toString();

  console.log(result20);

  //! 21 

  let fruits21 = ["яблоко", "банан", "апельсин"];

  fruits21.unshift("киви");

  fruits21.shift();

  console.log(fruits21);

  //! 22 

  let firstArray22 = [1, 2, 3];
  let secondArray22 = [4, 5, 6];

  let mergedArray22 = firstArray22.concat(secondArray22);

  const searchValue22 = 6;
  const containsValue22 = mergedArray22.includes(searchValue22);

  if (containsValue22) {
    console.log(`2 раза написали, 2 посление задания`);
  } else {
    console.log(`false`);
  }

  

  










