function solution(input) {
    const menu = {
        떡볶이: 5000,
        김밥: 2000,
        튀김세트: 3000,
        순대: 4000,
        라면: 6000,
        콜라: 1000,
        사이다: 1000,
    };
    const result = {
        A: 0,
        B: 0,
        C: 0,
    };

    for (let i = 0; i < input.length; i++) {
        let name = input[i][0];
        let price = menu[input[i][1]];
        let cnt = input[i][2];
        // const [name, price, cnt] = input[i];

        if (name === "K") {
            //   result['A'] += (price * cnt) / 3;
            //   result['B'] += (price * cnt) / 3;
            //   result['C'] += (price * cnt) / 3;
            for (key of Object.keys(result)) {
                result[key] += (price * cnt) / 3;
            }
        } else {
            result[name] += price * cnt;
        }

        // if (name === 'A') {
        //   result['A'] += price * cnt;
        // } else if (name === 'B') {
        //   result['B'] += price * cnt;
        // } else if (name === 'C') {
        //   result['C'] += price * cnt;
        // } else {
        //   result['A'] += (price * cnt) / 3;
        //   result['B'] += (price * cnt) / 3;
        //   result['C'] += (price * cnt) / 3;
        // }
    }

    return result;
}

const orders = [
    ["A", "라면", 1],
    ["B", "김밥", 2],
    ["B", "떡볶이", 1],
    ["K", "튀김세트", 1],
    ["C", "콜라", 1],
];
console.log(solution(orders));
