/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = function(path) {
    const visited = new Set();
    let x = 0, y = 0;
    visited.add(`${x},${y}`);

    for (const dir of path) {
        if (dir === 'N') x++;
        else if (dir === 'S') x--;
        else if (dir === 'E') y++;
        else if (dir === 'W') y--;
        
        if (visited.has(`${x},${y}`))
            return true;
        
        visited.add(`${x},${y}`);
    }

    return false;
};
