function solution(myString, pat) {
    const arr = [...myString];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "A") {
            arr[i] = "B";
        } else if (arr[i] === "B") {
            arr[i] = "A";
        }
    }
    const str = arr.join("");
    if (str.includes(pat)) return 1;
    else return 0;
}
console.log(solution("ABBAA", "AABB"));
