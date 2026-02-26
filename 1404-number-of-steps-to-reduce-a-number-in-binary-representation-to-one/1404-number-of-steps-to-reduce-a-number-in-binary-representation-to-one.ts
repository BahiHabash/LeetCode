function numSteps(s: string): number {
    let num = BigInt('0b' + s);
    let steps = 0;

    while (num !== 1n) {
        if (isEven(num)) {
            num = num / 2n;
        } else {
            num = num + 1n;
        }

        steps++;
    }

    return steps;
};

function isEven(num: BigInt): boolean {
    return num.toString(2).at(-1) === '0';
};