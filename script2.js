$(document).ready(function() {
    
});

function loadTutorials() {
	const carouselInner = $(idSelector + ' .carousel-inner .loadItems');
	$('.loader').show();

	$.ajax({
		url: 'https://smileschool-api.hbtn.info/popular-tutorials',
		type: 'GET',
		datatype: 'json',
		success: function(videos) {
			$('.loader').hide();
			carouselInner.empty();
			
		}

	})
}