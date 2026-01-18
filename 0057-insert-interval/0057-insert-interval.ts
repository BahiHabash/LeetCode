function insert(intervals: number[][], newInterval: number[]): number[][] {
    if (!newInterval.length) {
        return intervals;
    }

    if (!intervals.length) {
        return [newInterval];
    }

    let inserted: boolean = false;
    let newStart: number = newInterval[0]; 
    let newEnd: number = newInterval[1]; 
    const ans: number[][] = [];

    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        if ((end < newStart)){
            ans.push([start, end]);
            continue;
        } 

        if (start <= newStart && end >= newEnd) {
            inserted = true;
            
            while (i < intervals.length) {
                ans.push(intervals[i++]);
            }
        }

        if (newEnd < start) {
            ans.push([newStart, newEnd]);

            inserted = true;

            while (i < intervals.length) {
                ans.push(intervals[i++]);
            }
        }

        newStart = Math.min(start, newStart);
        newEnd = Math.max(end, newEnd);
    }

    if (!inserted) {
        ans.push([newStart, newEnd]);
    }

    return ans;
};