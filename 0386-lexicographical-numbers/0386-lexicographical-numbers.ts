function lexicalOrder(n: number): number[] {
    const arr: number[] = new Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    arr.sort((a, b) => {
        if (String(a) < String(b)) return -1;
        else return 1;
    });

    return arr;
};