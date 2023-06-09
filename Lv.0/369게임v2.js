(function () {
    function solution(input) {
        if ((input + 1) % 3 === 0) {
            return "짝!";
        } else {
            return input + 1;
        }
    }

    console.log(solution(11));
})();
