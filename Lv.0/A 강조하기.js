function solution(myString) {
    const arr = [...myString];
    return arr
        .map((x) => {
            if (x === "a" || x === "A") return x.toUpperCase();
            else return x.toLowerCase();
        })
        .join("");
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === "a") arr[i] = arr[i].toUpperCase();
    //     else arr[i] = arr[i].toLowerCase();
    // }
    // return arr.join("");
}
console.log(solution("PrOgRaMmErSA"));
