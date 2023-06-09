(function () {
    function solution(num_list, n) {
        return [...num_list].splice(0, n);
    }

    console.log(solution([5, 2, 1, 7, 5], 3));
})();