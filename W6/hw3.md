#h3 簡答題
----

1. 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
----
    <bgsound　src="" loop="" />　播放音樂，src 為路徑， loop 可設 infinite。
    <select　name="" id="" size="" multiple>　創建選單或清單，name 可重複，id 不可重複，size 為顯示項目長度，multiple 若啟用則為清單模式。
    <option value="">　包含在 <select> 裡面，value 為值。　


2. 請問什麼是盒模型（box modal）？
----
    在 HTML 裡面所有元素都視為一個 box，由外到內分別為 margin、padding、content
    margin： 外間距，與其他元素的間距。
    padding： 內間距，向內部留白的間距。
    content： 元素本身的內容。

3. 請問 display: inline, block 跟 inline-block 的差別是什麼？什麼時機點會用到？
----
    inline： 元素都在同一行內排列，不換行，寬高由內容撐開。
    block： 元素寬度會佔滿一整行。
    inline-block： 元素可以 inline 的方式排列，但保有 block 的屬性，通常使用在不能改變寬高的元素，使其依照元素內容撐開大小。

4. 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？分別各舉一個會用到的場合
----
    static：預設的定位模式，無法改變四邊數值。
    relative：以 static 位置為基礎，可以定義四邊數值，但元素實際上仍在 static 位置上。通常如果需要手動設置子元素的位置時會設定 relative 令下層的子元素可以作用。
    absolute：以上層非 static 定位的元素為基準來定位，該元素會在父元素的容器內進行跳脫，這時下方的元素大多會因此有偏移。
    fixed：　將元素固定在瀏覽器視窗的固定位置，不隨滾動移動，是很多廣告常用的做法。
