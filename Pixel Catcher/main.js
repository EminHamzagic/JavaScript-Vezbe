var playground = document.getElementById('playground');

var cols = 50;
var rows = 25;
var score = document.getElementById('score');
var score_counter = 0;
var time = document.getElementById('time');


for(let i = 0; i < cols * rows; i++){
    var field_element = document.createElement('div');
    field_element.classList.add('field');
    playground.appendChild(field_element);
}

var fields = document.getElementsByClassName('field');

var player_position = cols * rows - (cols * rows / 2);

fields[player_position].classList.add('player');

// fields_arr = Array.from(fields);

var red_position;

function redPixel(){
    while(true){
        red_position = Math.floor(Math.random() * ((cols * rows - 1) - 1) + 1)
        if(red_position === player_position){
            continue;
        }
        fields[red_position].classList.add('red_pixel');
        break
    }
}

redPixel();

function MoveUp(){
    if (player_position > cols - 1){
        fields[player_position].classList.remove('player');
        fields[player_position - cols].classList.add('player');
        player_position -= cols;
    }
}

function MoveDown(){
    if (player_position < rows * cols - cols){
        fields[player_position].classList.remove('player');
        fields[player_position + cols].classList.add('player');
        player_position += cols;
    }
}

function MoveLeft(){
    if (player_position % cols > 0){
        fields[player_position].classList.remove('player');
        fields[player_position -1].classList.add('player');
        player_position -= 1;
    }
}

function MoveRight(){
    if (player_position % cols < cols - 1){
        fields[player_position].classList.remove('player');
        fields[player_position +1].classList.add('player');
        player_position += 1;
    }
}

window.onkeydown = function(event) {
    if (event.keyCode == 87) {
       MoveUp();
    }
    else if (event.keyCode == 83){
        MoveDown();
    }
    else if(event.keyCode == 65){
        MoveLeft();
    }
    else if(event.keyCode == 68){
        MoveRight();
    }
    if(red_position === player_position){
        fields[red_position].classList.remove('red_pixel');
        redPixel();
        score_counter++;
        score.innerText = score_counter;
    }
}