(function () {
    function solution(input) {
        // Number([..."1 3 2"].splice(2,1)[0])

        const arr = input.split(" ");
        return Number(arr[1]);
    }

    console.log(solution("1 3 2"));
})();
