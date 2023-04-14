(function () {
    function solution() {
        let a = 10;
        let b = 10;

        const case1 = a == b;
        const case2 = a === b;

        b = '10';

        const case3 = a == b;
        const case4 = a === b;
        return { case1, case2, case3, case4 };
    }

    console.log(solution());
})();