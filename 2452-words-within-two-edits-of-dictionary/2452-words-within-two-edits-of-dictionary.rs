impl Solution {
    pub fn two_edit_words(queries: Vec<String>, dictionary: Vec<String>) -> Vec<String> {
        let mut ans: Vec<String> = vec![];

        for word_1 in queries {
            for word_2 in &dictionary {
                let mut num_of_edits = 0;
                
                for (b1, b2) in word_1.chars().zip(word_2.chars()) {
                    if b1 != b2 {
                        num_of_edits += 1;
                    }

                    if num_of_edits > 2 {
                        break;
                    }
                }

                if num_of_edits <= 2 {
                    ans.push(word_1);
                    break;
                }
            }
        }

        ans
    }
}