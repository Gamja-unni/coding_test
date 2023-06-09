function solution(n_str) {
    let arr = [...n_str];

    if (arr[0] === "0") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== "0") {
                arr = arr.splice(i);
                break;
            }
        }
    }
    return arr.join("");
}
console.log(solution("0010"));
