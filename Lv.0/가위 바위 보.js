function solution(rsp) {
    const arr = [...rsp];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "2") {
            result.push("0");
        } else if (arr[i] === "0") {
            result.push("5");
        } else if (arr[i] === "5") {
            result.push("2");
        }
    }
    return result.join("");
}
console.log(solution("205"));
