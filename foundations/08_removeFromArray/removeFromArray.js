const removeFromArray = function(arr,...nums) {
    return arr.filter((value) => !nums.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
