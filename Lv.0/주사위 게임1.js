function solution(a, b) {
    let num = 0;
    if (a % 2 === 1 && b % 2 === 1) num = a * a + b * b;
    else if (a % 2 === 1 || b % 2 === 1) num = 2 * (a + b);
    else num = Math.abs(a - b);
    return num;
}
console.log(solution(6, 1));
