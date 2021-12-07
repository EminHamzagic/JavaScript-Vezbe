var playground = document.getElementById('playground');

var cols = 20;
var rows = 10;

for(i = 0; i < cols * rows; i++){
    playground.innerHTML += '<div class = "field "><div>\n';
}

var fields = document.getElementsByClassName('field');

fields[fields.length - 1].classList.add('player');

var player_position = cols * rows - 1;

// fields_arr = Array.from(fields);

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
}