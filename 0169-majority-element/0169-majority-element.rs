use std::collections::HashMap;

impl Solution {
    pub fn majority_element(mut nums: Vec<i32>) -> i32 {
        let mut num_freq: HashMap<i32, i32> = HashMap::new();

        for num in nums {
            *num_freq.entry(num).or_insert(0) += 1;
        }

        let mut majority_num: i32 = 0;
        let mut max_freq: i32 = 0;

        for (&num, &freq) in num_freq.iter() {
            if freq > max_freq {
                max_freq = freq;
                majority_num = num;
            } 
        }

        majority_num
    }
}