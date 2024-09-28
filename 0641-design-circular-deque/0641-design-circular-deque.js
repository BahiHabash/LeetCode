class MyCircularDeque {
    #deque;
    #capacity;
    #frontIdx;
    #rearIdx;
    #length;

    /**
    * @param {number} k
    */
    constructor(k = 0) {
        this.#deque = new Array(k).fill(null);
        this.#capacity = k;
        this.#frontIdx = -1;
        this.#rearIdx = -1;
        this.#length = 0;
    }

    /** 
    * @param {number} value
    * @return {boolean}
    */
    insertFront(value) {
        if (this.isFull()) return false;

        if (this.isEmpty()) {
            this.#frontIdx = this.#rearIdx = 0;
        } else {
            this.#frontIdx = (this.#frontIdx - 1 + this.#capacity) % this.#capacity;
        }

        this.#deque[this.#frontIdx] = value;
        this.#length++;
        return true;
    }

    /** 
    * @param {number} value
    * @return {boolean}
    */
    insertLast(value) {
        if (this.isFull()) return false;

        if (this.isEmpty()) {
            this.#frontIdx = this.#rearIdx = 0;
        } else {
            this.#rearIdx = (this.#rearIdx + 1) % this.#capacity;
        }

        this.#deque[this.#rearIdx] = value;
        this.#length++;
        return true;
    }

    /**
    * @return {boolean}
    */
    deleteFront() {
        if (this.isEmpty()) return false;

        this.#deque[this.#frontIdx] = null;

        if (this.#length === 1) {
            this.#frontIdx = this.#rearIdx = -1; // Reset to empty state
        } else {
            this.#frontIdx = (this.#frontIdx + 1) % this.#capacity;
        }

        this.#length--;
        return true;
    }

    /**
    * @return {boolean}
    */
    deleteLast() {
        if (this.isEmpty()) return false;

        this.#deque[this.#rearIdx] = null;

        if (this.#length === 1) {
            this.#frontIdx = this.#rearIdx = -1; // Reset to empty state
        } else {
            this.#rearIdx = (this.#rearIdx - 1 + this.#capacity) % this.#capacity;
        }

        this.#length--;
        return true;
    }

    /**
    * @return {number}
    */
    getFront() {
        return this.isEmpty() ? -1 : this.#deque[this.#frontIdx];
    }

    /**
    * @return {number}
    */
    getRear() {
        return this.isEmpty() ? -1 : this.#deque[this.#rearIdx];
    }

    /**
    * @return {boolean}
    */
    isEmpty() {
        return this.#length === 0;
    }

    /**
    * @return {boolean}
    */
    isFull() {
        return this.#length === this.#capacity;
    }
}



/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */