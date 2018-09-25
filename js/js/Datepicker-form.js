 $(function() {
    $( "#datepicker" ).datepicker();
	dateFormat: 'yy/mm/dd'
  });

var Today=new Date();
document.write("今天日期是 " + Today.getFullYear()+ " 年 " + (Today.getMonth()+1) + " 月 " + Today.getDate() + " 日");

/*-----------------分隔線--------------------*/

function processFormData() {
  var name_element = document.getElementById('name');
  var name = name_element.value;
  var email_element = document.getElementById('email');
  var email = email_element.value;

  var datepicker_element = document.getElementById('datepicker');
  var datepicker = datepicker_element.value;

  var vv_element = document.getElementById('vv');
  var datepicker = datepicker_element.value;

  var currentDate = $( ".selector" ).datepicker( "getDate" );

  alert('你的姓名是：'+name+'\n電子郵件是：'+email+'\n你的生日是datepicker：'+datepicker+'\n你的生日是vv：'+vv+'\n你的生日是getDate：'+datepicker);
};


/*	2007/1/11 下午 09:00:46
document.getElementById(textIDName).value
textIDName = 你的 textID 
這是JAVASCRIPT取值的方法*/