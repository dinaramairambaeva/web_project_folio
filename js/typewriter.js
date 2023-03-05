let typewriter = document.getElementById('typewriter');

let words = [
    'Freelancer.',
    'Designer.',
    'Developer.',
]

let charTurn = 0;
let wordTurn = 0;
printWord();

function printWord(){
    if (charTurn <= words[wordTurn].length){
        typewriter.innerHTML = words[wordTurn].substring(0, charTurn);
        charTurn++;
        setTimeout(printWord, 100)
    } else {
        setTimeout(deleteWord, 500)
    }
}

function deleteWord(){
    if (charTurn >= 0){
        typewriter.innerHTML = words[wordTurn].substring(0, charTurn);
        charTurn--;
        setTimeout(deleteWord, 100)
    } else {
        if (wordTurn < words.length - 1){
            wordTurn++;
        } else{
            wordTurn = 0;
        }
        
        charTurn = 0;
        setTimeout(printWord, 500)
    }
}