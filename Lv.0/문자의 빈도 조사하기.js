function solution(str) {
    const lower = str.toLowerCase();
    const arr = [...lower.split(" ").join("")];

    const myString = new Object();

    for (let i = 0; i < arr.length; i++) {
        if (myString[arr[i]]) {
            myString[arr[i]] += 1;
        } else {
            myString[arr[i]] = 1;
        }
    }
    return myString;
}
console.log(solution("My name is Elice"));
