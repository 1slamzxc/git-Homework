//! 1

const body = document.getElementsByTagName('body')

document.body.addEventListener('keypress', function(event) {
    if(event.key === "r" || event.key === "R"){
        document.body.style.backgroundColor = (document.body.style.backgroundColor === 'red') ? '#fff' : 'red';
    } else if(event.key === "g") {
        document.body.style.backgroundColor = (document.body.style.backgroundColor === 'green') ? '#fff' : 'green';
    } else if(event.key === "b") {
        document.body.style.backgroundColor = (document.body.style.backgroundColor === 'blue') ? '#fff' : 'blue';
    } else if(event.key === "w" || event.key === "W") {
        document.body.style.backgroundColor = (document.body.style.backgroundColor === 'white') ? '#fff' : 'white';
    } else if(event.shiftKey && event.key === "B") {
        document.body.style.backgroundColor = (document.body.style.backgroundColor === 'black') ? '#fff' : 'black';
    } else if(event.shiftKey && event.key === "G") {
        document.body.style.backgroundColor = (document.body.style.backgroundColor === 'gray') ? '#fff' : 'gray';
    } 
}) 

//! 2

let i = 0

document.addEventListener('keypress', function(event2) {
    if (event2.key === "Enter") {
        i *= 2
    }
    console.log(i);
})

//! 3

const imgBTN = document.querySelector('#imgBTN');
const img = document.querySelector('#img');

imgBTN.addEventListener('click', function() {
    img.classList.add('fade-out');
});

//! 4

const outputText = document.querySelector('.text')
const inputText = document.querySelector('.input-text')

inputText.addEventListener('input', function() {
    outputText.textContent = inputText.value;
})

//! 5

var container5 = document.querySelector('.container5');

container5.addEventListener('click', function(event) {
    const x = event.x - container5.getBoundingClientRect().left;
    const y = event.y - container5.getBoundingClientRect().top;

    console.log("x = " + x + " y = " + y);
});

//! 6

var colorInput = document.getElementById('colorInput');

colorInput.addEventListener('input', function() {
document.body.style.backgroundColor = colorInput.value;
});

//! Доп

//* 1

const btnStart = document.querySelector('.btn_start');

btnStart.addEventListener('click', function(){
    const car1 = document.querySelector('#car1');
    const car2 = document.querySelector('#car2');
 
    const randomDurationCar1 = Math.floor(Math.random() * 10) + 5;
    const randomDurationCar2 = Math.floor(Math.random() * 10) + 5; 

    car1.style.animationDuration = randomDurationCar1 + 's';
    car2.style.animationDuration = randomDurationCar2 + 's';

    car1.classList.add('car');
    car2.classList.add('car');

    car1.addEventListener('animationend', function() {
        determineWinner('Красная машина');
    });

    car2.addEventListener('animationend', function() {
        determineWinner('Оранжевая машина');
    });
})

function determineWinner(winner) {
    alert(`Победитель ${winner} !!!`)
}
