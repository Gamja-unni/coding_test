(function () {
    function solution(input) {
        let num = 0;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === "웩") {
                num = i;
            }
        }
        return num;
    }

    console.log(solution(['과자', '과자', '과자', '커피', '과자', '웩', '음료수', '음료수', '과자', '커피', '커피', '커피']))
})();
