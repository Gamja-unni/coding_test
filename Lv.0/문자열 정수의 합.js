function solution(num_str) {
    let arr = [...num_str];
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num += Number(arr[i]);
    }
    return num;
}
console.log(solution("123456789"));
