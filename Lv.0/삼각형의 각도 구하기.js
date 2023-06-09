(function () {
    function solution(angle) {
        let str1 = Number(angle.slice(0, 2));
        let str2 = Number(angle.slice(3));

        if (str1 + str2 >= 180) return 0;
        else return 180 - (str1 + str2);
    }

    console.log(solution("30 70"));
})();
