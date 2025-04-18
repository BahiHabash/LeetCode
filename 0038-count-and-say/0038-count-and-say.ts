function countAndSay(n: number): string {
    let rle = '1';

    for (let i = 2; i <= n; i++) {
        rle = getRLE(rle);
    }

    return rle;
};

function getRLE(str: string): string {
    if (!str) return '';

    let rle: string = '';

    for (let i = 0; i < str.length; i++) {
        let cnt: number = 1;

        while (str[i] === str[i + 1]) {
            cnt++;
            i++;
        }

        rle += (cnt + str[i]);
    }

    return rle;
};