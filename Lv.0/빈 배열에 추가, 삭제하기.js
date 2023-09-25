/**
 * 빈 배열에 추가, 삭제하기
 * @param {*} arr
 * @param {*} flag
 * @returns
 */
function solution(arr, flag) {
    let result = [];
    flag.forEach((x, i) => {
        if (x) {
            result = result.concat(new Array(arr[i] * 2).fill(arr[i]));
        } else {
            for (let j = 0; j < arr[i]; j++) {
                result.pop();
            }
        }

        console.log(result);
    });
    return result;
}
console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false]));
