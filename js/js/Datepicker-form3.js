 $(function() {
    $("#birth").datepicker({
  dateFormat: 'yy/mm/dd',
  changeMonth: true,
  changeYear: true,

  });
 });
//1.宣告一個叫birth的datepicker JQuery



var TD = new Date();
document.write("今天日期是 " + TD.getFullYear()+ " 年 " + (TD.getMonth()+1) + " 月 " + TD.getDate() + " 日");




 $(function() {
/*Key  放在head裡，因為html還沒載入，所以$("#birth")選不到，所以事件註冊失敗
$(function (){…})裡的等同於onload，會在html載入完成後才觸發，所以事件註冊放裡面就會成功
因為瀏覽器是逐行載入的，載入時執行，如果js放在前面，js執行時那個#birth還沒有被執行到，就找不到物件了
所以要在進行#birth計算前將HTML強制跑完，所以要加入 $(function() {......}); 讓HTML先跑完，
不然就是在HTML時，把script放在body最後，確保script都會在HTML載入完成後再執行
*/



/*
var currentDate = $( ".form1" ).datepicker( "getDate" );
取值 也 由datopicker中取，.from1是HTNL中的空欄，.from1一樣從datopicker中取
*/
$("#birth").change(function(){
//  console.log("picked");
//2. .change=>當birth(datepicker JQuery)開始change時，開啟計算函數

//var TD = new Date();   外面宣告過了，裡面可略
  var TDy = TD.getFullYear();
  var TDm = TD.getMonth();
  var TDd = TD.getDate();
//3.宣告每個今天

  var BD = $("#birth").datepicker( "getDate" );
/*4.開始抓datepicker中的日期，
    宣告先把user選的生日日期從birth(datepicker JQuery)挖給BD，接下來大家都用BD開始取*/
  var BDy = BD.getFullYear();
  var BDm = BD.getMonth();
  var BDd = BD.getDate();

//5.抓完了開始運算
    var BDtotal = (BDy*10000+BDm*100+BDd);
    var TDtotal = (TDy*10000+TDm*100+TDd);
    var disneygogo = ((TDtotal-BDtotal)/10000);

    if(disneygogo<18){
      newwindow = window.open("http://www.disney.com.tw/");
    }
    else{
      document.write("真實年齡大於18歲");
    }


});

});


/*開視窗的方法3個

var newwindow;
var newwindow = window.open("http://www.disney.com.tw/","disney",
"location,menubar=1 status,toolbar,scrollbars=0");


function windows1(){
winvar = window.open("http://www.yahoo.com","winname",
"location,menubar=1 status,toolbar,scrollbars=0");
};


$( "#datepicker" ).on("change", function(){console.log(123)} );

*/