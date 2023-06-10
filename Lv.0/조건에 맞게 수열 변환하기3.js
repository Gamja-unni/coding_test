function solution(arr, k) {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (k % 2 === 0) {
            answer.push(arr[i] + k);
        } else if (k % 2 === 1) {
            answer.push(arr[i] * k);
        }
    }
    return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98], 3));
