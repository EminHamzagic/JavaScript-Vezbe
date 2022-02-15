const playground = document.getElementById('playground');

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

var available = [2, 2, 2, 2, 2, 2, 2, 2, 2];

for (let i = 0; i < 18; i++){
    var card = document.createElement('div');
    card.classList.add('card');

    var card_inner = document.createElement('div');
    card_inner.classList.add('card_inner');

    var card_front = document.createElement('div');
    card_front.classList.add('card_front');

    var card_back = document.createElement('div');
    card_back.classList.add('card_back');

    card_inner.appendChild(card_back);
    card_inner.appendChild(card_front);
    card.appendChild(card_inner);
    
    playground.appendChild(card);
}

const cardInner = document.getElementsByClassName('card_inner');

for (let el of cardInner){
    el.addEventListener('click', () => {
        el.style.transform = 'rotateY(180deg)';
    })
}

const cardsBack = document.getElementsByClassName('card_back');
var rand = 0;

for (let i = 0; i < cardsBack.length; i++){
    rand = Math.floor(Math.random() * (9 - 1 + 1)) + 1
    if (available[rand - 1] != 0){
        cardsBack[i].classList.add(cardTypes[rand]);
        available[rand - 1] -= 1;
    }
    else{
        while(true){
            rand = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
            if (available[rand - 1] != 0){
                cardsBack[i].classList.add(cardTypes[rand]);
                available[rand - 1] -= 1;
                break
            }
        }
    }
}