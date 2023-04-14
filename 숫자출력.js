(function () {
    function solution(num) {
        let answer = [];
        for (let i = 1; i <= num; i++) {
            answer.push(i);
        }
        return answer;
    }

    console.log(solution(47));
})();