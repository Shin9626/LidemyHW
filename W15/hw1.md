#hw4：簡答題
----
    注意 Q3 的敘述中，是在網址帶上 id 用 POST 的方式發出 request，
    request 則分為簡單請求與非簡單請求。
    
    在後端沒有設置 CORS 的管理，只要是不帶任何 custom header 的簡單請求，
    如 GET、POST 等，就可以發出 request，只是前端的我們沒辦法接收到 response，
    但 request 還是成功了，所以會刪除文章，但 console 會印出錯誤資訊。

    而非簡單請求則是會先發出 OPTIONS 的 request 去檢查後端是否允許非同源，
    不允許時這個 request 便不會發送出去。
----
    Q4 談及 XSS 攻擊的方式，則是要認知到如果不對常見的標籤符號設置 escape，
    inline 的指令還是可以成功執行，因此 " 、 ' 、<、>都要進行 escape，
    第二步則是設定 CSP 規則做到最基本的防禦。
----
    Q7 的情況下，同源政策會限制 Ajax，
    造成在瀏覽器上和開發環境上執行會有不同結果，
    如果後端沒有設定 CORS header，基本上是拿不到的。
