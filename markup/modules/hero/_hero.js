$(document).ready(function($) {
	$('.hero__video').vide({
		mp4: 'assets/images/content/video',
		webm: 'assets/images/content/video',
		ogv: 'assets/images/content/video',
		poster: 'assets/images/content/video'
	}, {
		autoplay: true,
		loop: true,
		posterType: 'none'
	});
});
