class MyQueue {
    private readonly stack: number[];
    constructor() {
        this.stack = [];
    }

    push(x: number): void {
        this.stack.push(x);
    }

    pop(): number {
        const tem: number[] = [];

        while (this.stack.length) {
            tem.push(this.stack.pop());
        }

        const removedItem: number = tem.pop();

        while (tem.length) {
            this.stack.push(tem.pop());
        }

        return removedItem;
    }

    peek(): number {
        const tem: number[] = [];

        while (this.stack.length) {
            tem.push(this.stack.pop());
        }

        const peekItem: number = tem.at(-1);

        while (tem.length) {
            this.stack.push(tem.pop());
        }

        return peekItem; 
    }

    empty(): boolean {
        return this.stack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */