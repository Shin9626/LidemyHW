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
    for (let i = 0; i < lines.length; i++) {
        //逐行抓出並執行
        var line = lines[i]

        console.log(LowerToUpper(line))
    }
};

function LowerToUpper(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z') {
            return (str.charAt(i).toUpperCase()) + str.slice(i + 1)
        }

        else if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
            return str
        }
    }
    return str
}


