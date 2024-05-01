int findJudge(int n, vector<vector<int>>& trustArr) {
    if (trustArr.empty())
        return n == 1 ? 1 : -1;

    vector<int> trustPeople(n + 1, 0);
    vector<int> trustedBy(n + 1, 0);

    for (const auto& trust : trustArr) {
        int person = trust[0];
        int trustedPerson = trust[1];
        trustPeople[person]++;
        trustedBy[trustedPerson]++;
    }

    for (int i = 1; i <= n; i++) {
        if (trustPeople[i] == 0 && trustedBy[i] == n - 1)
            return i;
    }

    return -1;
}
