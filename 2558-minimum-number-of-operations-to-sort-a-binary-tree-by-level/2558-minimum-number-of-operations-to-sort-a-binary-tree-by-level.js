/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minimumOperations = function(root) {
    const queue = [root];
    let minOperations = 0;

    while (queue.length) {
        let size = queue.length;
        let level = [];

        while (size--) {
            const removedNode = queue.shift();
            level.push(removedNode);

            if (removedNode.left) {
                queue.push(removedNode.left);
            }
            if (removedNode.right) {
                queue.push(removedNode.right);
            }
        }
        
        minOperations += minSwapsToSort( level.map(root => root.val) );
    }

    return minOperations;
};

function minSwapsToSort(arr) {
    // Step 1: Pair elements with their indices
    let pairedArray = arr.map((value, index) => ({ value, index }));
    
    // Step 2: Sort by the element values
    pairedArray.sort((a, b) => a.value - b.value);
    
    // Step 3: Initialize visited array
    let visited = new Array(arr.length).fill(false);
    let swaps = 0;

    // Step 4: Detect cycles and calculate swaps
    for (let i = 0; i < arr.length; i++) {
        // If already visited or in the correct position, skip
        if (visited[i] || pairedArray[i].index === i) {
            continue;
        }

        // Find the cycle length
        let cycleLength = 0;
        let currentIndex = i;

        while (!visited[currentIndex]) {
            visited[currentIndex] = true;
            currentIndex = pairedArray[currentIndex].index;
            cycleLength++;
        }

        // Add the number of swaps for this cycle
        if (cycleLength > 1) {
            swaps += cycleLength - 1;
        }
    }

    return swaps;
}