$(document).ready(function(){
		var $bgobj = $('.footer'); // assigning the object
		$(window).scroll(function() {
			var yPos = -($(window).scrollTop() / $bgobj.data('speed'));

			// Put together our final background position
			var coords = '50% '+ yPos + 'px';

			// Move the background
			$bgobj.css({ backgroundPosition: coords });
		});
});
