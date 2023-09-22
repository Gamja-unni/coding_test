(function () {
    function solution(n) {
        const answer = [];
        for (let i = 0; i <= n; i++) {
            if (i % 2 === 1) {
                answer.push(i);
            }
        }
        return answer;
    }

    console.log(solution(15));
})();
