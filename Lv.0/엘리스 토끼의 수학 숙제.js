(function () {
    function solution(num) {
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 1; i <= num; i++) {
            sum1 += i;
            sum2 += i * i;
        }
        return sum1 * sum1 - sum2;
    }

    console.log(solution(10));
})();
