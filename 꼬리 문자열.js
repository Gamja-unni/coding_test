function solution(str_list, ex) {
    const arr = [];
    for (let i = 0; i < str_list.length; i++) {
        if (!str_list[i].includes(ex)) {
            arr.push(str_list[i]);
        }
    }
    return arr.join("");
}
console.log(solution(["abc", "def", "ghi"], "ef"));
