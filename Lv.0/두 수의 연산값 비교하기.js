(function () {
    function solution(a, b) {
        let str = Number(String(a) + String(b));
        let num = 2 * a * b;
        if (str > num) {
            return str;
        } else if (str < num) {
            return num;
        } else if (str === num) {
            return str;
        }
    }

    console.log(solution(2, 91));
})();
