/**
 * @param {string} formula
 * @return {string}
 */
const countOfAtoms = function(formula) {
    const stack = [new Map()];

    for (let i = 0; i < formula.length; i++) {
        if (formula[i] === '(') {
            stack.push(new Map());
        } else if (formula[i] === ')') {
            let num = 0;
            while ((i + 1) < formula.length && isFinite(formula[i + 1])) {
                num = num * 10 + Number(formula[++i]);
            }
            num ||= 1;

            const top = stack.pop();
            for (const [element, atomsNum] of top.entries()) {
                stack.at(-1).set(element, (stack.at(-1).get(element) ?? 0) + (atomsNum * num));
            }
        } else {
            let element = formula[i];
            while (i + 1 < formula.length && formula[i + 1] >= 'a' && formula[i + 1] <= 'z') {
                element += formula[++i];
            }

            let num = 0;
            while ((i + 1) < formula.length && isFinite(formula[i + 1])) {
                num = num * 10 + Number(formula[++i]);
            }
            num ||= 1;

            stack.at(-1).set(element, (stack.at(-1).get(element) ?? 0) + num);
        }
    }
    
    return [...stack.pop().entries()]
            .sort((a, b) => a[0].localeCompare(b[0]))
            .reduce((acc, [element, atomsNum]) => acc + element + (atomsNum > 1 ? atomsNum : ''), '');
};

