<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>
        function solution(numer1, denom1, numer2, denom2) {
            const lcm = getLCM(denom1, denom2);
            const a = lcm / denom1 * numer1;
            const b = lcm / denom2 * numer2;
            return [a+b,lcm];
        }

        let getLCM = (num1, num2) => {
            let lcm = 0;

            while (true) {
                if ((lcm % num1 == 0) && (lcm % num2 == 0)) {
                    break;
                }
                lcm++;
            }
            return lcm
        }
        console.log(solution(1,2,2,4));
    </script>
</body>

</html>