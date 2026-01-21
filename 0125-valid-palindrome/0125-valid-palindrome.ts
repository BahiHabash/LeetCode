function isPalindrome(s: string): boolean {
    const chars: string[] = [...s]
        .filter((c) => c.match(/\w/))
        .map(c => c.toLowerCase());

    return chars.join('') === chars.reverse().join('');
};
