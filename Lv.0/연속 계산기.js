function solution(data) {
    const arrData = data.split(" ");
    let num1 = Number(arrData[0]);
    const num2 = Number(arrData[1]);
    const num3 = arrData[2].split("");

    let sum = 0;
    console.log(num3);
    for (let i = 0; i < num3.length; i++) {
        if (num3[i] === "+") {
            num1 = num1 + num2;
        } else if (num3[i] === "-") {
            num1 = num1 - num2;
        } else if (num3[i] === "*") {
            num1 = num1 * num2;
        } else if (num3[i] === "/") {
            num1 = Math.floor(num1 / num2);
        }
        sum += num1;
    }

    return num1 + " " + sum;
}
console.log(solution("124 7 +/-**"));
