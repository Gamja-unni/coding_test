function solution(arr, n) {
    if (arr.length % 2 === 1) {
        return arr.map((x, i) => {
            if (i % 2 === 0) return (x = x + n);
            else return x;
        });
    } else {
        return arr.map((x, i) => {
            if (i % 2 === 1) return (x = x + n);
            else return x;
        });
    }
}
console.log(solution([444, 555, 666, 777], 100));
