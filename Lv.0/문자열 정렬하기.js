function solution(my_string) {
    const arr = [...my_string];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) result.push(Number(arr[i]));
    }
    return result.sort((a, b) => a - b);
}
console.log(solution("hi12392"));
