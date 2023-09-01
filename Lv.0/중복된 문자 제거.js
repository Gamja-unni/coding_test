/*
문자열 my_string이 매개변수로 주어집니다. 
my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 
문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
    let arr = my_string.split("");
    return arr.filter((v, i) => arr.indexOf(v) === i).join("");
}

console.log(solution("people"));

/*
arr.indexOf(v) === i;

filter() 함수로 전달 된 callback 함수는
검사하고 있는 값(v)이 배열(arr)에서 가장 처음으로 나타는 index와
검사하고 있는 원소의 index와 비교하여 같을 경우에만 true를 리턴합니다.

arr값이 순서대로 전달되면
'arr.indexOf(v) === i' 구문은
true, true, true, false, true, false 를 순서대로 리턴하여
중복되는 값이 첫번째로 나타나는 경우에만 filter 함수에서 걸러지도록 하였습니다.
*/
