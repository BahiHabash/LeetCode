/**
 * @param {number} size
 */
var Bitset = function(size) {
    this.size = size;
    this.ones = new Set();
    this.zeros = new Set();

    for (let i = 0; i < size; i++) this.zeros.add(i);
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function(idx) {
    this.zeros.delete(idx);
    this.ones.add(idx);
};

/** 
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function(idx) {
    this.ones.delete(idx);
    this.zeros.add(idx);
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function() {
    [this.ones, this.zeros] = [this.zeros, this.ones];
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function() {
    return this.ones.size === this.size;
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function() {
    return this.ones.size > 0;
};

/**
 * @return {number}
 */
Bitset.prototype.count = function() {
    return this.ones.size;
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function() {
    let str = '';

    for (let i = 0; i < this.size; i++) {
        str += this.ones.has(i) ? '1' : '';
        str += this.zeros.has(i) ? '0' : '';
    }

    return str;
};

/** 
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */