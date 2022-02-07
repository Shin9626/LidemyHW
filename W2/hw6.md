#hw6：解析程式流程
----
        function isValid(arr) {
        for(var i=0; i<arr.length; i++) {
            if (arr[i] <= 0) return 'invalid'
        }
        for(var i=2; i<arr.length; i++) {
            if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
        }
        return 'valid'
        }

        isValid([3, 5, 8, 13, 22, 35])

1. 呼叫 function "isValid" 並傳入參數 arr 
2. 建立 for 迴圈， 執行 arr.length 次（意即這個陣列有多長就執行到幾次）
3. 進入判斷式 if (arr[i] <= 0)，當第 i 個元素比零還小則回傳字串'invalid'
4. 建立 for 迴圈， 令 i = 2 遍歷迴圈
5. 進入判斷式 if (arr[i] !== arr[i-1] + arr[i-2])，如果第 i 個元素不等於前兩項的合則回傳字串'invalid'
6. 以上迴圈遍歷成功後代表 arr 是合法的費式數列，回傳字串'valid'
7. 呼叫 isValid 並傳進陣列 [3, 5, 8, 13, 22, 35]
8. 建立迴圈，i = 0，arr.length = 6
9. arr[0] == 3 在判斷式 if (arr[i] <= 0) 為合法，迴圈繼續
10. 進入下一次判斷前 i++，因此目前 i == 1
11. 遍歷到 i == 5 為止所有元素都符合判斷式 if (arr[i] <= 0)
12. 進入下一次判斷前 i++，因此目前 i == 6，不符合迴圈條件因此中止
13. 建立迴圈，i = 2 開始遍歷
14. arr[2] == 8 在判斷式 if (arr[i] !== arr[i-1] + arr[i-2]) 為合法，迴圈繼續
15. 遍歷到 i == 5 為止所有元素都符合判斷式 if (arr[i] !== arr[i-1] + arr[i-2])
16. 進入下一次判斷前 i++，因此目前 i == 6，不符合迴圈條件而中止
17. 迴圈可以完整遍歷 arr，因此 arr 是合法的費式數列，回傳字串'valid'