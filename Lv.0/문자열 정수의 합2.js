function solution(num_str) {
    const numArr = [...num_str];
    let num = 0;
    for (let i = 0; i < numArr.length; i++) {
        num += Number(numArr[i]);
    }
    return num;
}
console.log(solution("123456789"));
