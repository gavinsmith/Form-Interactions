$(function(){
	var search_area = $('#search');
	$(search_area).addClass('clever-button'); /*some people like JS-less degrading. personally, I think those guys can go somewhere else on the internet.*/
	$('input[type=text]',search_area).css( 'padding-right',$('input[type=submit]',search_area).width()+25 );

	$('input[type=text]',search_area).focus( function(){
		$(this).siblings('input').stop().fadeTo(50,1);
	} );
	$('input[type=text]',search_area).blur( function(){
		if( $(this).val() == '' ){ // we don't want the submit button to go away if the search field has content
			$(this).siblings('input').stop().fadeTo(100,0);
		}
	} );
});
