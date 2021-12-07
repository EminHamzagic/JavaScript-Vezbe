var playground = document.getElementById('playground')

for(i = 0; i < 50; i++){
    playground.innerHTML += '<div class = "field "><div>\n'
}

var fields = document.getElementsByClassName('field')

fields[fields.length - 1].classList.add('player')

for (x of fields){
    if (x.classList.contains('player')){
        console.log(fields.indexOf(x))
        break
    }
}

// function MoveUp(){
//     if ()
// }

// window.onkeydown = function(event) {
//     if (event.keyCode == 87) {
       
//     }
//  }