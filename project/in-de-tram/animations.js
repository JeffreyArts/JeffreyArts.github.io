var d = new Date();
var start_time = d.getTime(); 

// 13.5 = Mies boos
// 17.5 = Oma verdrietig
// 20.1 = Mies remove boos
// 22   = Oma remove boos

$(document).click(function(){
	var d = new Date();
	var new_time = d.getTime() - start_time; 
	console.log((new_time/1000).toFixed(2) + 's of gewoon: ' + new_time);
})	

// Oma loopt in
setTimeout(
    function() {
    	$('.oma').animate({
    		left: '-30%',
    		left: '16%'},
    		4000);
	}, 
3500);

// Mies wordt boos
setTimeout(
    function() {
    	$('.mies').addClass('boos');
	}, 
13000);

// Oma wordt verdrietig
setTimeout(
    function() {
    	$('.oma').addClass('verdrietig');
	}, 
16800);

// Mies wordt blij
setTimeout(
    function() {
    	$('.mies').removeClass('boos');
	}, 
20000);

// Oma loopt weg
setTimeout(
    function() {
    	$('.oma').addClass('moonwalk');
    	$('.oma').animate({
    		left: '16%',
    		left: '-30%'},
    		4000);
	}, 
21500);

// De maatschappij tekst
/*
#de
#maat
#schap
#pij
#dat
#ben
#jij*/
   // #de
	setTimeout(
	    function() {
	    	$('#de').css('opacity', '1');
		}, 
	24700);
   // #maat
	setTimeout(
	    function() {
	    	$('#maat').css('opacity', '1');
		}, 
	25200);
   // #schap
	setTimeout(
	    function() {
	    	$('#schap').css('opacity', '1');
		}, 
	25900);
   // #pij
	setTimeout(
	    function() {
	    	$('#pij').css('opacity', '1');
		}, 
	26129);
   // #dat
	setTimeout(
	    function() {
	    	$('#dat').css('opacity', '1');
		}, 
	26381);
   // #ben
	setTimeout(
	    function() {
	    	$('#ben').css('opacity', '1');
		}, 
	26650);
   // #jij
	setTimeout(
	    function() {
	    	$('#jij').css('opacity', '1');
		}, 
	27316);