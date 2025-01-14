/**
 * @param {number[]} arr
 * @param {number} start
 * @param {number} target default = 0 
 * @return {boolean}
 */
function canReach(arr, start, target = 0) {
    const visited = new Array(arr.length).fill(false);

    const queue = [start];
    visited[start] = true;

    while (queue.length) {
        const i = queue.shift();
        
        if (arr[i] === target) return true;

        if ((i + arr[i] < arr.length) && !visited[i + arr[i]]){
            queue.push(i + arr[i]);
            visited[i + arr[i]] = true;
        }

        if ((i - arr[i] >= 0) && !visited[i - arr[i]]){
            queue.push(i - arr[i]);
            visited[i - arr[i]] = true;
        }
    }

    return false;
}