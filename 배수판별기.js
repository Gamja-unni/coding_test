(function () {
  function solution(num) {
    const answer = [];
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        answer.push(i + "의 배수입니다.");
      }
    }
    return answer.join("\n");
  }

  console.log(solution(10));
})();
