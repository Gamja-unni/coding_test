function solution(myString) {
    // const arr = [...myString];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].charCodeAt() < 108) {
    //         arr[i] = "l";
    //     }
    // }
    // return arr.join("");
    return [...myString].map((x) => (x.charCodeAt() < 108 ? "l" : x)).join("");
}
console.log(solution("abcdevwxyz"));
