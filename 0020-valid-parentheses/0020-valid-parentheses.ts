function isValid(s: string): boolean {
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
        } else if (isCorrespondingBrakets(stack.at(-1), s[i])) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
};

function isCorrespondingBrakets(left: string, right: string): boolean {
    if (left === '[') {
        return right === ']';
    } else if (left === '{') {
        return right === '}';
    } else if (left === '(') {
        return right === ')';
    } 
    
    return false;
}