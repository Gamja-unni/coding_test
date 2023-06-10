/*
머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 
피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, 
n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 
최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
*/

function solution(n) {
    let max = n > 6 ? n : 6;
    // for (;;) { // for문을 무한루프 돌리는방법 내부에 break조건이 필요함
    while (true) {
        if (max % n === 0 && max % 6 === 0) {
            break;
        }
        max++;
    }
    return max / 6;
}
console.log(solution(6));
console.log(solution(10));
console.log(solution(5));
console.log(solution(4));
