//! 1

const h3 = document.getElementsByTagName('h3')

for(let i = 0; i < h3.length;i++){
    h3[i].textContent = "!!!"
}

//! 2

for(let i = 0; i < h3.length; i++) {
    h3[i].style.color = 'green'
}

//! 3

const ul = document.querySelector('#ulList')

for (let index = 1; index < 31; index++) {
    const element = document.createElement('li')
    element.textContent = `${index} Овечка`
    ul.appendChild(element)
}

//! 4

const active = document.getElementsByTagName('span')

for(let q = 0; q < active.length; q++) {
    active[q].classList.add('Active')
}

//! 5

const strong = document.getElementsByTagName('strong')

for (let index = 0; index < strong.length; index++) {
    strong[index].style.color = "green"
}

//! 6

const em = document.getElementsByTagName('em')

for (let index = 0; index < em.length; index++) {
    em[index].classList.add('selected')
}

//! 7

const mark = document.getElementsByTagName('mark')

for (let index = 0; index < mark.length; index++) {
    mark[index].classList.add('selected')
}

//! 8

const a = document.getElementsByTagName('a')

for (let index = 0; index < a.length; index++) {
    a[index].style.textDecoration = 'none'
}

//! 9

var strongTags = document.querySelectorAll('strong');

strongTags.forEach(function (strongTag) {
    if (strongTag.classList.contains('some')) {
        strongTag.classList.remove('some');
    } else {
        strongTag.classList.add('some');
    }
});

//! 10 - 12!!!

const row = document.querySelectorAll('.row');

for (let index = 0; index < row.length; index++) {
    if (index === 0 && row[index].classList.contains('row')) {
        row[index].classList.remove('row');
    } else (index === 2)                       
    {
        row[index].classList.remove('row');
        row[index].classList.add('third')
    }
}

//! 11

if (a.length >= 2) {
    a[1].classList.add('color');
    const computedStyles = getComputedStyle(a[1]);
    const color = computedStyles.color;
}

//! 12

// for (let index = 0; index < row.length; index++) {
//     if (index == 2) {
//         row[index].classList.remove('row');
//         row[index].classList.add('third')  //! ????
//     }
// }

//! 13

const w = document.querySelector('.row-inner')

w.style.color = 'pink'

//! 14 

const rowInputDiv = document.querySelector('.row-input');

const inputElement = document.createElement('input');
    
inputElement.setAttribute('type', 'text');
inputElement.classList.add('input');
rowInputDiv.appendChild(inputElement);

//! 15

inputElement.style.backgroundColor = 'yellow'

//! 16

inputElement.setAttribute('placeholder', 'плейсхолдер');

//! 17

const a17 = document.querySelector('.row_outer');

a17.style.setProperty('font-size', '100px');

//! 18

const a18 = document.querySelector('.last')

a18.textContent = 'Last but not least'

//! 19

a18.style.fontWeight = 'bold'
    
