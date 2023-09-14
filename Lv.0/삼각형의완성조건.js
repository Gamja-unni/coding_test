(function () {
    // const sides = [5,2,3,1,4];
    // const sides = [3,1,2];
    const sides = [100, 100, 100];

    function solution(sides) {
        // const maxValue = Math.max(...sides);
        // const maxIdx = sides.indexOf(maxValue);

        // sides.splice(maxIdx, 1)

        // let answer = 0;

        // for(let i=0; i<sides.length; i++) {
        //     answer+=sides[i];
        // }

        // if(answer > maxValue) {
        //     return 1
        // } else {
        //     return 2
        // }

        sides.sort(function (a, b) {
            // 오름차순 정렬
            // return a-b;

            // 내림차순 정렬
            return b - a;
        });

        // sides.sort((a,b) => b-a);

        const maxValue = sides[0];

        if (sides[1] + sides[2] > maxValue) {
            return 1;
        } else {
            return 2;
        }
    }

    // 화살표 함수
    // function solution2(sides) {}
    const solution2 = (sides) => {};

    console.log(solution(sides));
})();
