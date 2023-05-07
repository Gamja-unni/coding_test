function solution(num_list) {
    const even = [];
    const odd = [];
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) even.push(num_list[i]);
        else odd.push(num_list[i]);
    }
    return Number(even.join("")) + Number(odd.join(""));
}
console.log(solution([3, 4, 5, 2, 1]));
