
class Solution {
public:
    string frequencySort(string s) {
        vector<int> charFrequency(128, 0);
        vector<set<char>> sortedFrequency(s.size() + 1);

        // store char frequency in charFrequencyArray
        for (char ch : s)
            charFrequency[ch]++;

        // store and sort the chars' Frequencies in sortedFrequency array
        for (int i = 0; i < 128; i++) {
            if (charFrequency[i] > 0) {
                sortedFrequency[charFrequency[i]].insert((char)i);
            }
        }

        // generate the new string based on the higest char frquency
        string sortedStr = "";
        for (int i = s.size(); i > 0; i--) {
            for (char ch : sortedFrequency[i]) {   // chars that has this frequency
                for (int j = 0; j < i; j++) {      // repeat the char its number of frequency times
                    sortedStr += ch;
                }
            }
        }

        return sortedStr;
    }
};
