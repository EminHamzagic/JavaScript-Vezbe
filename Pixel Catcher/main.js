var playground = document.getElementById('playground');

var cols = 50;
var rows = 25;
var time_mins = 0;
var time_secs = 30;

var score = document.getElementById('score');
var score_counter = 0;
var time = document.getElementById('time');
time.innerText = time_mins + ':' + time_secs;
var game_active = true;

for(let i = 0; i < cols * rows; i++){
    var field_element = document.createElement('div');
    field_element.classList.add('field');
    playground.appendChild(field_element);
}

var fields = document.getElementsByClassName('field');

var player_position = cols * rows - (cols * rows / 2);

fields[player_position].classList.add('player');

var time_func = function (){
    if (time_mins > 0 || time_secs > 0){
        if (time_secs == 0){
            time_mins -= 1;
            time_secs = 60;
        }
        time_secs -= 1;
        time.innerText = time_mins + ':' + time_secs;
        console.log('nice');
    }
    else{
        document.getElementById('replay').style.display = 'flex';
        game_active = false
    }
}

var Timer = setInterval(time_func, 1000);

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
    if (game_active){
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
}

document.getElementById('replay_btn').addEventListener('click', () => {
    game_active = true;
    time_mins = 0;
    time_secs = 30;
    time.innerText = time_mins + ':' + time_secs;
    score.innerText = 0;
    score_counter = 0;
    document.getElementById('replay').style.display = 'none';
    clearInterval(Timer);
    Timer = setInterval(time_func, 1000);
})