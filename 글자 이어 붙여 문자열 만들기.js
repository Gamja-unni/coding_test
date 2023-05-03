function solution(my_string, index_list) {
    const arr = [...my_string];
    return index_list.map((x) => arr[x]).join("");
}
console.log(
    solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
