(function () {
    function solution(num) {
        let star = "";
        for (let i = 1; i <= num; i++) {
            star += " ".repeat(num - i) + "*".repeat(i) + "\n";
            // if (num !== i) {
            //   star += ' '.repeat(num - i) + '*'.repeat(i) + '\n';
            // } else {
            //   star += '*'.repeat(i);
            // }
        }
        return star.slice(0, star.length - 1);
    }

    console.log(solution(3));
})();
