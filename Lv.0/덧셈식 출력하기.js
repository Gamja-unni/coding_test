const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ").map((x) => +x);
}).on("close", function () {
    const [num1, num2] = input;
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    // console.log(Number(input[0])+ " + " +Number(input[1])+ " = " +(Number(input[0]) + Number(input[1])));
});
