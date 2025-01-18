/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function timeLimit(fn, t) {
    
    return async function(...args) {
        const fnPromise = fn(...args);

        const cancelTimer = new Promise(
            (res, rej) => setTimeout(rej, t, "Time Limit Exceeded")
        );

        return Promise.race([fnPromise, cancelTimer]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */