(function () {
    function solution(str) {
        const arr = [...str];
        let string = "";
        for (let i = 0; i < arr.length / 2; i++) {
            if (arr[i] === arr[arr.length - 1 - i]) {
                string += "Same" + "\n";
            } else {
                string += "Different" + "\n";
            }
        }
        return string.slice(0, string.length - 1);
    }
    console.log(solution("abcdba"));
})();
