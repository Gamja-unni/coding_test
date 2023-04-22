(function () {
    function solution(input) {
        let red = 250;
        let blue = 40;
        let white = 10;

        let count = Math.floor(input / red); //2
        let remain = input % red; //50
        let count2 = Math.floor(remain / blue); //1
        remain = remain % blue; //10
        let count3 = Math.floor(remain / white); //1
        remain = remain % white; //0

        if (remain === 0) {
            return count + count2 + count3;
        } else {
            return -1;
        }
    }

    console.log(solution(550));
})();
