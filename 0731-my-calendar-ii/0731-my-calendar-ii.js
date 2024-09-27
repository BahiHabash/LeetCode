class MyCalendarTwo {
    constructor() {
        this.events = [];
        this.overlaps = [];
    }

    /** 
     * @param {number} start 
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        // Check if it causes a triple booking
        if (this.isTripleBooking(start, end)) return false;

        // Check for new overlaps with existing events
        for (const event of this.events) {
            const overlapStart = Math.max(start, event.start);
            const overlapEnd = Math.min(end, event.end);

            if (overlapStart < overlapEnd) {
                this.addOverlap(overlapStart, overlapEnd); // Add new overlap
            }
        }

        // Insert the new event
        this.events.push({ start, end });
        return true;
    }

    /** 
     * @param {number} start 
     * @param {number} end
     * @return {boolean}
     */
    isTripleBooking(start, end) {
        for (const overlap of this.overlaps) {
            if (Math.max(start, overlap.start) < Math.min(end, overlap.end)) {
                return true; // Found a triple booking
            }
        }
        return false;
    }

    /** 
     * @param {number} start 
     * @param {number} end
     */
    addOverlap(start, end) {
        this.overlaps.push({ start, end }); // Add the new overlap
    }
}

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start, end)
 */
