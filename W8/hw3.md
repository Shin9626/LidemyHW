#hw3：簡答題
----

1. 什麼是 Ajax？
----
    AJAX 是透過非同步的方式(不用刷新頁面)，以 JavaScript 的程式碼發送 request 和收到 response。
    根據瀏覽器轉傳給 JS 的 response，可以動態地更改目前網頁的狀態、內容而不用重新刷新頁面。 

2. 用 Ajax 與我們用表單送出資料的差別在哪？
----
    AJAX 不用刷新頁面，而 form 則需要。
    但透過 form 發出的 request 是瀏覽器內建的方法，因此在大多瀏覽器都相容 form 的 request，
    而 AJAX 因為 JS 迭代的關係，有可能寫出不相容其他瀏覽器的 code。

3. JSONP 是什麼？
----
    HTML 5 裡面有部分的標籤不受同源政策的管理，如 img、script 等，
    JSONP 便是利用這個特性，宣告或是動態產生一個 script 標籤，並且設定好 script 的 src，
    與其 function 內容，server 端便會把回傳的 JSON 資料格式透過自己撰寫的 function 顯示。

4. 要如何存取跨網域的 API？
----
    首先要先閱讀目標網域的 API 文件，裡面對於跨域請求的規範，也是瀏覽器規範下的 CORS 方法，
    瀏覽器將會阻絕任何不合法的request 得到的 response。通常會規範好如 Access-Control-Allow-Origin、
    Access-Control-Request-Method、Access-Control-Request-Headers 等，
    Server 會設定好這些 Header，只要我們能在發送 request 時設定合法的 Header 就能夠存取，
    或者使用 JSONP 與 Node.js 繞過瀏覽器的限制。

5. 為什麼我們在第四週時沒碰到跨網域的問題，這週（觀看 JS102 影片的時候）卻碰到了？
----
    當時我們使用 Node.js ，並不受瀏覽器下 CORS 的規範，也就是說我們的 request、response 在
    這個環境裡不會透過瀏覽器的編譯，能夠直接得到這些資訊。
