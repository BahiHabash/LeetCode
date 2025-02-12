/**
 * @param {number[]} nums
 * @return {number}
 */
function maximumSum(nums) {
    const digitsSumToNum = new Map();

    for (const num of nums) {
        const digitsSum = sumOfDigits(num);
        
        if (!digitsSumToNum.has(digitsSum)) {
            digitsSumToNum.set(digitsSum , []);
        }

        // add current num to digitsSumToNum map
        digitsSumToNum.get(digitsSum).push(num);
    }

    let maxVal = -1;

    for (const [sum, numsArr] of digitsSumToNum.entries()) {
        if (numsArr.length >= 2) {
            maxVal = Math.max(sumOfMax2Nums(numsArr), maxVal);
        }
    }

    return maxVal;
}

function sumOfDigits(num = 0) {
    let sum = 0;

    while (num) {
        sum += (num % 10);
        num = Math.floor(num / 10);
    }

    return sum;
}

function sumOfMax2Nums(nums) {
    let [max1, max2] = [0, 0];

    for (const num of nums) {
        if (max1 < num) {
            [max2, max1] = [max1, num];
        } else if (max2 < num) {
            max2 = num;
        }
    }

    return max1 + max2;
}