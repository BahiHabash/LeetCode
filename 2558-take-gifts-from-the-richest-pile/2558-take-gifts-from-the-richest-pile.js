/**
 * @param {number} item item to be inserted
 * @param {number[]} arr array to insert the item in
 */
const insert = function (item, arr) {
    arr.push(item);

    for (let i = arr.length - 1; i >= 1; i--) {
        if (arr[i] < arr[i - 1]) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        } else {
            break;
        }
    }
};


/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
const pickGifts = function(gifts, k) { // time: O(n*log(n) + k*n)
    gifts.sort((a, b) => a - b);

    while (k--) {
        const remaining = Math.trunc( Math.sqrt(gifts.pop()) );
        insert(remaining, gifts);
    }

    return gifts.reduce((acc, n) => acc + n, 0);
};

