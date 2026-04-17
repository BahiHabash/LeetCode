use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut seen: HashMap<i32, usize> = HashMap::new();

        for (num_1_idx, &num_1) in nums.iter().enumerate() {
            let num_2: i32 = target - num_1;

            if let Some(&num_2_index) = seen.get(&num_2) {
                return vec![num_1_idx as i32, num_2_index as i32];
            } else {
                seen.insert(num_1, num_1_idx);
            }
        }

        return vec![];
    }
}