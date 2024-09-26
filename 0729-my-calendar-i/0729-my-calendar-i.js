class MyCalendar {
    constructor() {
        this.events = [];
    }

    /** 
     * @param {number} start 
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        if (!this.events.length) {
            this.events.unshift([start, end]);
            return true;
        }

        let i = 0;
        while (i < this.events.length && start >= this.events[i][1]) {
            i++;
        }

        if (i < this.events.length && end > this.events[i][0]) {
            return false; // The new event overlaps with an existing event.
        }

        this.events.splice(i, 0, [start, end]); // Insert new event.
        return true;
    }
}

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
