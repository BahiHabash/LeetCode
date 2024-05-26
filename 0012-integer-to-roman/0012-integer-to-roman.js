/**
 * @param {number} number
 * @return {string}
 */
const intToRoman = function(number) {
    const numSymbol = {
        1 : 'I',
        5 : 'V',
        10 : 'X',
        50 : 'L',
        100 : 'C', 
        500 : 'D', 
        1000 : 'M',
        4 : 'IV',
        9 : 'IX', 
        40 : 'XL', 
        90 : 'XC', 
        400 : 'CD', 
        900 : 'CM',
    }

    let roman = '';
    let num = number;
    const val = getVal();

    while (num) {
        const currNum = val(num % 10);

        if (numSymbol[currNum])
            roman = numSymbol[currNum] + roman;
        else {
            if(currNum > 1000) {
                roman = numSymbol[1000].repeat(currNum / 1000) + roman;
            }
            else if (currNum > 500) {
                roman = numSymbol[500] + numSymbol[100].repeat((currNum - 500) / 100) + roman;
            }
            else if (currNum > 100) {
                roman = numSymbol[100].repeat(currNum / 100) + roman;
            }
            else if (currNum > 50) {
                roman = numSymbol[50] + numSymbol[10].repeat((currNum - 50) / 10) + roman;
            }
            else if (currNum > 10) {
                roman = numSymbol[10].repeat(currNum / 10) + roman;
            }
            else if (currNum > 5) {
                roman = numSymbol[5] + numSymbol[1].repeat(currNum - 5) + roman;
            }
            else {
               roman = numSymbol[1].repeat(currNum) + roman;         
            }
        }

        num = Math.floor(num / 10);
    }

    return roman;
};

const getVal = function() {
    let x = 0;
    return function(n) {
        return n * (10 ** x++);
    }
}