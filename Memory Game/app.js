const playground = document.getElementById('playground');
const cardInner = document.getElementsByClassName('card_inner');
const cardsBack = document.getElementsByClassName('card_back');
var rand = 0;
var available = [2, 2, 2, 2, 2, 2, 2, 2, 2];
const cards = document.getElementsByClassName('card');
var checked = 0;
var pair = [];
var pairId = [];
const timerTxt = document.getElementById('time');
var time_secs = 90  ;
timerTxt.innerText = time_secs;
const pairsTxt = document.getElementById('pLeft');

var game_active = true;
const cardTypes = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
}


for (let i = 0; i < 18; i++){
    var card = document.createElement('div');
    card.classList.add('card');

    var card_inner = document.createElement('div');
    card_inner.classList.add('card_inner');

    var card_front = document.createElement('div');
    card_front.classList.add('card_front');
    card_front.innerHTML += '<h1>?</h1>';

    var card_back = document.createElement('div');
    card_back.classList.add('card_back');

    card_inner.appendChild(card_back);
    card_inner.appendChild(card_front);
    card.appendChild(card_inner);

    playground.appendChild(card);
}

for (let el of cardInner){
    el.addEventListener('click', () => {
        el.style.transform = 'rotateY(180deg)';
    })
}

for (let i = 0; i < cardsBack.length; i++){
    rand = Math.floor(Math.random() * (9 - 1 + 1)) + 1
    if (available[rand - 1] != 0){
        cardsBack[i].classList.add(cardTypes[rand]);
        cardsBack[i].parentElement.parentElement.setAttribute('data-key', rand);
        available[rand - 1] -= 1;
    }
    else{
        while(true){
            rand = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            if (available[rand - 1] != 0){
                cardsBack[i].classList.add(cardTypes[rand]);
                cardsBack[i].parentElement.parentElement.setAttribute('data-key', rand);
                available[rand - 1] -= 1;
                break
            }
        }
    }
}

for (let i = 0; i < cards.length; i++){
    cards[i].setAttribute('data-id', i);
}

var pairsLeft = 9;
for (let card of cards){
    card.addEventListener('click', () => {
        checked++;
        pair.push(card.getAttribute('data-key'));
        pairId.push(card.getAttribute('data-id'));
        if (checked == 2){
            if (pair[0] === pair[1]){
                checked = 0;
                pair = [];
                pairId = [];
                pairsLeft--;
                pairsTxt.innerText = `Pairs left: ${pairsLeft}`;
                if (pairsLeft === 0){
                    document.getElementById('replay').style.display = 'flex';
                }
            }
            else{
                checked = 0;
                pair = [];
                setTimeout(() => {
                    document.querySelector(`[data-id='${pairId[0]}']`).firstChild.style.transform = 'rotateY(360deg)'
                    document.querySelector(`[data-id='${pairId[1]}']`).firstChild.style.transform = 'rotateY(360deg)'
                    pairId = [];
                }, 500)
            }
        }
    })
}

function time_func(){
    if (time_secs > 0){
        time_secs--;
        timerTxt.innerText = time_secs;
    }
    else{
        document.getElementById('replay').style.display = 'flex';
        game_active = false
    }
}

var Timer = setInterval(time_func, 1000)

document.getElementById('replayBtn').addEventListener('click', () => {
    window.location.reload(true);
})