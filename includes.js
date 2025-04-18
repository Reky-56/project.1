const prompt = require('prompt-sync')(); 
function find(words, searchWord) {
    return words.some(word => word.toLowerCase() === 
    searchWord.toLowerCase());
  }
  let words = ["Apple", "Banana", "Orange", "Grapes",];
  console.log(find(words, "banana")); 
  console.log(find(words, "strawberry")); 