(function () {
    function solution(input) {
        const num_tuple = ["2", "3", "5", "6", "7", "8", "9"];
        // return [...input].filter((x) => num_tuple.indexOf(x) > -1).slice(0, 5);
        const inpArr = [...input];
        const result = [];

        for (let i = 0; i < inpArr.length; i++) {
            for (let j = 0; j < num_tuple.length; j++) {
                if (inpArr[i] === num_tuple[j]) {
                    result.push(inpArr[i]);
                }
            }
        }

        return result.splice(0, 5);
    }

    console.log(solution("asd222222"));
})();
