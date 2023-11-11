//! 1

const a = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Промис выполнено успешно")
    },2000)
})

a.then(function(result) {
    console.log(result);
})

//! 2

const b = new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject("Ошбика!!!")
    },3000);
})

b.catch(function(name2){
    console.log(name2);
})

//! 3

function EvenNumbers(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("Четное")
        } else{reject("Ошибка - Нечетное")}
    })
}

const q = 3

EvenNumbers(q).then((result3) => {
    console.log(result3);
})

.catch((error) => {
    console.log(error);
})

//! 4

const myfetch = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())

const w = new Promise((resolve, reject) => {
    myfetch.then(data => {
    console.log(data);
    resolve(data)
  }).catch(function(error) {
    console.error(error);
    reject(error)
  });
})