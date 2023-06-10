(function () {
    function solution(s) {
        var answer = s.split('');
        var str = '';

        for (let i = 0; i < answer.length; i++) {
            if (answer[i] == ' ') {
                str += '링디기디기\n';
            } else if (answer[i] == '.') {
                str += '딩딩딩\n';
            } else {
                str += '링딩동 ';
            }
        }
        return str;
    }

    console.log(solution('나는 베짱이.'));
})();