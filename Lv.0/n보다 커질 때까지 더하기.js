function solution(numbers, n) {
    let num = 0;
    for (let i = 0; i < numbers.length; i++) {
        num += numbers[i];
        if (num > n) {
            break;
        }
    }
    return num;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
