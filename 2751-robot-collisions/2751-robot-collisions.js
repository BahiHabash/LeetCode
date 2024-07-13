/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
const survivedRobotsHealths = function(positions, healths, directions) {
    const map = {};
    for (const [i, position] of positions.entries()) {
        map[position] = {
                index : i,
                dir :directions[i],
                health : healths[i],
            };
    }

    // sort robot  acs
    positions.sort((a, b) => a - b);

    // use stack to get survival robots from collisions
    // only when L is faced with R
    const stack = [];

    for (const currRobotPosition of positions) {
        let {health : currRobotHealth, dir : currRobotDir} = map[currRobotPosition];

        while (map[stack.at(-1)]?.dir === 'R' && currRobotDir === 'L' && currRobotHealth) {
            const {health : topRobotHealth} = map[stack.at(-1)];

            if (topRobotHealth === currRobotHealth) {
                currRobotHealth = 0;
                delete map[stack.pop()];
                delete map[currRobotPosition];
            } else if (currRobotHealth - topRobotHealth >= 1) {
                currRobotHealth -= 1;
                delete map[stack.pop()];
            } else {
                currRobotHealth = 0;
                delete map[currRobotPosition];
                map[stack.at(-1)].health -= 1;
            }
        } 
        
        if (currRobotHealth) {
            stack.push(currRobotPosition);
            map[currRobotPosition].health = currRobotHealth;
        } else if (map[currRobotPosition]) {
            delete map[currRobotPosition];
        }
    }

    // resort survival robots as the order in the original positions
    stack.sort((a, b) => map[a].index - map[b].index);
    
    return stack.map((currRobotPosition) => map[currRobotPosition].health);
};