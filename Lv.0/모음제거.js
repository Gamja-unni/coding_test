(function () {
    function solution(my_string) {
        const gather = ["a", "e", "i", "o", "u"];
        let arrString = [...my_string];

        /* splice */
        for(let i = 0; i < arrString.length; i++) {
            for(let j = 0; j < gather.length; j++) {
                if(arrString[i] === gather[j]) {
                    arrString.splice(i, 1);
                    i--;
                }
            }
        }
        return arrString.join("");

        /* slice */
        // for(let i = 0; i < arrString.length; i++) {
        //     for(let j = 0; j < gather.length; j++) {
        //         if(arrString[i] === gather[j]) {
        //             const front = arrString.slice(0, i);
        //             const end = arrString.slice(i+1, arrString.length);
        //             arrString = front.concat(end);
        //             i--;
        //         }
        //     }
        // }
        // return arrString.join("");

        /* replaceAll */
        // for(let i = 0; i < gather.length; i++) {
        //     my_string = my_string.replaceAll(gather[i], "");
        // }
        // return my_string;
    }

    console.log(solution("nice to meet you"));
})();