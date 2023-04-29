function solution(num_list) {
    let answer = 1;

    if (num_list.length >= 11) {
        answer = 0;
    }
    for (let i = 0; i < num_list.length; i++) {
        if (num_list.length >= 11) {
            answer += num_list[i];
        } else {
            answer *= num_list[i];
        }
    }
    return answer;
}
console.log(solution([2, 3, 4, 5]));
