function solution(hp) {
    let ant1 = 5;
    let ant2 = 3;
    let ant3 = 1;

    let result1 = 0;
    let result2 = 0;
    let result3 = 0;

    result1 = Math.floor(hp / ant1);
    result2 = Math.floor((hp - result1 * ant1) / ant2);
    result3 = Math.floor((hp - (result1 * ant1 + result2 * ant2)) / ant3);
    return result1 + result2 + result3;
}
console.log(solution(23));
