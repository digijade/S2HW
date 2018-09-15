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






