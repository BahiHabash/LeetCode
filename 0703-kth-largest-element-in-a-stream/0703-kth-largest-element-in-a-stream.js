class KthLargest {
    /**
    * @param {number} k
    * @param {number[]} nums
    */
    constructor(k, nums) {
        this.k = k;
        this.stream = nums;
    }

    /** 
    * @param {number} val
    * @return {number}
    */
    add(val) {
        this.stream.push(val);
        this.stream.sort((a, b) => b - a);

        return this.stream[this.k - 1];
    }
}


/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */