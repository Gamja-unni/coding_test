(function () {
    function solution(price) {
        let salePrice = 0;
        if (price >= 500000) {
            salePrice = price * 0.2;
        } else if (price >= 300000) {
            salePrice = price * 0.1;
        } else if (price >= 100000) {
            salePrice = price * 0.05;
        }
        return Math.floor(price - salePrice);
    }

    console.log(solution(580000));

    function test2(arr) {
        // let answer = 0;
        // for(let i=0; i<arr.length; i++) {
        //     answer += arr[i];
        // }
        // return answer;
        return arr.reduce((a, b) => a + b);
        // return arr.map(x => x * 2)
    }

    console.log(test2([1, 2, 3, 4, 5]));
})();
