function solution(arr1, arr2) {
    const arrLen1 = arr1.length;
    const arrLen2 = arr2.length;

    let arrSum1 = arr1.reduce((a, b) => a + b, 0);
    let arrSum2 = arr2.reduce((a, b) => a + b, 0);

    if (arrLen1 > arrLen2) return 1;
    else if (arrLen2 > arrLen1) return -1;
    else if (arrLen1 === arrLen2) {
        if (arrSum1 > arrSum2) return 1;
        else if (arrSum2 > arrSum1) return -1;
        else if (arrSum1 === arrSum2) return 0;
    }
}
console.log(solution([49, 13], [70, 11, 2]));
