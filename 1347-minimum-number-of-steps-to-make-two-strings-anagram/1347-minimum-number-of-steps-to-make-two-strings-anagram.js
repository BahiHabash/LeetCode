/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const minSteps = function(s, t) { // time : O(n * log(n)), space : O(n)
    s_sorted = [...s].sort().join('');
    t_sorted = [...t].sort().join('');

    let i = 0
       ,j = 0
       ,steps = s.length;

    while (i < s.length) {
        while (j < t.length && s_sorted[i] > t_sorted[j]){
            j++
        }
        if (s_sorted[i] === t_sorted[j]) {
            j++;
            steps--;
        }
        i++;
    }   

    return steps;
};