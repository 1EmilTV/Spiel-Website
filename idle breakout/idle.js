var level = 1;
var hp = 1;
var money = 0;
var dmg = 1;
var fidledmg = 0;
var btnclicklvl = 1;
var costclick = 50;
var btnfidlelvl = 0;
var costfidle = 100;
var interval = 1000;
const btnmain = document.getElementById('spiel');
const btnclick = document.getElementById('click');
const btnfidle = document.getElementById('fidle');

startGame();

function startGame() {

    btnclick.innerHTML = ('Klickdmg LVL. ') + btnclicklvl + ('  ') +  costclick + ('€');
    btnfidle.innerHTML = ('Idledmg LVL. ') + btnfidlelvl + ('  ') + costfidle + ('€'); 

    if(money == 0) {
        document.getElementById('moneytext').innerHTML = '0€';
    }

    if(level <= 1000) {
        btnmain.innerHTML = hp;
        if(level <= 100) {
            btnmain.style.background = '#fc0303';
        }
        else if(level > 100 && level < 200) {
            btnmain.style.background = '#fc5a03';
        }
        else if(level >= 200 && level < 300) {
            btnmain.style.background = '#fca103';
        }
        else if(level >= 300 && level < 400) {
            btnmain.style.background = '#f4fc03';
        }
        else if(level >= 400 && level < 500) {
            btnmain.style.background = '#a1fc03';
        }
        else if(level >= 500 && level < 600) {
            btnmain.style.background = '#39fc03';
        }
        else if(level >= 600 && level < 700) {
            btnmain.style.background = '#03dffc';
        }
        else if(level >= 700 && level < 800) {
            btnmain.style.background = '#030bfc';
        }
        else if(level >= 800 && level < 900) {
            btnmain.style.background = '#4e03fc';
        }
        else if(level >= 900 && level < 1000) {
            btnmain.style.background = '#7703fc';
        }
    }
    if (level > 1000) {
        btnmain.innerHTML = ('Ende! Mehr kommt in Zukunft.');
        btnmain.disabled = true;
    }

}

btnmain.addEventListener('click', function() {
    
    hp = hp - dmg;
    if(hp <= 0) {
        money = money + dmg;
        level++;
        hp = level;
        document.getElementById('moneytext').innerHTML = money + ('€');
        btnclick.innerHTML = ('Klickdmg LVL. ') + btnclicklvl + ('  ') +  costclick + ('€');
        btnfidle.innerHTML = ('Idledmg LVL. ') + btnfidlelvl + ('  ') + costfidle + ('€'); 
        startGame();
    }
    else {
        document.getElementById('spiel').innerHTML = hp;
        money = money + dmg;
        document.getElementById('moneytext').innerHTML = money + ('€');
        btnclick.innerHTML = ('Klickdmg LVL. ') + btnclicklvl + ('  ') +  costclick + ('€');
        btnfidle.innerHTML = ('Idledmg LVL. ') + btnfidlelvl + ('  ') + costfidle + ('€'); 
    }
})

btnclick.addEventListener('click', function() {

    if(money < costclick) {
        alert("Du hast nicht genug Geld!");
    }
    else {
        if(money >= 50) {
            if(btnclicklvl == 1) {
                money = money - 50;
                dmg++;
                btnclicklvl++;
                costclick = 100;
            }
        }
        if(money >= 100) {
            if(btnclicklvl == 2) {
                money = money - 100;
                dmg++;
                btnclicklvl++;
                costclick = 150;
            }
        }
        if(money >= 150) {
            if(btnclicklvl == 3) {
                money = money - 150;
                dmg++;
                btnclicklvl++;
                costclick = 200;
            }
        }
        if(money >= 200) {
            if(btnclicklvl == 4) {
                money = money - 200;
                dmg++;
                btnclicklvl++;
                costclick = 250;
            }
        }
        if(money >= 250) {
            if(btnclicklvl == 5) {
                money = money - 250;
                dmg++;
                btnclicklvl++;
                costclick = 300;
            }
        }
        if(money >= 300) {
            if(btnclicklvl == 6) {
                money = money - 300;
                dmg++;
                btnclicklvl++;
                costclick = 350;
            }
        }
        if(money >= 350) {
            if(btnclicklvl == 7) {
                money = money - 350;
                dmg++;
                btnclicklvl++;
                costclick = 400;
            }
        }
        if(money >= 400) {
            if(btnclicklvl == 8) {
                money = money - 400;
                dmg++;
                btnclicklvl++;
                costclick = 450;
            }
        }
        if(money >= 450) {
            if(btnclicklvl == 9) {
                money = money - 450;
                dmg++;
                btnclicklvl++;
                costclick = 500;
            }
        }
        if(money >= 500) {
            if(btnclicklvl == 10) {
                money = money - 500;
                dmg++;
                btnclicklvl++;
                costclick = 'End!';
            }
        }
    }
})

