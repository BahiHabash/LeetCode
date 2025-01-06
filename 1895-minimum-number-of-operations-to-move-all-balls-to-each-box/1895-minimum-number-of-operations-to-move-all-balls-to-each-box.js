/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function(boxes) {
    let [leftOnes, rightOnes] = [0, 0];
    let [leftCost, rightCost] = [0, 0];

    // Calc minOPeration for the first box
    for (let i = 1; i < boxes.length; i++) {
        if (boxes[i] === '1') {
            rightOnes++;
            rightCost += i;
        }
    }

    // calc the minOPeration for the remaining boxes
    const minOperations = new Array(boxes.length).fill(0);
    minOperations[0] = rightCost;

    for (let i = 1; i < boxes.length; i++) {
        // update right oprations
        if (boxes[i] === '1') {
            rightCost--;
            rightOnes--;
        }
        rightCost -= rightOnes;

        // update left operations
        if (boxes[i - 1] === '1') {
            leftOnes++;
        }
        leftCost += leftOnes;

        // clac minOpearation for current box
        minOperations[i] = leftCost + rightCost;
    }

    return minOperations;
};