const signal1 = {
    a: "n",
    b: "d",
    c: "a",
    d: "b",
    e: "e",
    f: "l",
    g: "j",
    h: "o",
    i: "z",
    j: "u",
    k: "y",
    l: "v",
    m: "w",
    n: "q",
    o: "x",
    p: "r",
    q: "p",
    r: "f",
    s: "g",
    t: "t",
    u: "m",
    v: "h",
    w: "i",
    x: "c",
    y: "k",
    z: "s",
};

const signal2 = {
    a: "z",
    b: "y",
    c: "x",
    d: "w",
    e: "v",
    f: "u",
    g: "t",
    h: "s",
    i: "r",
    j: "q",
    k: "p",
    l: "o",
    m: "n",
    n: "m",
    o: "l",
    p: "k",
    q: "j",
    r: "i",
    s: "h",
    t: "g",
    u: "f",
    v: "e",
    w: "d",
    x: "c",
    y: "b",
    z: "a",
};

// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(code) {
    const arr = code.split(" ");
    const arrNum = arr[0].split("");
    const arrStr = arr[1].split("");
    let str = "";

    for (let i = 0; i < arrNum.length; i++) {
        if (arrNum[i] === "0") {
            str += signal1[arrStr[i]];
        } else if (arrNum[i] === "1") {
            str += signal2[arrStr[i]];
        }
    }

    return str;
}
console.log(solution("01011 eowxvqp"));
