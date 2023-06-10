function solution(arr) {
    return arr.map((x) => {
        if (x % 2 === 1 && x < 50) return x * 2;
        else if (x % 2 === 0 && x >= 50) return x / 2;
        return x;
    });
}
console.log(solution([1, 2, 3, 100, 99, 98]));
