function solution(num_list) {
    let idx = -1;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] < 0) {
            idx = i;
            break;
        }
    }
    return idx;
}

console.log(solution([13, 22, 53, 24, 15, 6]));
