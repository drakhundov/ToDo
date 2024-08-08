document.addEventListener('DOMContentLoaded', function() {
    var affairs = document.getElementsByClassName('affair');
    for (let i = 0; i < affairs.length; i++) {
        affairs[i].appendChild(newCloseBtn());
    }

    var closeBtns = document.getElementsByClassName('close');
    for (let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].onclick = function() { return removeAffair(this) };
    }
    
    var todolist = document.getElementById('todo-list');
    todolist.addEventListener('click', function(event) {
        if (event.target.classList.contains('affair')) {
            event.target.classList.toggle('checked');
        }
    }, false)
})

function newElement() {
    let new_affair = document.createElement('LI');
    new_affair.className = 'affair';

    let title_input = document.getElementById('title');
    let title = title_input.value;

    let text_node = document.createTextNode(title);        
    new_affair.appendChild(text_node);
    
    if (title === '') {
        alert('Invalid Title');
    } else {
        document.getElementById('todo-list').appendChild(new_affair);
    }

    title_input.value = '';

    new_affair.appendChild(newCloseBtn());
    new_affair.querySelector('.close').onclick = function() { return removeAffair(this) };
}

function newCloseBtn() {
    let span = document.createElement('SPAN');
    span.className = 'close';

    let txt = document.createTextNode('\u00D7');
    span.appendChild(txt);

    return span;
}

function removeAffair(affair) {
    let div = affair.parentElement;
    div.style.display = "none";
}