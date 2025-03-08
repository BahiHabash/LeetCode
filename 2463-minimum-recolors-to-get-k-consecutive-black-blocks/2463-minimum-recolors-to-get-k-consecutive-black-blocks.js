/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
function minimumRecolors(blocks, k) {
    let minOperations = Infinity;
    let currOperations = 0;
    let window = '';
    
    for (let i = 0; i < k; i++) {
        currOperations += blocks[i] === 'W';
        window += blocks[i];
    }
    minOperations = Math.min(minOperations, currOperations);

    for (let i = k; i < blocks.length; i++) {
        currOperations -= window[0] === 'W';
        window = window.slice(1);

        currOperations += blocks[i] === 'W';
        window += blocks[i];

        minOperations = Math.min(minOperations, currOperations);
    }

    return minOperations;
}