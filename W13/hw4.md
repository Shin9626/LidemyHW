#hw4：簡答題
----
1. Webpack 是做什麼用的？可以不用它嗎？
----
    主要的功能是將我們在開發環境下所寫好的程式以及模組，
    透過 Webpack 打包（bundle）成瀏覽器可以執行的 web app。
    在不使用任何第三方的模組，或是我們把所有功能以原生的方式，直接寫在 script 標籤裡面，就可以不使用 Webpack。
     
2. gulp 跟 webpack 有什麼不一樣？
    gulp 主要是管理 web app 啟動時需要執行的各個 task，
    比如將 scss 轉譯成 css、ES6 語法透過 babel 轉譯等，
    我們可以將各種調用的功能 callback 到 task 裡面。
    
    而 webpack 主要用於對整個開發環境的資源進行 bundle，
    使其能夠在瀏覽器的環境下執行。
    因為 webpack 預設能夠 bundle 的資源為 js 檔案，
    因此 css 、 babel 這類其他資源則需要安裝對應的 loader，
    使其能夠一起轉譯打包。

3. CSS Selector 權重的計算方式為何？

    權重大致上會有五級，通常能直接看到的資訊會標註三級，分別是：
    (id, class, element)
    
    如透過 id 來指定顏色，則會顯示 (1, 0, 0)，
    此時如有其他方法對同一個元素指定顏色，則會無效。

    當然只要用比 id 更上去的級別也能覆蓋掉，
    再上去是 inline style，再上去是 !important（通常少用）