(function () {
    function solution(input) {
        let price = 0;
        const obj = {
            아메리카노: 4100,
            카페라떼: 4600,
            카라멜마끼아또: 5100,
        };
        for (let i = 0; i < input.length; i++) {
            const menu = input[i];
            price += obj[menu];
            // if (input[i] === "아메리카노") {
            //     price += 4100;
            // } else if (input[i] === "카페라떼") {
            //     price += 4600;
            // } else if (input[i] === "카라멜마끼아또") {
            //     price += 5100;
            // }
        }
        return price;
    }

    console.log(solution(["아메리카노", "카페라떼", "카라멜마끼아또"]));
})();
