$(function(){
	var form_fields = $('.form-field');
	$(form_fields).addClass('active-label'); /*some people like JS-less degrading.*/
	
	$('input[type=text]',form_fields).keyup( function(){
		var input_label = $('label[for='+$(this).attr('name')+']');
		if( $(this).val() == '' ){
			$(input_label).show();
		} else if( $(input_label).is(':visible') ){
			$(input_label).hide();
		}
	} )
});
