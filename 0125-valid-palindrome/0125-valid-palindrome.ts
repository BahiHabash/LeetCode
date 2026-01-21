function isPalindrome(s: string): boolean {
    let str: string = '';
    let reverseStr: string = '';

    for (let i = 0; i < s.length; i++) {
        if (isAlpha(s[i])) {
            str += s[i].toLowerCase();
        }   
    }

    for (let i = s.length - 1; i >= 0; i--) {
        if (isAlpha(s[i])) {
            reverseStr += s[i].toLowerCase();
        }        
    }
    
    return str === reverseStr;
};

function isAlpha(char): boolean {
    const charCode: number = char.charCodeAt();

     return (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) 
        ||  (charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0));
};