/*
정수 리스트 num_list와 정수 n이 주어질 때, num_list를 
n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 
n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

#[2, 1, 6]에서 첫 번째 이후의 원소는 [1, 6]이고 첫 번째까지의 원소는 [2]입니다. 두 리스트를 이어 붙이면 [1, 6, 2]가 됩니다.
*/

function solution(num_list, n) {
    return [...num_list.splice(n), ...num_list.splice(0, n)];
}
console.log(solution([2, 1, 6], 1));
