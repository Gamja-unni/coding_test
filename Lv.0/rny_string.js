function solution(rny_string) {
    const str = [...rny_string];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "m") str[i] = "rn";
    }
    return str.join("");
}
console.log(solution("masterpiece"));
