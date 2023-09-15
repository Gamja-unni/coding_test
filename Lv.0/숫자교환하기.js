function solution() {
    let num1 = 50;
    let num2 = 60;
    let tmp = num1;
    num1 = num2;
    num2 = tmp;

    let cnt = 10;
    for (let i = 0; i < 10; i++) {
        cnt += 1;
        // cnt -= 1
    }
    console.log(cnt);

    // num3 = num1;
    // num1 = num2;
    // num2 = num3;

    // console.log(`${num1}, ${num2}`);
}

solution();
