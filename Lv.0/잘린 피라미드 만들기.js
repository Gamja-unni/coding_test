function solution(a, b) {
    if (a >= b || a >= 15) {
        return "오류";
    }
    let str = "";
    for (let i = a; i <= b; i++) {
        if (i > 15) {
            break;
        }

        str += "*".repeat(i) + "\n";
    }

    return str.slice(0, str.length - 1);
}

console.log(solution(2, 18));
