const dot = [2, 4];
function solution(dot) {
    let answer = [];
    for (let i = 0; i < dot.length; i++) {
        answer[i] = Math.sign(dot[i]);

        if (answer[0] === 1 && answer[1] === 1) {
            return 1;
        } else if (answer[0] === -1 && answer[1] === 1) {
            return 2;
        } else if (answer[0] === -1 && answer[1] === -1) {
            return 3;
        } else if (answer[0] === 1 && answer[1] === -1) {
            return 4;
        }
    }
}
console.log(solution(dot));
