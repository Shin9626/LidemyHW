var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
    lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function () {
    solve(lines)
})

function parseNumber(i) {
    let sum = 0
    let digits = getDigits(i)
    let q = i

    while (q != 0) {
        let num = q % 10
        sum += Math.pow(num, digits)
        q = Math.floor(q / 10)
    }
    return sum === i
};

function getDigits(i) {
    let sum = 0;
    while (i != 0) {
        i = Math.floor(i / 10)
        sum++
    }
    return sum
};

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
    let temp = lines[0].split(' ')
    let n = Number(temp[0])
    let m = Number(temp[1])

    for (let i = n; i <= m; i++) {
        if (parseNumber(i)) console.log(i)
    }
};