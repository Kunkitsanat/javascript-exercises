const palindromes = function (word) {
    let cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 2. กลับด้านข้อความที่ทำความสะอาดแล้ว
    let reword = cleanWord.split('').reverse().join('');
    
    // 3. เช็กว่าเหมือนกันไหม แล้วส่งค่ากลับ (true/false)
    return cleanWord === reword;

};

// Do not edit below this line
module.exports = palindromes;
