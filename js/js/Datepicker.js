 $(function() {
    $( "#datepicker" ).datepicker();
	dateFormat: 'yy/mm/dd'
  });

var Today=new Date();
document.write("今天日期是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日");

