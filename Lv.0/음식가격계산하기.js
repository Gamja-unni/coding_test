(function () {
    function solution() {
        // 한식 가격
        var korean = 7000;

        // 중식 가격
        var chinese = 6000;

        // 양식 가격
        var western = 8500;
        
        // 할인된 한식의 가격
        var discount_korean = korean - korean * 0.1;

        var total_price = discount_korean * 55 + chinese * 43 + western * 52;

        return { korean, chinese, western, discount_korean, total_price };
    }
    
    console.log(solution());
})();