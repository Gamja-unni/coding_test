function solution(n, control) {
    const arr = [...control];
    let num = n;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "w") num += 1;
        else if (arr[i] === "s") num -= 1;
        else if (arr[i] === "d") num += 10;
        else if (arr[i] === "a") num -= 10;
    }
    return num;
}
console.log(solution(0, "wsdawsdassw"));
