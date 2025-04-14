function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let goodTriplets: number = 0;

    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                for (let k: number = j + 1; k < arr.length; k++) {
                    if (
                        Math.abs(arr[j] - arr[k]) <= b && 
                        Math.abs(arr[i] - arr[k]) <= c
                    ) {
                        goodTriplets++;
                    }
                }
            }
        }
    }

    return goodTriplets;
};