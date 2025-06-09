function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const groups: Set<string>[] = [];

    for (let i = 0; i < s1.length; i++) {
        let groupExisted: boolean = false;

        for (const group of groups) {
            if (group.has(s1[i]) || group.has(s2[i])) {
                group.add(s1[i]);
                group.add(s2[i]);
                groupExisted = true;
            }
        }

        if (!groupExisted) {
            const newGroup = new Set<string> ( [s1[i], s2[i]] );
            groups.push(newGroup);
        }
    }

    for (let i = s1.length - 1; i >= 0; i--) {
        let groupExisted: boolean = false;

        for (const group of groups) {
            if (group.has(s1[i]) || group.has(s2[i])) {
                group.add(s1[i]);
                group.add(s2[i]);
                groupExisted = true;
            }
        }

        if (!groupExisted) {
            const newGroup = new Set<string> ( [s1[i], s2[i]] );
            groups.push(newGroup);
        }
    }
    
    const mapp = new Map <string,string>();
    
    for (const group of groups) {
        let smallestChar: string = [...group].sort().at(0);

        for (const char of group) {
            if (smallestChar < (mapp.get(char) ?? 'z')) {
                mapp.set(char, smallestChar);
            }
        }
    }
    
    let res: string = '';

    for (const char of baseStr) {
        res += mapp.get(char) ?? char;
    }

    return res;
};