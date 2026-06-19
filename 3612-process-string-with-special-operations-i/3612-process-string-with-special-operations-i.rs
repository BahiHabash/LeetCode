impl Solution {
    pub fn process_str(s: String) -> String {
        let mut str = String::new();

        for c in s.chars() {
            match c {
                '*' => { str.pop(); }
                '#' => { str.push_str(&str.clone()); }
                '%' => { str = str.chars().rev().collect(); }
                ch => { str.push(ch); }
            }
        }

        str
    }
}