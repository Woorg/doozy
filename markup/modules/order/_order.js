$(document).ready(function() {
	var input = $('form');
	var wrapper = $('.order-w');
	input.click(function(e) {
		e.preventDefault();
		wrapper.addClass('order-w_active');
	});
});
