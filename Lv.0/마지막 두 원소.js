function solution(num_list) {
    const numArr = num_list;
    const arrL = num_list[num_list.length - 1];
    const arrf = num_list[num_list.length - 2];

    if (arrL > arrf) numArr.push(arrL - arrf);
    else numArr.push(arrL * 2);

    return numArr;
}
console.log(solution([5, 2, 1, 7, 5]));
