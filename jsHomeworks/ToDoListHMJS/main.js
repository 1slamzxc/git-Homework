const input = document.getElementById('todoText');
const list = document.getElementById('list');
const btn = document.getElementById('btn');


input.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        btn.click()
    }
})

function btnClick() {
    if (input.value === "") {
        alert('Пусто');
        return;
    }

    let li = document.createElement('li');
    const div = `<div>${input.value}</div> <div><img src="edit.png" alt="edit" class="todo-controls edit" onclick="Edit(this)"> <img src="delete.png" alt="delete" class="todo-controls delete" onclick="deleteBTN(this)"></div>`;

    li.innerHTML = div;
    list.appendChild(li);

    let textElement = li.querySelector('div');

    textElement.addEventListener('dblclick', function() {
    if (textElement.style.textDecoration === "line-through") {
        textElement.style.textDecoration = "none";
    } else {
        textElement.style.textDecoration = "line-through";
    }
});
    

    input.value = "";
    list.insertBefore(li, list.firstChild)
}

function Edit(e) {
    const divElement = e.parentElement.parentElement.querySelector("div");
    if (divElement) {
        divElement.contentEditable = !divElement.isContentEditable;
    } 
    else (divElement.isContentEditable) 
    {
        divElement.focus();
    }
}

function deleteBTN(element) {
    if (element && element.parentElement) {
        element.parentElement.parentElement.remove();
    }
}