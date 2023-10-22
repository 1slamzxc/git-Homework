//! 1

for (let i = 1; i < 51; i++ ) {
    console.log(i)
}

//! 2

let N = prompt("Запрашивает у пользователя N:")
N = parseInt(N);

for (let i = 0; i < N; i++) {
    if (i % 3 === 0 || i % 5 === 0){
        console.log(i);
    }
}

//! 3 

for ( let A = 10; A >= 1; A--) {
    console.log(A);
}

//! 4

let H = prompt("Число H")
H = parseInt(H);

for (let i = 0; i <= H; i++){
    console.log(i);
}

//! 5

let number = 7

for (let c = 1; c <= 10; c++) {
    let result = number * c;
    console.log(number + "*" + c + "=" + result);
}

//! 6

let number1 = prompt("Число")
let sum = 0

for (let q = 0; q < number1.length; q++){
    let chislo = parseInt(number1[q])
    sum+=chislo
}

console.log(sum);

//! 7

let piramid = prompt("Число")
piramid = parseInt(piramid)

for (let e = 1; e <= piramid; e++) {
    let spaces = " ".repeat(piramid - e)
    let stars = "*".repeat(2 * e - 1)
    console.log(spaces + stars);
}