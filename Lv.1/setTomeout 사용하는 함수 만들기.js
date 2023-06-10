/*
함수명: printAfterNSeconds
입력: 숫자 n
반환: 없음 (return 별도로 안 해도 됨)

하기 예시 화면과 같이, 함수 실행 n초 후에 
“n초가 경과되었습니다.” 문구가 출력(console.log)됨
*/

function printAfterNSeconds(n) {
    const text = `${n}초가 경과되었습니다.`;
    const delay = n * 1000;
    setTimeout(() => console.log(text), delay);
}  
console.log(printAfterNSeconds(3))