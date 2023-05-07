function solution(myString, pat) {
    let str = myString.toUpperCase();
    let p = pat.toUpperCase();
    if (str.includes(p)) return 1;
    else return 0;
}
console.log(solution("AbCdEfG", "aBc"));
