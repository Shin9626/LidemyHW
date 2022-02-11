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
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
    //輸入處理 
    let n = Number(lines[0]);
    let stairs = lines[1].split(' ');
    let sLength = 1;
    let max = 1;

    for (let i = 1; i < n; i++) {

        if (stairs[i] == stairs[i - 1]) sLength++;

        if (i == n - 1 || (stairs[i] != stairs[i - 1])) {
            if (max < sLength) max = sLength;
            sLength = 1;
        }
    }

    console.log(max)
};