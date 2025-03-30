/**
 * @param {string} s
 * @return {number[]}
 */
function partitionLabels(s) {
    const startIdx = new Map();
    const endIdx = new Map();

    // get the start idx
    for (let i = 0; i < s.length; i++) {
        if (!startIdx.has(s[i])) {
            startIdx.set(s[i], i);
        }
    }

    // get the end idx
    for (let i = s.length - 1; i >= 0; i--) {
        if (!endIdx.has(s[i])) {
            endIdx.set(s[i], i);
        }
    }

    let left = -1;
    let right = -1;
    const partsSize = [];

    for (let i = 0; i < s.length; i++) { console.log(right, i)
        right = Math.max(right, endIdx.get(s[i]));

        if (right === i) {
            partsSize.push(right - left);

            left = i;
            right = -1;
        }
    }

    return partsSize;
}