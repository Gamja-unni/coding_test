// function solution() {
//     return "Hi, Elice";
// }

// function solution() {
//     return "400\nbus\nlike";
// }

// function solution() {
//     return '"It\'s all right."';
// }

// const num = 400;
// const str = "bus";
// const str2 = "like";
// function solution() {
//     return num + " " + str + " " + str2;
// }

// function solution() {
//     const num1 = 1;
//     const num2 = 2;
//     const str1 = "1";
//     const str2 = "2";

//     return [num1 + num2, str1 + str2];
// }

// function solution(input) {
//     return input.split("\n");
// }

// function solution(str) {
//     const arr = str.split(" ");
//     return [typeof arr, arr[0]];
// }

// function solution(str) {
//     const arr = str.split(" ");
//     return [typeof arr, arr[0]];
// }

// function solution(money) {
//     if (money >= 1000) {
//         return "택시";
//     } else if (money >= 500) {
//         return "버스";
//     } else if (money >= 300) {
//         return "지하철";
//     } else {
//         return "도보";
//     }
// }

// function solution(input) {
//     const arr = input.split(" ");
//     const a = arr[0];
//     const b = arr[1];
//     const c = arr[2];
//     const d = arr[3];
//     if (a <= b && a === d && b > c && c < 6) {
//         return true;
//     } else if (a === b && a === c && a === d) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function solution(input) {
//     const answer = [];
//     for (let i = 1; i <= input; i++) {
//         if (input % i === 0) {
//             answer.push(i);
//         }
//     }

//     return answer;
// }

// function solution() {
//     const answer = [];
//     for (let i = 1; i <= 30; i++) {
//         if (
//             String(i).includes(3) ||
//             String(i).includes(6) ||
//             String(i).includes(9)
//         ) {
//             answer.push("짝!");
//         } else {
//             answer.push(i);
//         }
//     }

//     return answer;
// }

// function solution() {
//     const answer = [];
//     for (let i = 1; i <= 30; i++) {
//         if (
//             String(i).includes(3) ||
//             String(i).includes(6) ||
//             String(i).includes(9)
//         ) {
//             answer.push("짝!");
//         } else {
//             answer.push(i);
//         }
//     }

//     return answer;
// }

// function solution(num) {
//     const answer = [];
//     for (let i = 1; i <= num; i++) {
//         answer.push(i);
//     }

//     return answer;
// }

// function solution(s) {
//     const answer = [...s];
//     for (let i = 0; i < answer.length; i++) {
//         if (answer[i] === " ") {
//             answer[i] = "링디기디기\n";
//         } else if (answer[i] === ".") {
//             answer[i] = "딩딩딩\n";
//         } else {
//             answer[i] = "링딩동 ";
//         }
//     }

//     return answer.join("");
// }

// function solution() {
//     let korean = 7000;
//     let chinese = 6000;
//     let western = 8500;
//     let discount_korean = korean * 0.9;
//     let total_price = discount_korean * 55 + chinese * 43 + western * 52;
//     return { korean, chinese, western, discount_korean, total_price };
// }

// function solution() {
//     let a = 10;
//     let b = 10;

//     let case1 = a == b;
//     let case2 = a === b;

//     b = "10";

//     let case3 = a == b;
//     let case4 = a === b;
//     return { case1, case2, case3, case4 };

//     // var arr = ["case1", "case2", "case3"]
//     // 변수["case1"] == 변수.case1 == 변수[arr[0]]
// }

// function solution() {
//     let num = 204;
//     let string = "elice!";
//     return { num, string };
// }

function solution() {
    let answer = 0;
    let i = 0;
    let j = 0;
    for (i = 1; i <= 200; i++) {
        for (j = 2; j <= i; j++) {
            if (i % j == 0) {
                break;
            }
        }

        if (j == i) {
            answer += j;
        }
    }
    return answer;
}
console.log(solution());
