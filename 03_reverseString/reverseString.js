const reverseString = function(word) {
    let reverse = '';
    let length = word.length;
    for (let i = length - 1; i >= 0; i--){
        reverse += word[i];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
