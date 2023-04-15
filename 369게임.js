(function () {
    function solution(input) {
        var arr = input.split(' ');
        var a = arr[0];
        var b = arr[1];
        var c = arr[2];
        var d = arr[3];

        if (a <= b && a == d && b > c && c < 6) {
            return true;
        } else if (a == b && a == c && a == d) {
            return true;
        } else {
            return false;
        }
    }

    console.log(solution('4 6 8 3'));
})();