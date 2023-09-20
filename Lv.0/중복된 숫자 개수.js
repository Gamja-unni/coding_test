const array = [1, 1, 2, 3, 4, 5];

function solution(array, n) {
    let answer = 0;
    for (let i = 0; i < array.length; i++) {
        if (n === array[i]) {
            // answer += 1;
            answer = answer + 1;
        }
    }
    return answer;
}

console.log(solution(array, 1));
