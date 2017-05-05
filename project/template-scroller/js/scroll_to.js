/* Config */
var current_page = '';
var next_page = '';
var prev_page = '';
var pages = Array();


$(document).ready(function($) {
	set_pages_array();
	if(window.location.hash) {
		tmp_page_id = window.location.hash.replace('#','');
		update_current_page(tmp_page_id);
		scroll_to(tmp_page_id)
	} else {
		update_current_page(pages[0]);
		scroll_to(pages[0])
	}
});

function scroll_to(page_id) {

    // Validate key, zodat er alleen naar pagina's geswitched kan worden die bestaan.
	if ( pages.indexOf(page_id) > pages.length ) {
		new_page = pages[pages.length];
	} else if ( pages.indexOf(page_id) < 0 ){
		new_page = pages[0];
	} else {
		new_page = page_id;
	}



    // Set body tag
    $('body').attr('data-currentpage',new_page);

    // Set page nav tag
    $('.page-nav-item').removeClass('active');
    $('.page-nav-item a[href=#' + new_page + ']').parent().addClass('active');
	


	// Update current page
	update_current_page(new_page);

    $('html, body').stop().animate({
        scrollTop: $('#' + new_page ).offset().top-60 /* 60(px) = height .layout-top */
    }, 1500, 'easeInOutExpo');
}

function set_pages_array() {
	$('.page-nav-item').each( function()
	{
		var tmp_item = $(this).find('a').attr('href').replace('#','');
		
		if (tmp_item != 'undefined') 
		{
			pages.push(tmp_item);
		}
	})

}


function update_current_page(page_id) {
	tmp_key = pages.indexOf(page_id);
	//console.log(pages);
	//console.log(page_id);
	if ( tmp_key >= 0 ) 
	{
		current_page = pages[tmp_key];
		next_page = pages[tmp_key+1];
		prev_page = pages[tmp_key-1];

		if ( pages.indexOf(current_page) == pages.length ) {
			new_page = pages[0];
		}
		if ( pages.indexOf(current_page) == 0 ) {
			prev_page = pages[pages.length-1]	;
		}
	} 
	 else
	{
		console.log('Pagekey (' + tmp_key + ') out of range');
	}
}