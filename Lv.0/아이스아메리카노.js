(function () {
    function solution(money) {
        const answer = [];
        const price = 5500;

        let count = Math.floor(money / price);
        // let change = money - (price * count);
        let change = money % price;
        
        return answer.concat(count, change);
        // return [count, change];
    }

    console.log(solution(15000));
})();