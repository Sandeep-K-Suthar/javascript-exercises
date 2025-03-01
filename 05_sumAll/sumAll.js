const sumAll = function(a,b) {
let sum = 0;
if(a<b){
for (;a<=b;a++){
    sum = sum+a;
}
}
else if(a>b){
    for (;a>=b;a--){
        sum = sum+a;
    }
}
else{
sum =a+b;
}
return sum;
};
sumAll(3,1);

// Do not edit below this line
module.exports = sumAll;
