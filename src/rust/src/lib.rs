#[no_mangle]
pub fn add(num1: i32, num2: i32) -> i32 {
    num1 + num2
}

#[no_mangle]
pub fn calculate(num1: f64, num2: f64, operation: isize) -> f64 {
    match operation {
        1 => {
            num1 + num2
        }
        2 => {
            num1 - num2
        }
        3 => {
            num1 * num2
        }
        4 if num2 != 0.0 => {
            num1 / num2
        }
        _ => {
            0.0
        }
    }
}
