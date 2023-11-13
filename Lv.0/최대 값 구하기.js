const numbers = [0, 31, 24, 10, 1, 9];

function solution(numbers) {
    const answer = Math.max(...numbers);
    const index = numbers.indexOf(answer);
    numbers.splice(index, 1);

    const answer2 = Math.max(...numbers);

    return answer * answer2;
}

console.log(solution(numbers));
