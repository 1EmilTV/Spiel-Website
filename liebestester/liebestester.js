function printZahl(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
}

let btn = document.getElementById('start');
let para = document.getElementById('percent');
let isClicked = false;

btn.addEventListener('click', function() {
    let x;
    let y; 
    let counter = 0;
    if(isClicked == false) {
        isClicked = true;
        document.getElementById('ihr').innerHTML = (' ');
        document.getElementById('zsm').innerHTML = (' ');
        x = setInterval(function(){
            document.getElementById('percent').innerText = printZahl(0, 100) + ('%');
        counter++;
        if(counter > 40) {
        clearInterval(x)
        add();
        }   
        }, 50);
    }
    else {
        isClicked = false;
        clearInterval(x);
    }
})

function add() {
    document.getElementById('ihr').innerHTML = ('Ihr passt zu ');
    document.getElementById('zsm').innerHTML = ('zusammen!');
}

function löschen() {
    document.getElementById('ihr').innerHTML = "";
    document.getElementById('percent').innerHTML = "";
    document.getElementById('zsm').innerHTML = "";
}
