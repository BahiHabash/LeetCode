use std::cmp;

impl Solution {
    pub fn largest_altitude(gain: Vec<i32>) -> i32 {
        let mut highest_altitude = 0;
        let mut curr = 0;

        for n in gain {
            curr += n;
            highest_altitude = cmp::max(curr, highest_altitude);
        }

        highest_altitude
    }
}