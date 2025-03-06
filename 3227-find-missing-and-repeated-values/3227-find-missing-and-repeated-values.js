/**
 * @param {number[][]} grid
 * @return {number[]}
 */
function findMissingAndRepeatedValues(grid) {
    let sum = 0;
    let repeated;
    const seen = new Set();

    for (const row of grid) {
        for (const num of row) {
            if (seen.has(num)) repeated = num;

            sum += num;
            seen.add(num);
        }
    }

    const n = grid.length;
    const missing = ((n**2 * (n**2 + 1)) / 2) - (sum - repeated);

    return [repeated, missing];
}