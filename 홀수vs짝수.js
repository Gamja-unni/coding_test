function solution(num_list) {
    let num1 = 0;
    let num2 = 0;
    num_list.map((x, i) => {
        if (i % 2 === 0) num1 += x;
        else num2 += x;
    });
    if (num1 > num2) return num1;
    else return num2;
}
console.log(solution([4, 2, 6, 1, 7, 6]));
