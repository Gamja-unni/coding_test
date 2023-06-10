function solution(numbers, direction) {
    if (direction === "right") {
        const num = numbers.pop();
        numbers = [num, ...numbers];
    } else {
        const num = numbers.shift();
        numbers = [...numbers, num];
    }
    return numbers;
}
console.log(solution([1, 2, 3], "right"));
