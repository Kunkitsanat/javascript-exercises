const reverseString = function(word) {
    let arr = [...word];
    let new_word = arr.reverse();
    return new_word.join('');
};

// Do not edit below this line
module.exports = reverseString;
