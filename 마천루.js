(function () {
    function solution(input) {
        let str = "";
        for (let i = 1; i <= input; i++) {
            if (i >= 5) {
                //   str += Array(5).fill('*').join('') + '\n';
                str += "*".repeat(5) + "\n";
            } else {
                //   str += Array(i).fill('*').join('') + '\n';
                str += "*".repeat(i) + "\n";
            }
        }
        return str.slice(0, str.length - 1);
    }

    console.log(solution(3));
})();
