#hw5：簡答題
----
1. 請以自己的話解釋 API 是什麼？
----
    API 就像是溝通的窗口。
    以一間小吃店比喻，客人向外場點餐，外場向內場叫單等等，
    這些溝通的流程中必定有店家自己制定好的規範，以方便整個出餐流程，
    這些規範就可以稱之為 API。
----
2. 請找出三個課程沒教的 HTTP status code 並簡單介紹
----
    100 Continue : 伺服器已經收到 head request，要求繼續提交剩下的 request 會返回此訊息
    413 Request Entity Too Large  : 該 request 提交的資料過於龐大時伺服器會返回此訊息 
    504 Gateway Timeout : 等待 response 的時間過長時會返回此訊息 
----
3. 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，
包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，
你的 API 會長什麼樣子？請提供一份 API 文件。
----
API URL : www.restaurantlib.com/lib
[Item]----[Method]----[Path]----[Paraments]
[查詢餐廳]-[GET]-------[/:name]--[無]
[刪除餐廳]-[DELETE]----[/:name]--[無]
[新增餐廳]-[POST]------[無]------[name]
[更改餐廳]-[PATCH]-----[/name]---[name]

