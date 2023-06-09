function solution() {
    let cnt = 0;
    for (let i = 1; i <= 10000; i++) {
        const arr = [...String(i)];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j].includes(8)) {
                cnt += 1;
            }
        }
    }
    return cnt;
}
