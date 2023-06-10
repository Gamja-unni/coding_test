function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}
console.log(solution(144));
