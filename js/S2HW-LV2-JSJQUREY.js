jQuery(function($){
		$("#dateinput").datepicker();
      	$('#example2').datepicker({showOn: 'both', showOtherMonths: true, 
      		showWeeks: true, firstDay: 1, changeFirstDay: false,
      		buttonImageOnly: true, buttonImage: 'images/calendar.gif'}); 

      	$('#example4').datepicker({dateFormat: 'yy-mm-dd', showOn: 'both', 
      		buttonImageOnly: true, buttonImage: 'calendar.gif'});
        $('#exampleRange').datepicker({rangeSelect: true, firstDay: 1, showOn: 'both', 
      		buttonImageOnly: true, buttonImage: 'calendar.gif'});




});

