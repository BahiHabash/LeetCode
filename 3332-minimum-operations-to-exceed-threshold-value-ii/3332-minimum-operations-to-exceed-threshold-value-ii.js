class MinHeap {
    constructor() {
        this.heap = [];
    }

    pop() {
        if (this.size() === 0) return null; // Handle empty heap case
        const min = this.heap[0];
        const last = this.heap.pop(); // Remove the last element
        if (this.size() > 0) {
            this.heap[0] = last; // Move the last element to the root
            this.heapifyDown(0); // Restore heap property
        }
        return min;
    }

    push(num) {
        this.heap.push(num);
        this.heapifyUp(this.size() - 1); // Heapify from the last index
    }

    heapifyUp(childIdx) {
        while (childIdx > 0) {
            const parentIdx = this.parentIdx(childIdx);
            if (this.heap[parentIdx] <= this.heap[childIdx]) break; // Stop if parent is smaller
            [this.heap[parentIdx], this.heap[childIdx]] = [this.heap[childIdx], this.heap[parentIdx]]; // Swap
            childIdx = parentIdx; // Move up to the parent
        }
    }

    heapifyDown(idx) {
        const size = this.size();
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let smallestIdx = idx;

            // Find the smallest among parent, left child, and right child
            if (leftChildIdx < size && this.heap[leftChildIdx] < this.heap[smallestIdx]) {
                smallestIdx = leftChildIdx;
            }
            if (rightChildIdx < size && this.heap[rightChildIdx] < this.heap[smallestIdx]) {
                smallestIdx = rightChildIdx;
            }

            // If the smallest is not the parent, swap and continue
            if (smallestIdx !== idx) {
                [this.heap[idx], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[idx]];
                idx = smallestIdx;
            } else {
                break; // Stop if the parent is the smallest
            }
        }
    }

    childIdx(index, isLeft = true) {
        return 2 * index + (isLeft ? 1 : 2);
    }

    parentIdx(index) {
        return Math.floor((index - 1) / 2);
    }

    size() {
        return this.heap.length;
    }

    min() {
        return this.heap[0];
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minOperations(nums, k) {
    const minHeap = new MinHeap();

    for (const num of nums) {
        minHeap.push(num);
    }

    let minOperations = 0;

    while (minHeap.min() < k) {
        const [min1, min2] = [minHeap.pop(), minHeap.pop()];
        minHeap.push(Math.min(min1, min2) * 2 + Math.max(min1, min2));
        minOperations++;
    }

    return minOperations;
}