/**
 * @param {number[]} nums
 * @return {boolean}
 */
const primeSubOperation = function(nums) {
    let prev = 0;
    let i = 0;
    
    if (nums[0] === 2) {
        i = 1;
        prev = nums[0];
    }

    for ( ;i < nums.length; i++) {
        const num = nums[i];
        let target = num - prev - 1;
        
        if (target < 0) return false;

        while (target > 0) {
            if (isPrime(target)) break;
            target--;
        }

        prev = num - target;
    }

    return true;
};

const isPrime = function(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
};
