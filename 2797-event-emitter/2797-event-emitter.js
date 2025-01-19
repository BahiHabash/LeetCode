class EventEmitter{
    #events;
    
    constructor() {
        this.#events = new Map();
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.#events.has(eventName)) {
            this.#events.set(eventName, new Set());
        }

        this.#events.get(eventName).add(callback);

        return {
                unsubscribe: () => {
                    this.#events.get(eventName).delete(callback);
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        const result = [];

        if (this.#events.has(eventName)) {
            this.#events.get(eventName).forEach(fn => {
                result.push( fn(...args) );
            });
        }

        return result;
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */