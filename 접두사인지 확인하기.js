function solution(my_string, is_prefix) {
    let str = my_string.substring(0, is_prefix.length);
    if (str === is_prefix) return 1;
    return 0;
}
console.log(solution("banana", "ban"));
