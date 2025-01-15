/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
function minimizeXor (num1, num2) {
    let num1Binary = num1.toString(2);
    let num2Binary = num2.toString(2);

    if (num1Binary.length > num2Binary.length) {
        num2Binary = num2Binary.padStart(num1Binary.length, '0')
    } else if (num1Binary.length < num2Binary.length) {
        num1Binary = num1Binary.padStart(num2Binary.length, '0')
    }

    const xBinary = new Array(num1Binary.length).fill('0');

    let setBits = 0;
    for (const bit of num2Binary) {
        setBits += bit == 1;
    }

    for (let i = 0; setBits && (i < num1Binary.length); i++) {
        if (num1Binary[i] === '1') {
            xBinary[i] = '1';
            setBits--;
        }
    }

    if (setBits) {
        for (let i = xBinary.length - 1; setBits && (i >= 0); i--) {
            if (xBinary[i] === '0') {
                xBinary[i] = '1';
                setBits--;
            }
        }
    }

    const x = xBinary.join('');

    return parseInt(x, 2);
}