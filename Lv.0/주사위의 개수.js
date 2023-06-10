function solution(box, n) {
    let num1 = Math.floor(box[0] / n);
    let num2 = Math.floor(box[1] / n) * num1;
    let num3 = Math.floor(box[2] / n) * num2;
    return num3;
}
console.log(solution([10, 8, 6], 3));
