function solution(data) {
    let divisor = [];
    let divisorOfdivisor = [];
    for (let i = 1; i <= data; i++) {
        if (data % i === 0) {
            divisor.push(i);
        }
    }

    for (let i = 0; i < divisor.length; i++) {
        const num = divisor[i];
        const arr = [];
        for (let j = 1; j <= num; j++) {
            if (divisor[i] % j === 0) {
                arr.push(j);
            }
        }
        divisorOfdivisor.push(arr);
    }

    let str = "";
    for (let i = 0; i < divisorOfdivisor.length; i++) {
        for (let j = 0; j < divisorOfdivisor[i].length; j++) {
            str += divisorOfdivisor[i][j] + " ";
        }
        str = str.slice(0, str.length - 1);
        str += "\n";
    }
    return str.slice(0, str.length - 1);
}
console.log(solution(12));
