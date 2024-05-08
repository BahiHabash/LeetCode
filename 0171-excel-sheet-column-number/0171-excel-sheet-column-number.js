/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function(columnTitle) {
    let columnNum = 0;
    
    for (const char of columnTitle) {
        columnNum *= 26;
        columnNum += char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }

    return columnNum;
};
