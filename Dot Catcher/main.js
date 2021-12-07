var playground = document.getElementById('playground');

for(i = 0; i < 50; i++){
    playground.innerHTML += '<div class = "field "><div>\n';
}

var fields = document.getElementsByClassName('field');

fields[fields.length - 1].classList.add('player');

var player_position = 49;

fields_arr = Array.from(fields);

// for (x of fields_arr){
//     if (x.classList.contains('player')){
//         console.log(fields_arr.indexOf(x))
//         break
//     }
// }


function MoveUp(){
    if (player_position > 9){
        fields[player_position].classList.remove('player');
        fields[player_position - 10].classList.add('player');
        player_position -= 10;
    }
}

function MoveDown(){
    if (player_position < 40){
        fields[player_position].classList.remove('player');
        fields[player_position + 10].classList.add('player');
        player_position += 10;
    }
}

window.onkeydown = function(event) {
    if (event.keyCode == 87) {
       MoveUp();
    }
    else if (event.keyCode == 83){
        MoveDown();
    }
 }