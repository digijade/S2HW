# CSS的三種加入法

## 直接插入HTML
都在網頁中的<head>..和..</head>之間
<html>
<head>
	<style type="text/css">
	標籤{定義該內容}
	</style>
</head>

<body>
.....網頁內容
</body>
</html>


## 外部呼叫指令
  * 要在網頁插入CSS也可以用到外部呼叫的指令
  * <link href="檔名.css"rel="stylesheet"type="text/css">

## 匯入指令
  * 以另外一種方式，也就是直接將CSS檔案匯入在網頁中。
  * <style>@import url(檔名.css);</style>


# ID和Name屬性的區別
## name 是識別網頁上某個控制項的名稱，
這些控制項多半都是 Windows 或 IE 內建的物件，
例如 Frame（其實就是 IE 瀏覽器物件）、TextArea（系統內建物件）、
URI 物件（IE 內建物件）等等。牽涉到 name 的動作，
多半都是資料的傳輸或是連結的開啟等等。

## id 是識別網頁上某個 DHTML 物件的名稱，
對象是所有的 HTML 元件。牽涉到 id 的動作，
多半是做動態效果的控制之用。






