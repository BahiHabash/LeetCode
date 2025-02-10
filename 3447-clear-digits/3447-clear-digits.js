/**
 * @param {string} s
 * @return {string}
 */
function clearDigits(s) {
    let res = [];

    for (const char of s) {
        if (isFinite(char)) {
            res.pop();
        } else {
            res.push(char);
        }
    }  

    return res.join('');  
}