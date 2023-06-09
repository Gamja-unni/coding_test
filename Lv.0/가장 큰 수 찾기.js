function solution(array) {
    const max = Math.max(...array);
    return [max, array.indexOf(max)];
}
console.log(solution([1, 8, 3]));
