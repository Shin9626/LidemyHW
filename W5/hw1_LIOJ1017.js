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
    let c = Number(lines[0]), n = Number(lines[1]);
    let value = [];

    for (let i = 0; i < n; i++) value[i] = Number(lines[2 + i]);

    value.sort((a, b) => b - a);
    console.log(c > n ? Sum(n, value) : Sum(c, value));
    return
};

function Sum(k, value) {
    let sum = 0;

    for (let i = 0; i < k; i++) sum += value[i]
    return sum;
}