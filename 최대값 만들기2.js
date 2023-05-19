function solution(numbers) {
    let arr = numbers.sort((a, b) => a - b);
    let num1 = arr[0] * arr[1];
    let num2 = arr[arr.length - 1] * arr[arr.length - 2];

    return num1 > num2 ? num1 : num2;
}
console.log(solution([1, 2, -3, 4, -5]));
