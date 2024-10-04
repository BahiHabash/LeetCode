/**
 * @param {number[]} skill
 * @return {number}
 */
const dividePlayers = function(skill) {
    if (skill.length < 2) return -1;
    
    const sortedSkill = skill.toSorted((a, b) => a - b);
    let l = 0, 
        r = sortedSkill.length - 1,
        unifiedTeamSkill = sortedSkill[l] + sortedSkill[r],
        sumOfChemistry = sortedSkill[l++] * sortedSkill[r--];

    while (l < r) {
        const currTeamSkill = sortedSkill[l] + sortedSkill[r];

        if (currTeamSkill !== unifiedTeamSkill) return -1;

        sumOfChemistry += sortedSkill[l++] * sortedSkill[r--];
    }

    return sumOfChemistry;
};