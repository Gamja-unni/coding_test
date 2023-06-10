function solution(my_string, is_suffix) {
    let str = "";
    for (let i = 0; i < my_string.length; i++) {
        str = my_string.substring(i);
        console.log(str);
        if (is_suffix === str) {
            return 1;
        }
        if (is_suffix.length >= str.length) {
            break;
        }
    }
    return 0;
}
console.log(solution("banana", "abanana"));
