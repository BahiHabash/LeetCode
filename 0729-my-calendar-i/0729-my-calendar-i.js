class ListNode {
    constructor(start = null, end = null, next = undefined) {
        this.start = start;
        this.end = end;
        this.next = next;
    }
}

class MyCalendar {
    constructor() {
        this.events = new ListNode();  // dummy head events
    }

    /** 
     * @param {number} start 
     * @param {number} end
     * @return {boolean}
     */
    book(start, end) {
        let prevEvent = this.events;
        let currEvent = this.events.next;

        while (currEvent) {
            if (start < currEvent.end) break; // there is conflict
            prevEvent = currEvent;
            currEvent = currEvent.next;
        }

        if (currEvent && end > currEvent.start) return false; // there is overlapping 

        prevEvent.next = new ListNode(start, end, currEvent); // Insert new event.
        return true;
    }
}

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
