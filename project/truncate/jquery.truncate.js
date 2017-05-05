// How to Use
// 
//  Add an .truncate class to the element you want to truncate and give 
//  it new attribute 'data-truncate' which you give a nummeric value
//  that corresponds with the number of line you want it to display.
// 
$.fn.truncate = function(max_lines) {
    if (this.css("line-height")=='normal') 
    {
        this.css("line-height",'1.2');
    }
    var fsz = parseInt(this.css("font-size"));
    
    charWidth = fsz*.5;

    if (typeof max_lines == "undefined") {
        var max_lines = this.attr('data-truncate'); 
    }
    if (typeof max_lines == "undefined") {
        var max_lines = 2;
    }
    var char_width = charWidth;

// Store text in truncated data attribute only once
    if ( typeof this.attr("data-truncated") == "undefined" ) {
        this.attr("data-truncated", escape(this.text()));
    }
    

    var text_string = unescape(this.attr("data-truncated"));


    var lineHeight = parseInt(this.css("line-height"),10);
    var lineWidth = this.width()/charWidth;
    var number_of_lines = Math.round(text_string.length/lineWidth);//Math.floor(parseInt(this.height(),10)/lineHeight)-1;

    if (number_of_lines >= max_lines) {

    // Calculate the characters per line
        var charsOnOneLine = Math.floor(lineWidth);

    // Split on this character #
        var new_string = text_string.substr(0,charsOnOneLine*max_lines);

    // Strip last part of the string to prevent words truncated as "welcome -> welco..."
        var lastIndex = new_string.lastIndexOf(" ")
        var new_string = new_string.substring(0, lastIndex);
        

    // Update text
        this.text(new_string+"...");
    }
    return this;
}

// Loop all elements and execute the truncate function
truncateAll = function(){
    $('*[data-truncate]').each(function() {
        $(this).truncate();
    });
}
