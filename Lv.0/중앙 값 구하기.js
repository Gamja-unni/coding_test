const array = [9, -1, 0];

function solution(array) {
    const answer = array.sort(function (a, b) {
        return a - b;
    });

    const index = (answer.length - 1) / 2;
    return answer[index];
}

console.log(solution(array));
