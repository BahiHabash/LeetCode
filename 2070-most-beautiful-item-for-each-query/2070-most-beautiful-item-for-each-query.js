/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
function maximumBeauty(items, queries) {
    // sort items based on price
    items.sort((a, b) => a[0] - b[0]);

    const maxBeautyArr = new Array(items.length).fill(null);
    let maxBeauty = -Infinity;

    // fill maxBeautyArr cells with the max beauty uptill its index
    items.forEach(([_, beauty], i) => {
        maxBeauty = Math.max(beauty, maxBeauty);
        maxBeautyArr[i] = maxBeauty;
    });

    return queries.map(query => {
        const idx = binarySearchItemIndex(items, query);
        return maxBeautyArr[idx] ?? 0;
    }); 
};

function binarySearchItemIndex(items, query) {
    let idx = -1;
    let [l, r] = [0, items.length - 1];

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        if (items[mid][0] > query) {
            r = mid - 1;
        } else {
            idx = mid;
            l = mid + 1;
        }
    }

    return idx;
};