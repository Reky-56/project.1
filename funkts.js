function swapLetter(text){
    var swappedText = ''; 
    for(let i = 0; i<text.length;i++) {
        if(text[i].toUpperCase())(
            swappedText += text[i].toLowerCase()

        ) else {
            swappedText += text[i].toLowerCase();
        }
    }
    return swappedText;

}

var word = 'Hello WorLD' ;

console.log(swapLetter(word));