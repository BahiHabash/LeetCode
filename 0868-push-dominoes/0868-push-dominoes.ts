function pushDominoes(dominoes: string): string {
    let dominoesArrGlobal: string[] = dominoes.split('');
    
    for (let j = 0; j < dominoesArrGlobal.length; j++) {
        const dominoesArr = [...dominoesArrGlobal];
        let somethingChanged: boolean = false;

        for (let i = 1; i < dominoesArr.length - 1; i++) {
            if (dominoesArrGlobal[i] === '.') {
                const str: string = dominoesArrGlobal[i - 1] + dominoesArrGlobal[i + 1];

                if ( ['LR', 'RL', '.R', 'L.', '..'].includes(str) ) {
                    continue;
                } else if ( ['.L', 'LL'].includes(str) ) {
                    dominoesArr[i] = 'L';
                } else if ( ['R.', 'RR'].includes(str) ) { 
                    dominoesArr[i] = 'R';
                }

                somethingChanged = true;
            }
        }

        dominoesArrGlobal = [...dominoesArr];
        if (!somethingChanged) break;
    }

    const leftMostMove: string = dominoesArrGlobal.find(move => move !== '.');
    if (leftMostMove === 'L') {
        for (let i = 0; i < dominoesArrGlobal.length; i++) {
            if (dominoesArrGlobal[i] !== '.') break;
            dominoesArrGlobal[i] = leftMostMove;
        }
    }

    let rightMostMove: string;
    for (let i = dominoesArrGlobal.length - 1; i >= 0; i--) {
        if (dominoesArrGlobal[i] !== '.') {
            rightMostMove = dominoesArrGlobal[i];
            break;
        }
    }

    if (rightMostMove === 'R') {
        for (let i = dominoesArrGlobal.length - 1; i >= 0; i--) {
            if (dominoesArrGlobal[i] !== '.') break;
            dominoesArrGlobal[i] = rightMostMove;
        }
    }

    return dominoesArrGlobal.join('');
}