function solution(my_string, m, c) {
    return [...my_string].filter((_, i) => i % m === c - 1).join("");
}
console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
console.log(solution("programmers", 1, 1));
