function lexicalOrder(n: number): number[] {
    const arr: number[] = [];

    for (let i = 1; i <= 9; i++) {
        DFS(n, arr, i);
    }

    return arr;
};

function DFS(n: number, arr: number[], curr: number): void {
    if (curr > n) return;

    arr.push(curr);

    for (let i = 0; i <= 9; i++) {
        DFS(n, arr, curr * 10 + i);
    }
};