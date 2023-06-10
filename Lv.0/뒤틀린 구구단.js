function solution() {
    let str = [];
    // let arr = [];
    for (let i = 2; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            str.push([i, j, i * j]);
        }
    }
    str.sort((a, b) => a[2] - b[2]);
    return str.map((s) => `${s[0]} * ${s[1]} = ${s[2]}`).join("\n");
}
console.log(solution());
