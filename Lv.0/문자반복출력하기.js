(function () {
    function solution(my_string, n) {
        let answer = "";
        for(let i=0; i<my_string.length; i++) {
            for(let j=0; j<n; j++) {
                answer += my_string[i];
            }
        }
        return answer;

        // return [...my_string].map(x => x.repeat(n)).join("");
    }

    console.log(solution("hello", 3));
})();