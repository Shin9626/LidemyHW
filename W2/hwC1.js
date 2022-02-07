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

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
    let [n, m] = lines[0].split(' ')
    let arr = []

    for (let i = 0; i < n; i++) {
        arr[i] = Number(lines[i + 1])
    }

    n = Number(n)

    for (let i = n + 1; i < lines.length; i++) {
        console.log(SearchIndex(arr, Number(lines[i])))
    }
}

function SearchIndex(arr, target) {
    let l = 0
    let r = arr.length - 1

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (target > arr[mid]) l = mid + 1
        else if (target < arr[mid]) r = mid - 1
        else return mid
    }

    return -1
}