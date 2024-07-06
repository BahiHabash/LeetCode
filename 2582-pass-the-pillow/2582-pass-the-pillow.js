/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
const passThePillow = function(n, time) { // time : O(time), space : O(1)
    let position = 1
      , direction = 'right';

    // 1 -> 2 -> 3   , time = 2
    for (let i = 1; i <= time; i++) {
        // move position
        if (direction === 'right') position++;
        else position--;
        // reverse the directions when hit the boundries
        if (position === n) direction = 'left';
        else if (position === 1) direction = 'right';
    }

    return position;
};