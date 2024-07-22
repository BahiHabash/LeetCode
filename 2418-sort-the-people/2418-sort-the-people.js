/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
const sortPeople = function(names, heights) { // Time : O(n * log(n)), Space O(n)
    const peopleheights = new Map(); // {height : name}
    for (let i = 0; i < names.length; i++) {
        peopleheights.set(heights[i], names[i]);
    }

    return [...heights]
            .sort((a, b) => b - a)
            .map(
                height => peopleheights.get(height)
            );
};