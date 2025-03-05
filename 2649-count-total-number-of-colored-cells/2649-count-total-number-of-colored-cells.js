/**
 * @param {number} n
 * @return {number}
 */
function coloredCells (n) {
    let numOfColoredCells = 1;
    let curr = 4;

    while (--n) {
        numOfColoredCells += curr;
        curr += 4;
    }


    return numOfColoredCells;
}