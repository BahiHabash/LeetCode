class RecentCounter {
    constructor () {
        this.counter = 0;
        this.queue = [];
    }

    /** 
    * @param {number} t
    * @return {number}
    */    
    ping(t) {
        this.counter++;
        this.queue.push(t);

        while ((t - this.queue[0]) > 3000) {
            this.counter--;
            this.queue.shift();
        }

        return this.counter;
    }
}

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */