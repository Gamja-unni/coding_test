function solution(my_string, n) {
    const arr = [...my_string];
    const result = [];
    for (let i = arr.length - n; i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result.join("");
}
console.log(solution("ProgrammerS123", 11));
