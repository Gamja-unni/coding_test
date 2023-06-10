(function () {
    function solution(n) {
        let answer = 0;
        const str = String(n);
        const arrNum = str.split("");
        for(let i=0; i<arrNum.length; i++) {
           answer += parseInt(arrNum[i]);
        }
        return answer;
    }

    console.log(solution(930211));
})();