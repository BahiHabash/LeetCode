/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function(asteroids) { // Time : O(n), Space : O(1)
    const stack = [];

    for (let asteroid of asteroids) {
        while (stack.length && asteroid < 0 && stack.at(-1) > 0 && Math.abs(asteroid) >= stack.at(-1)) {
            if (Math.abs(asteroid) === stack.pop())
                asteroid = 0;
        }
        if (asteroid > 0 || ((stack.length === 0 || stack.at(-1) < 0) && asteroid < 0))
            stack.push(asteroid);
    }

    return stack;
};