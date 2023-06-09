function solution(a, b) {
    const arrA = [...a.split(",")];
    const arrB = [...b.split(",")];
    const centerA = Number(arrA[0]);
    const maxA = Number(arrA[1]);
    const centerB = Number(arrB[0]);
    const maxB = Number(arrB[1]);

    let minA = centerA - (maxA - centerA);
    if (maxA < 0) {
        minA = centerA - Math.abs(maxA - Math.abs(centerA));
    }
    let minB = centerB - (maxB - centerB);
    if (maxB < 0) {
        minA = centerB - Math.abs(maxB - Math.abs(centerB));
    }
    // let minA = centerA - (maxA - centerA);
    // let minB = centerB - (maxB - centerB);

    let start = minA > minB ? minB : minA;
    let end = maxA > maxB ? maxA : maxB;
    console.log(minA, maxA, minB, maxB, start, end);
    const arrayA = [];
    const arrayB = [];

    for (let i = start; i <= end; i++) {
        if (i >= minA && i <= maxA) {
            arrayA.push(1);
        } else {
            arrayA.push(0);
        }

        if (i >= minB && i <= maxB) {
            arrayB.push(1);
        } else {
            arrayB.push(0);
        }
    }
    console.log(arrayA, arrayB);

    for (let i = 0; i < arrayA.length; i++) {
        arrayA[i] += arrayB[i];
    }
    console.log(arrayA);

    if (arrayA.indexOf(2) === -1) {
        return 0;
    } else if (arrayA.lastIndexOf(2) === arrayA.indexOf(2)) {
        return 1;
    } else {
        return arrayA.lastIndexOf(2) - arrayA.indexOf(2);
    }
}

// console.log(solution("2,4", "4,8"));
// console.log(solution("2,4", "6,8"));
// console.log(solution("3,4", "4,8"));
// console.log(solution("-2,4", "4,8"));
console.log(solution("-2,0", "0,2"));
