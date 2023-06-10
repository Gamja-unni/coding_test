function solution(num_list) {
    return num_list.sort((a, b) => a - b).splice(0, 5);
}
console.log(solution([12, 4, 15, 46, 38, 1, 14]));