function startInt() {

    let isStarted = false;

    //if(money < costfidle) {
    //    alert("Du hast nicht genug Geld!");
    //}
    //else {
        if(isStarted === false || btnfidlelvl !== fidledmg) {
            isStarted = true;
            if(btnfidlelvl > 0) {

                myInterval = setInterval(function() {

                    if(fidledmg != btnfidlelvl) {
                        clearInterval(myInterval);
                        fidledmg = btnfidlelvl;
                        startInt();
                    }
                    hp = hp - fidledmg;
                    if(level > 1000) {
                        clearInterval(myInterval);
                    }
                    btnmain.innerHTML = hp;
                    if(hp <= 0) {
                        money = money + fidledmg;
                        level++;
                        hp = level;
                        document.getElementById('moneytext').innerHTML = money + ('€');
                        btnclick.innerHTML = ('Klickdmg LVL. ') + btnclicklvl + ('  ') +  costclick + ('€');
                        btnfidle.innerHTML = ('Idledmg LVL. ') + btnfidlelvl + ('  ') + costfidle + ('€'); 
                        startGame();
                    }
                    else {
                        document.getElementById('spiel').innerHTML = hp;
                        money = money + fidledmg;
                        document.getElementById('moneytext').innerHTML = money + ('€');
                        btnclick.innerHTML = ('Klickdmg LVL. ') + btnclicklvl + ('  ') +  costclick + ('€');
                        btnfidle.innerHTML = ('Idledmg LVL. ') + btnfidlelvl + ('  ') + costfidle + ('€'); 
                    }

                }, interval);
            }
        }
        else if (isStarted == true) {
            btnmain.innerHTML = hp;
        }
    //}
}

btnfidle.addEventListener('click', function() {
    counter = 0;
    if(counter <= 2) {
    startInt();
    counter++;
    }
    if(money >= 100) {
        if(btnfidlelvl == 0) {
            money = money - 100;
            btnfidlelvl++;
            costfidle = 200;
        }
    }
    if(money >= 200) {
        if(btnfidlelvl == 1) {
            money = money - 200;
            btnfidlelvl++;
            costfidle = 300;
        }
    }
    if(money >= 300) {
        if(btnfidlelvl == 2) {
            money = money - 300;
            btnfidlelvl++;
            costfidle = 400;
        }
    }
    if(money >= 400) {
        if(btnfidlelvl == 3) {
            money = money - 400;
            btnfidlelvl++;
            costfidle = 500;
        }
    }
    if(money >= 500) {
        if(btnfidlelvl == 4) {
            money = money - 500;
            btnfidlelvl++;
            costfidle = 600;
        }
    }
    if(money >= 600) {
        if(btnfidlelvl == 5) {
            money = money - 600;
            btnfidlelvl++;
            costfidle = 700;
        }
    }
    if(money >= 700) {
        if(btnfidlelvl == 6) {
            money = money - 700;
            btnfidlelvl++;
            costfidle = 800;
        }
    }
    if(money >= 800) {
        if(btnfidlelvl == 7) {
            money = money - 800;
            btnfidlelvl++;
            costfidle = 900;
        }
    }
    if(money >= 900) {
        if(btnfidlelvl == 8) {
            money = money - 900;
            btnfidlelvl++;
            costfidle = 1000;
        }
    }
    if(money >= 1000) {
        if(btnfidlelvl == 9) {
            money = money - 1000;
            btnfidlelvl++;
            costfidle = 'End!';
        }
    }

})
