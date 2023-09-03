const my_string = "jaron";

function solution(my_string) {
    var answer = "";

    for (let i = my_string.length - 1; i >= 0; i--) {
        answer += my_string.charAt(i);
    }
    return answer;
}

/* 전개연산자로 문자열을 배열화 시킴 */
// return [...my_string].reverse().join("")

/* split()을 통해 문자열을 배열화 시킴 */
// return my_string.split("").reverse().join("")

console.log(solution(my_string));
