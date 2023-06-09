function solution(num_list) {
    let mul = 1;
    let pow = 0;
    for (let i = 0; i < num_list.length; i++) {
        mul *= num_list[i];
        pow += num_list[i];
    }

    if (mul < pow * pow) return 1;
    else return 0;
}

console.log(solution([5, 7, 8, 3]));
