const palindromes = function (str) {
    // let str = 'racecarZZZZ car, a man, a maracaz.';
    let filterStr;
    let reverseStr = [];
    let j = 0;
    filterStr = str.split('');
    
    filterStr = filterStr.filter(char =>char !== '.' && char !== ',' && char !== ' ' && char !== '!');
    
    
    
    for (let index = filterStr.length-1; index > -1; index--) {
        reverseStr[j] = filterStr[index];
        j++;
        
    };
    
    let filterStrJoin = filterStr.join('').toLowerCase();
    let reverseStrJoin = reverseStr.join('').toLowerCase();
    if (filterStrJoin == reverseStrJoin){
        return true;
    }
    else {
        return false;
    }
};
palindromes('racecar');
palindromes('racecar!');
palindromes('Racecar!');
palindromes('A car, a man, a maraca.');
palindromes('Animal loots foliated detail of stool lamina.');
palindromes('ZZZZ car, a man, a maracaz.');
palindromes('rac3e3car');
palindromes('r3ace3car');

// Do not edit below this line
module.exports = palindromes;
