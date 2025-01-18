/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
function debounce(fn, t) {
    let timerExec = null;

    return function(...args) {
        clearTimeout(timerExec);
        timerExec = setTimeout(fn, t, ...args);
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */