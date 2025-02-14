
class ProductOfNumbers {
    constructor() {
        this.stream = [];
    }

    /** 
    * @param {number} num
    * @return {void}
    */
    add(num) {
        this.stream.push(num);
    }

    /** 
    * @param {number} k
    * @return {number}
    */
    getProduct(k) {
        let product = 1;

        for (let i = this.stream.length - k; i < this.stream.length; i++) {
            product *= this.stream[i];
        }

        return product;
    }
}


/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */