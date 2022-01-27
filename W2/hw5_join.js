function Join(arr, str) {
    var res = ""
    for (let i = 0; i < arr.length; i++) { 
        res += arr[i]

        if (i != arr.length-1) res += str
    }
    return res
}

module.exports = Join
