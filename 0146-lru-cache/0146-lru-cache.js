class LRUCache {
    /**
    * @param {Number} capacity
    */
    constructor(capacity = 0) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    /**
    * @param {Number} key
    * @return {Number}  Value of the Key if existed or -1 if not
    */
    get(key) {
        if (! this.cache.has(key)) return -1;

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    /**
    * @param {Number} key  key to be added
    * @param {Number} val  value of the key
    */
    put(key, val) {
        if (this.cache.has(key))
            this.cache.delete(key);
        
        this.cache.set(key, val);
        
        if (this.cache.size > this.capacity) 
            this.cache.delete(this.cache.keys().next().value);
    }
}