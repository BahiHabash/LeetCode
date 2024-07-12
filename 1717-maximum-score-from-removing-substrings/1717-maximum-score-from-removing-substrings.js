/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const maximumGain = function(s, x, y) {
    let X = {
        val: x,
        str: 'ab',
    };
    let Y = {
        val: y,
        str: 'ba',
    };

    // always make x > y
    if (x < y) {
        [X, Y] = [Y, X];
    }

    let maxGain = 0
      , stack = [];

    for (const char of s) {
        if (char !== 'a' && char !== 'b' && stack.length) {
            maxGain += calcMaxGain(stack, X, Y);
            stack = [];
        } else {
            stack.push(char);
        }
    }

    if (stack.length) {
        maxGain += calcMaxGain(stack, X, Y);
        stack = [];
    }

    return maxGain;
};

const calcMaxGain = function(arr, X, Y) {
    let maxGain = 0;

    if (arr.length <= 1) {
        return maxGain;
    }

    let stack = [];

    // calc 'ab' gain
    for (const char of arr) {
        if (stack.length && stack[stack.length - 1] + char === X.str) {
            maxGain += X.val;
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    arr = stack;
    stack = [];

    // calc 'ba' gain
    for (const char of arr) {
        if (stack.length && stack[stack.length - 1] + char === Y.str) {
            maxGain += Y.val;
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return maxGain;
};
