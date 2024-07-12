/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const maximumGain = function(s, x, y) {
    let xStr = 'ab', yStr = 'ba';

    // always make x > y
    if (x < y) {
        [x, y] = [y, x];
        [xStr, yStr] = [yStr, xStr];
    }

    let maxGain = 0, stack = [];

    for (const char of s) {        
        if (stack.length && stack[stack.length - 1] + char === xStr) {
            maxGain += x;
            stack.pop();
        } else if(xStr.includes(char)){
            stack.push(char);
        } else {
            maxGain += calcGainY(stack, y, yStr)
            stack = []; // reset stack to empty state
        }
    }

    // Final gain calculation for remaining characters in the stack
    if (stack.length) {
        maxGain += calcGainY(stack, y, yStr);
    }

    return maxGain;
};

const calcGainY = function(chars, y, yStr) {
    let maxYGain = 0
      , stack = [];

    for (const char of chars) {
        if ((stack.at(-1) ?? '') + char === yStr) {
            stack.pop();
            maxYGain += y;
        } else {
            stack.push(char);
        }
    }

    return maxYGain;
}
