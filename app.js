$(document).ready(function(){
	var values = {};
	
	$("#employeeForm").submit(function(event){

		event.preventDefault();


	var $inputs = $("#employeeForm :input");

		$inputs.each(function(){
			values[this.name] = $(this).val();
		});
		var reviewNum = "review"+values.lastreviewscore;
		$("body").append("<div class='employee " +reviewNum+"'></div>");
		var $el = $("body").children().last();
		$el.append("<p>"+values.firstname+"</p><p>"+values.lastname+"</p><p>"+values.employeenumber+"</p><p>"+values.jobtitle+"</p><p>"+values.lastreviewscore+"</p><p>"+values.salary+"</p>");
		$el.append("<button class='employeeButton'>Delete Employee</button>");

	});


	$("body").on('click', '.employeeButton', function() {
		$(this).closest(".employee").remove();
	});


});
