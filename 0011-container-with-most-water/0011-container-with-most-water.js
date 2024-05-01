/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    const calculateWater = (l, r) => Math.min(height[l], height[r]) * (r - l);
    
    let l = 0
      , r = height.length - 1
      , mostWater = 0;

    while (l < r) {
        mostWater = Math.max(calculateWater(l, r), mostWater);
        
        if (height[l] < height[r])
            l++;
        else if (height[r] < height[l])
            r--;
        else {
            if((r - l > 2) && (height[l + 1] > height[l - 1]))
                l++;
            else
                r--;
        }

    }

    return mostWater;
};