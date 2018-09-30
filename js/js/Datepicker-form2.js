 $(function() {
    $( "#datepicker" ).datepicker();
  dateFormat: 'yy/mm/dd'
  });

/*var newwindow;
var newwindow = window.open("http://www.disney.com.tw/","disney",
"location,menubar=1 status,toolbar,scrollbars=0");*/
var winvar;

function windows1(){
  winvar = window.open("http://www.yahoo.com","winname",
"location,menubar=1 status,toolbar,scrollbars=0");
};

var Today=new Date();
document.write("今天日期是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日");
  var Todayy = Today.getFullYear();
  var Todaym = Today.getMonth();
  var Todayd = Today.getDate();

/*取生日值開始*/

/*
var currentDate = $( ".form1" ).datepicker( "getDate" );
取值 也 由datopicker中取，.from1是HTNL中的空欄，.from1一樣從datopicker中取
*/

$( "#datepicker" ).onchange=function() {
    display("Got change event from field");
  };

