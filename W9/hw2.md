#hw2：簡答題
----

1. 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
----
    VARCHAR 是有限長度的字串，該欄位可以作為索引。
    TEXT 通常用於存放長度未知的字串，如留言、文章等，需要指定長度才可以做為索引。
    由於型態的差異，VARCHAR 直覺上搜索時間一定比 TEXT短。

2. Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？
----
    Cookie 是一種瀏覽器內的暫存資料，每種資料都有相對應的網站，該網站會透過該 Cookie ，
    來辨識我們是否透過同一個瀏覽器發出 request。
    Server 針對我們發出的 Request ，會返回 header帶有 Set-Cookie 的 Response，
    其中會包含可接受該請求的 Domain，以及該 Cookie 應該送達的 Path，以及過期時間。
    之後的每個 Request 都會在 header 裡帶上已經存在瀏覽器裡的 Cookie 讓 Server 辨識我們。



3. 我們本週實作的留言板，你能夠想到什麼潛在的問題嗎？
----
    大部分的網站內容都可以經過修改 Cookie，腳本攻擊，或是惡意寫入指令來改變。