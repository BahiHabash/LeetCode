function countSubarrays(nums: number[], k: number): number {
    const len: number = nums.length;
    const maxNum: number = Math.max(...nums);
    const prefixArr: number[] = new Array(len).fill(0);

    for (let i = 0; i < len; i++) {
        prefixArr[i] = (prefixArr[i - 1] ?? 0) + ((nums[i] === maxNum) ? 1 : 0);
    }

    let count: number = 0;
    
    for (let i = 0; i < len; i++) {
        let target: number = prefixArr[i] + k;

        if (prefixArr[i] > (prefixArr[i - 1] || 0))
            target--;

        const idx = lowerBound(prefixArr, i, len - 1, target);

        if (idx !== - 1)
            count += len - idx;
    }

    return count;
}

function lowerBound(arr: number[], start: number, end: number, target: number): number {
    let l: number = start;
    let r: number = end;
    let idx: number = -1;

    while (l <= r) {
        const mid = l + Math.trunc((r - l) / 2);

        if (arr[mid] < target) {
            l = mid + 1;
        } else {
            idx = mid;
            r = mid - 1;
        }
    }

    return idx;
}