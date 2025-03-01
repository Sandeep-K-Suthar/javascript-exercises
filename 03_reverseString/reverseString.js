const reverseString = function() {
    let string = 'hello';
    let reverse ='';
    let j =string.length;
    for (let i=0;i<string.length;i++){
        reverse += string[--j];
    };
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
