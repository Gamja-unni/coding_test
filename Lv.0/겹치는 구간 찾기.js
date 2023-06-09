function solution(input) {
    const str = String(input)
        .split("\n")
        .map((x) => Number(x));

    const [minA, maxA, minB, maxB] = str;
    const arrA = [];
    const arrB = [];
    for (let i = 0; i < 10; i++) {
        if (i >= minA && i <= maxA) {
            arrA.push(1);
        } else {
            arrA.push(0);
        }

        if (i >= minB && i <= maxB) {
            arrB.push(1);
        } else {
            arrB.push(0);
        }
    }

    for (let i = 0; i < 10; i++) {
        arrA[i] += arrB[i];
    }

    if (arrA.indexOf(2) === -1) {
        return "X";
    } else {
        return [arrA.indexOf(2), arrA.lastIndexOf(2)];
    }

    // let aArr = Array(10)
    //     .fill()
    //     .map((_, i) => (i >= minA && i <= maxA ? 1 : 0));
    // const bArr = Array(10)
    //     .fill()
    //     .map((_, i) => (i >= minB && i <= maxB ? 1 : 0));

    // aArr = aArr.map((x, i) => x + bArr[i]);
    // if (aArr.indexOf(2) === -1) {
    //     return "X";
    // } else {
    //     return [aArr.indexOf(2), aArr.lastIndexOf(2)];
    // }
}
