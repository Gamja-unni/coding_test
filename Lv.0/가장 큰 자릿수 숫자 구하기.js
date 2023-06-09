(function () {
    function solution(number) {
        let str = String(number);
        let num = str.slice(0, 1);
        
        return Number(num);
    }

    console.log(solution(753));
})();
