(function () {
    function solution(my_string) {
        const strArr = [...my_string];
        let answer = 0;
        for(let i = 0; i < strArr.length; i++) {
            if(strArr[i] >= 1){
                answer += Number(strArr[i]);
            }
        }
        return answer;
    }

    console.log(solution("aAb1B2cC34oOp"));
})();