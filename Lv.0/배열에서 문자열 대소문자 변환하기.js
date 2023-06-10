function solution(strArr) {
    return strArr.map((x, i) => {
        if (i % 2 === 0) x = x.toLowerCase();
        else x = x.toUpperCase();
        return x;
    });
}
console.log(solution(["AAA", "BBB", "CCC", "DDD"]));
