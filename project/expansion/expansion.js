// How to Use
// 
// <div class='parent of-iets-anders'>
// 		<div class="expand_trigger [active]"></div>
// 		<div class="expand [open]">Gedetailleerde informatie</div>
// </div>
// 

function removeExpansion($expand_trigger,$expand){
    if ($expand_trigger.html()=="-") {
        $expand_trigger.html("+");
    }
    $expand_trigger.removeClass('active');
    $expand.removeClass('open');
}

function addExpansion($expand_trigger,$expand){
    if ($expand_trigger.html()=="+") {
        $expand_trigger.html("-");
    }
    $expand_trigger.addClass('active');
    $expand.addClass('open');
}

function closeExpanded($expand_trigger,$expand){
    
    $('.expand_trigger').each(function(index, el) {
        var expand_trigger  = $(this);
        var expand          = expand_trigger.parent().find('.expand');
        var multiple        = false;

        if (!expand_trigger.hasClass("multiple")) {
            removeExpansion(expand_trigger,expand);
        } 
    });
}
$(document).ready(function(){
    $('html').on('click', function() {
        // Hide all the open popups except those with class multiple
       closeExpanded();
    }); 
    
    $('.expand_trigger').parent().on('click', function(event) {
        
        var expand_trigger = $(this).find('.expand_trigger');
        var expand = $(this).find('.expand');

        if (expand_trigger.hasClass('active')) {
            removeExpansion(expand_trigger,expand)
        } else {
            closeExpanded(expand_trigger,expand); 
            addExpansion(expand_trigger,expand)
        }
                
        event.stopPropagation();
    
    });
       
    $('.expand').on('click', function(event) {
        event.stopPropagation();
    });
});
