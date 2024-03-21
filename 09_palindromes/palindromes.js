const palindromes = function (text) {
    //Set text to lowercase then replace all non alphanumeric characters with empty character
    let simpleText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    //Split the text up to individual characters reverse them then join them back together
    let reverse = simpleText.split('').reverse().join('');
    //If text equals reverse text return true otherwise return false
    return (simpleText == reverse);
};

// Do not edit below this line
module.exports = palindromes;
