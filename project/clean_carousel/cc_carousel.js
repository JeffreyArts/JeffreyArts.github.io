
$(document).ready(function($) {
   
    $('.tabs .tab').click(function(){
        $tab_index = $(this).parent().parent('.tabs');
        $tab_index.children('li').each(function () {
            $(this).removeClass('active');
        });
        $(this).parent('li').addClass('active');

    /*
        $('.truncate').each(function() {
            var e = $(this);
            var number_of_lines = e.attr('data-truncate');
            if (!number_of_lines) {
                var number_of_lines = 2;
            }
            truncate(e,number_of_lines);
        }); */
    }); 
});