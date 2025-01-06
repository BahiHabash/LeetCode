/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function(boxes) {
    const minOperations = new Array(boxes.length).fill(0);

    for (let i = 0; i < boxes.length; i++) {
        let minOperation = 0;

        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j] === '1')
                minOperation += Math.abs(i - j);
        }

        minOperations[i] = minOperation;
    }

    return minOperations;
};