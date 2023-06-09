function solution(a, b) {
    const arr = a.split(" ");
    //   console.log(arr);
    const num = b - 1;
    let cnt1 = 0;
    let cnt2 = 0;
    for (let i = num + 1; i < arr.length; i++) {
        if (arr[i] === "O") {
            cnt1 += 1;
        }
    }

    for (let i = num - 1; i >= 0; i--) {
        if (arr[i] === "O") {
            cnt2 += 1;
        }
    }

    if (cnt1 > cnt2) {
        return "오른쪽";
    } else if (cnt1 < cnt2) {
        return "왼쪽";
    } else {
        return "동일";
    }

    //   console.log(cnt1, cnt2);
}
console.log(solution("O X X O O", 3));
