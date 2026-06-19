use std::cmp;

impl Solution {
    pub fn angle_clock(hour: i32, minutes: i32) -> f64 {
        let hour = hour as f64;
        let minutes = minutes as f64;

        /* 
            The angle between each two numbers = 360/12 = 30 degree
            The period between each two numbers = 60/12 = 5 minutes;
        */
        let min_degree: f64 = (minutes / 5.0) * 30.0;
        let hour_degree: f64 = (hour + (minutes / 60.0)) * 30.0;
        let diff = (min_degree - hour_degree).abs();

        if diff <= 180.0 { diff } else { 360.0 - diff }
    }
}