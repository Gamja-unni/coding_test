function solution(my_string, alp) {
    let strArr = [...my_string];
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === alp) {
            strArr[i] = strArr[i].toUpperCase();
        }
    }
    return strArr.join("");
}
console.log(solution("programmers", "p"));
