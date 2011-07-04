$(function(){
	var form_fields = $('.form-field');
	$(form_fields).addClass('active-label'); /*some people like JS-less degrading. personally, I think those guys can go somewhere else on the internet.*/
	$('input[type=text]',form_fields).keyup( function(){
		var input_label = $('label[for='+$(this).attr('name')+']');
		if( $(this).val() == '' ){
			$(input_label).show();
		} else if( $(input_label).is(':visible') ){
			$(input_label).hide();
		}
	} )
});
