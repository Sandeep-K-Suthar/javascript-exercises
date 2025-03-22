const fibonacci = function (numPositin) {
    let fibonacciNum1 = 1;
    let fibonacciNum2 = 1;
    let convert;
    convert = numPositin;
    if (numPositin === 'string') {

        convert = parseInt(numPositin);
    }
    else if (convert < 0) {
        return 'OOPS';
    }
    else if (convert == 0) {
        return 0;

    }
    else if (convert == 1 || convert == 2) {
        return 1;
    }
    else if (convert > 2) {
        for (let index = 2; index < convert; index++) {

            sum = fibonacciNum1 + fibonacciNum2;
            fibonacciNum2 = fibonacciNum1;
            fibonacciNum1 = sum;

        }
        return sum;

    }
};
fibonacci(4);
fibonacci(6);
fibonacci(10);
fibonacci(15);
fibonacci(25);
fibonacci(0);
fibonacci(-25);
fibonacci('0');
fibonacci('1');
fibonacci('2');
fibonacci('8');

// Do not edit below this line
module.exports = fibonacci;
