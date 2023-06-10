function solution(my_string, n) {
    const arr = [...my_string];
    const result = arr.slice(0, n).join("");
    return result;
}
console.log(solution("ProgrammerS123", 11));
