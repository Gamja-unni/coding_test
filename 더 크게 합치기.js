function solution(a, b) {
    let aNum = Number(String(a) + String(b));
    let bNum = Number(String(b) + String(a));
    return aNum > bNum ? aNum : bNum;
}
console.log(solution(9, 91));
