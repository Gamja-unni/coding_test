function solution(input) {
    const str = String(input)
        .split("\n")
        .map((x) => Number(x));

    const [minA, maxA, minB, maxB] = str;

    let aArr = Array(10)
        .fill()
        .map((_, i) => (i >= minA && i <= maxA ? 1 : 0));
    const bArr = Array(10)
        .fill()
        .map((_, i) => (i >= minB && i <= maxB ? 1 : 0));

    aArr = aArr.map((x, i) => x + bArr[i]);
    if (aArr.indexOf(2) === -1) {
        return "X";
    } else {
        return [aArr.indexOf(2), aArr.lastIndexOf(2)];
    }
}
