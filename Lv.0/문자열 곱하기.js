(function () {
    function solution(my_string, k) {
        return Array(k + 1).join(my_string);
    }

    console.log(solution("love", 10));
})();
