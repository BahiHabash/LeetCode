class ListNode {
    /**
     * 
     * @param {Number} key 
     * @param {Number} val 
     * @param {ListNode} prev 
     * @param {ListNode} next 
     */
    constructor(key, val, prev = null, next = null) {
        this.key = key;
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * 
     * @param {Number} key 
     * @param {Number} val 
     * @returns {ListNode}
     */
    push(key, val) {
        const newNode = new ListNode(key, val);
        if (this.length === 0) {   // there no nodes in the list
            this.head = newNode;
            this.tail = newNode;
        }
        else {                  // there is nodes in the list
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }
    /**
     * @param {ListNode} node 
     * @returns {number}
     */
    remove(node) {
        if (this.length === 0) 
            return;
        else if (this.length === 1) {       // there is only one node in the list
            this.head = null;
            this.tail = null;
        }
        else if (node === this.head) { // the node is the head
            this.head = this.head.next;
            this.head.prev = null;
        }
        else if (node === this.tail) { // the node is the tail
            this.tail = node.prev;
            this.tail.next = null;
        }
        else {                        // the node is in the middle
            const prev = node.prev;
            const next = node.next;
            prev.next = next;
            next.prev = prev;
        }
        return --this.length;
    }
}

class LRUCache {
    /**
    * @param {Number} capasity
    */
    constructor(capasity = 0) {
        this.capasity = capasity;
        this.list = new DLL();
        this.cash = {};
        this.size = 0;
    }
    /**
    * @param {Number} key
    * @return {Number}
    */
    get(key) {
        if (! this.cash[key])
            return -1;

        const value = this.cash[key].val;
        this.list.remove(this.cash[key]);
        this.cash[key] = this.list.push(key, value);

        return value;
    }
    /**
    * @param {Number} key
    * @param {Number} val
    */
    put(key, val) {
        if (this.cash[key])    // if the key is existed
            this.list.remove(this.cash[key]);

        else {
            if (this.size === this.capasity) {
                const removedKey = this.list.head.key; // LRU Cash key
                this.list.remove(this.list.head);
                delete this.cash[removedKey];
            }
            else
                this.size++;
        }

        this.cash[key] = this.list.push(key, val); 
    }
}