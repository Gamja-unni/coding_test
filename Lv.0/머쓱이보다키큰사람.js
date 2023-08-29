const array = [180, 120, 140];

function solution(array, height) {
    // let answer = [];
    let answer = 0;
    for (let i = 0; i < array.length; i++) {
        if (height < array[i]) {
            // answer.push(array[i]);
            // answer += 1
            answer = answer + 1;
        }
    }
    // return answer.length;
    return answer;
}

console.log(solution(array, 190));
