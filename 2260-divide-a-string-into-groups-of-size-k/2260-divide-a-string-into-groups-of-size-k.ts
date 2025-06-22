function divideString(s: string, k: number, fill: string): string[] {
    const parts: string[] = [];

    for (let i = 0; i < s.length; i += k) {
        let part: string = s.slice(i, i + k);

        if (part.length < k) {
            part += fill.repeat(k - part.length);
        }

        parts.push(part);
    }

    return parts;
};