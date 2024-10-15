/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxKelements = function(nums, k) {
    // Create a max-heap (using MaxPriorityQueue from LeetCode)
    const maxHeap = new MaxPriorityQueue();
    let maxScore = 0;
    
    // Insert all elements into the heap
    nums.forEach(num => maxHeap.enqueue(num));
    
    // Process k times
    while (k--) {
        const removedNum = maxHeap.dequeue().element;  // Extract the max element
        maxScore += removedNum;
        maxHeap.enqueue(Math.ceil(removedNum / 3));  // Insert the modified number
    }
    
    return maxScore;
};
