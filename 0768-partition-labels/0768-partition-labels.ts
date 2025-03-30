function partitionLabels(s: string): number[] {
    const mostRightIdx: number[] = new Array(26).fill(-1);

    // get the most right idx for each char
    for (let i = s.length - 1; i >= 0; i--) {
        if (mostRightIdx[ s[i].charCodeAt(0) - 97 ] === -1) {
            mostRightIdx[ s[i].charCodeAt(0) - 97 ] = i;
        }
    }

    let left: number = -1;
    let right: number = -1;
    const partsSize: number[] = [];

    for (let i = 0; i < s.length; i++) {
        right = Math.max(right, mostRightIdx[ s[i].charCodeAt(0) - 97] );

        if (right === i) {
            partsSize.push(right - left);
            left = i;
        }
    }

    return partsSize;
}