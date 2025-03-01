const leapYears = function(year) {
 let leap = Boolean;
 if(year % 4 == 0){
    if (year % 100 == 0){
        if (year % 400 == 0){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
 }
 else {
    return false;
 }
};
leapYears(1800);

// Do not edit below this line
module.exports = leapYears;
