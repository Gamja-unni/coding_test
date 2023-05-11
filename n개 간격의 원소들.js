function solution(num_list, n) {
    let answer = [];
    for (let i = 0; i < num_list.length; i++) {
        if (i % n === 0) {
            answer.push(num_list[i]);
        }
        // answer.push(num_list[0]);
        // answer.push(num_list[n]);
        // // if (n > num_list.length) {
        // answer.push(num_list[n * n]);
        // // }
    }
    return answer;
}
console.log(solution([4, 2, 6, 1, 7, 6], 4));
// 4 2 6 1 7 6
// 0 1 2 3 4 5
// 0 x
