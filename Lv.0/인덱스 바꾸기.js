function solution(my_string, num1, num2) {
    const arr = [...my_string];
    let arrChange = [...my_string];
    arrChange[num1] = arr[num2];
    arrChange[num2] = arr[num1];
    return arrChange.join("");
}
console.log(solution("hello", 1, 2));
