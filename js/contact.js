$(document).ready(function () {
	$( document ).tooltip();
	
	var subjects=[
			"Activity","Information","Request","Common"
	];
	
	$("#subject").autocomplete({source:subjects});
	$('.content').richText();
	$("form").submit(function() {
		alert("Form submitted Successfully");
	});
});