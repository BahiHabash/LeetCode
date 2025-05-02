function pushDominoes(dominoes: string): string {
    let dominoesArr: string[] = dominoes.split('');
    
    while (true) {
        let somethingChanged: boolean = false;
        const str: string = dominoesArr.join('');

        for (let i = 0; i < dominoesArr.length; i++) {
            if (
                str[i] === 'L' && 
                str[i - 1] === '.' && 
                str[i - 2] !== 'R'
            ) {
                dominoesArr[i - 1] = 'L';
                somethingChanged = true;
            } else if (
                str[i] === 'R' &&
                str[i + 1] === '.' && 
                str[i + 2] !== 'L'
            ) {
                dominoesArr[i + 1] = 'R';
                somethingChanged = true;
            }
        }

        if (!somethingChanged) break;
    }

    return dominoesArr.join('');
}