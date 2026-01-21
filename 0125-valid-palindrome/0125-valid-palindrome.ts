function isPalindrome(s: string): boolean {
    const len: number = s.length;
    let l: number = 0;
    let r: number = len - 1;

    while (l < r) {
        while (l < len && !isAlphaNum(s[l])) {
            l++;
        }

        while (r >= 0 && !isAlphaNum(s[r])) {
            r--;
        }

        if (l >= len && r < 0) {
            return true;
        }

        if (l >= len || r < 0) {
            return false;
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }

        l++, r--;
    }

    return true;
};

function isAlphaNum(char): boolean {
    if ('0123456789'.includes(char)) {
        return char;
    }

    const charCode: number = char.charCodeAt(0);

     return (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) 
        ||  (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0));
};