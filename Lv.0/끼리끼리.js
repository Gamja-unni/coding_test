function solution(input) {
    const arr = input.split(" ");
    const red_pocket = [];
    const blue_pocket = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            red_pocket.push(arr[i]);
        } else {
            blue_pocket.push(arr[i]);
        }
    }
    return [red_pocket, blue_pocket];
}

console.log(solution("-1 2 1 -2 7 3 -1 0"));
