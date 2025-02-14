class ProductOfNumbers {
    #prefixProduct;
    #prefixZeroCount;

    constructor() {
        this.stream = [];
        this.#prefixProduct = [1]; // Initialize with 1 to handle the first product correctly
        this.#prefixZeroCount = [0]; // Initialize with 0 to handle the first zero count correctly
    }

    /** 
     * @param {number} num
     * @return {void}
     */
    add(num) {
        // add num to the stream
        this.stream.push(num);
        // update prefixProduct for the current index
        this.#prefixProduct.push((this.#prefixProduct.at(-1) * num) || 1);
        // update prefixZeroCount for the current index
        this.#prefixZeroCount.push(this.#prefixZeroCount.at(-1) + (num === 0));
    }

    /** 
     * @param {number} k
     * @return {number}
     */
    getProduct(k) {
        const len = this.stream.length;
        
        // if there is any zero in the last k integers, return 0
        if (this.#prefixZeroCount[len] - this.#prefixZeroCount[len - k]) {
            return 0;
        } else {
            // return the product of the last k numbers
            return this.#prefixProduct[len] / this.#prefixProduct[len - k];
        }
    }
}

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */