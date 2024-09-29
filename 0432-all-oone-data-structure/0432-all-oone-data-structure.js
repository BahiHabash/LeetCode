class AllOne {
    #map;
    #sortedKeys;

    constructor() {
        this.#map = new Map(); // key {count, idx}
        this.#sortedKeys = [];
    }

    inc(key) {
        const keyObj = this.#map.get(key);

        if (!keyObj) {
            // New key, set count to 1 and place at the back
            this.#map.set(key, { count: 1, idx: this.#sortedKeys.length });
            this.#sortedKeys.push(key);
        } else {
            // Update key's count
            keyObj.count++;

            // Move key upwards (towards the front) if necessary
            for (let i = keyObj.idx - 1; i >= 0; i--) {
                const prevKey = this.#sortedKeys[i];
                const prevKeyObj = this.#map.get(prevKey);

                // Stop when the previous key has a higher or equal count
                if (prevKeyObj.count >= keyObj.count) {
                    break;
                }

                // Swap the current key with the previous one
                this.#sortedKeys[i + 1] = prevKey;
                this.#sortedKeys[i] = key;

                // Update indices
                keyObj.idx = i;
                prevKeyObj.idx = i + 1;
            }
        }
    }

    dec(key) {
        const keyObj = this.#map.get(key);
        if (!keyObj) return; // If key doesn't exist, do nothing

        if (keyObj.count === 1) {
            // Remove key when count becomes 0
            this.#map.delete(key);

            // Update the indices of the keys after the removed key
            const len = this.#sortedKeys.length;
            for (let i = keyObj.idx + 1; i < len; i++) {
                const currKey = this.#sortedKeys[i];
                const currKeyObj = this.#map.get(currKey);
                currKeyObj.idx--; // Decrease the index
            }

            // Remove the key from sortedKeys
            this.#sortedKeys.splice(keyObj.idx, 1);
        } else {
            // Update key's count
            keyObj.count--;

            // Move key downwards (towards the back) if necessary
            for (let i = keyObj.idx; i < this.#sortedKeys.length - 1; i++) {
                const nextKey = this.#sortedKeys[i + 1];
                const nextKeyObj = this.#map.get(nextKey);

                // Stop when the next key has a lower or equal count
                if (nextKeyObj.count <= keyObj.count) {
                    break;
                }

                // Swap the current key with the next one
                this.#sortedKeys[i] = nextKey;
                this.#sortedKeys[i + 1] = key;

                // Update indices
                keyObj.idx = i + 1;
                nextKeyObj.idx = i;
            }
        }
    }

    getMaxKey() {
        return this.#sortedKeys.length ? this.#sortedKeys.at(0) : "";
    }

    getMinKey() {
        return this.#sortedKeys.length ? this.#sortedKeys.at(-1) : "";
    }
}

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
