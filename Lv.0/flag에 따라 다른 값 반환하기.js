function solution(a, b, flag) {
    if (flag === true) {
        return a + b;
    } else {
        return a - b;
    }
}

console.log(solution(-4, 7, true));
