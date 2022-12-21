function longestWord (str) {
    let words = str.split(" ");
    let longestWord = "";

for(let word of words) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
    return longestWord;
}

console.log(longestWord("Don't even ask me about this"));
console.log(longestWord("This is practise, i swear lmao"));