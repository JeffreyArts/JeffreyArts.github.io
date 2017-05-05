
$(document).ready(function($) {

	$('body').removeClass('sidebar-open');

	// Resize page heights
	$('.page').css('height',(window.innerHeight-60));

	$('.sidebar-button').click(function(){
		$('body').toggleClass('sidebar-open');
	});

});

// Resize page heights when screen size changes
$(window).on('resize', function(){
	$('.page').css('height',(window.innerHeight-60));
});


//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
   		event.preventDefault();
   		page_id = $(this).attr('href').replace('#','');
   		scroll_to(page_id);
    });
});


$(function() {
	$(".page").bind("mousewheel", function(event, delta){

		// Disable scroll on every slide/page except the last one.
		if ( $(this).attr('id') != pages[pages.length-1] ) {
			if (delta > 0) // Scroll up
			{
	        	// Go to previous page
	        	page_id = prev_page;
	        	
	        } else if (delta < 0) // Scroll down
	        {
	        	// Go to next page
	        	page_id = next_page;
	        }
	   		scroll_to(page_id);
	        return false;
	    }
	});
});