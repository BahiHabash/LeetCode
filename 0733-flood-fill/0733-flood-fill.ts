function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const originalColor: number = image[sr][sc];

    if (originalColor === color) {
        return image;
    }
    
    const rowsNum: number = image.length;
    const colsNum: number = image[0].length;

    function dfs(r: number, c: number): void {
        if (r < 0 || r >= rowsNum || c < 0 || c >= colsNum) {
            return;
        }

        if (image[r][c] !== originalColor) {
            return;
        }

        image[r][c] = color;

        dfs(r, c + 1);
        dfs(r, c - 1);
        dfs(r + 1, c);
        dfs(r - 1, c);
    }

    dfs(sr, sc);

    return image;
};