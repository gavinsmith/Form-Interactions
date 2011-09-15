$(function(){
	var checkboxes = $('input[type=checkbox]');
	var dragArea = null;
	var dragStart = [0,0];

	var interval = 25;

	$(checkboxes).mousedown( function(e){
		console.log('wat'+e);
		$('body').bind('mousemove',function(e){
			console.log('moved');
			if( dragArea == null ){
				dragArea = $('<div></div>');
				$(dragArea).attr('id','dragArea').css({'background-color':'black','position':'absolute','top':e.pageY,'left':e.pageX,'height':0,'width':0});
				console.log(dragArea);
				dragStart=[e.pageX,e.pageY];
				$('#container').append( dragArea );
			} else{
				if( e.pageY-dragStart[1] < 0 ){ newY = e.pageY; newH = dragStart[1] - e.pageY } else{ newY = dragStart[1]; newH = e.pageY - dragStart[1] }
				if( e.pageX-dragStart[0] < 0 ){ newX = e.pageX; newW = dragStart[0] - e.pageX } else{ newX = dragStart[0]; newW = e.pageX - dragStart[0] }
				$(dragArea).css({'height':newH,'width':newW,'top':newY,'left':newX});
			}
		} );
		$('body').bind('mouseup',function(e){
			$('body').unbind('mousemove');
			$(dragArea).remove();
			dragArea = null;
			gradStart = [0,0];
		} );
	} );


	/*$(checkboxes).mousedown( function(e){
		console.log('wat'+e);
		$('body').bind('mousemove',function(e){
			console.log('moved');
			if( dragArea == null ){
				dragArea = $('<div></div>');
				$(dragArea).attr('id','dragArea').css({'background-color':'black','position':'absolute','top':e.pageY,'left':e.pageX,'height':0,'width':0});
				console.log(dragArea);
				dragStart=[e.pageX,e.pageY];
				$('#container').append( dragArea );
			} else{
				if( e.pageY-dragStart[1] < 0 ){ newY = e.pageY; newH = dragStart[1] - e.pageY } else{ newY = dragStart[1]; newH = e.pageY - dragStart[1] }
				if( e.pageX-dragStart[0] < 0 ){ newX = e.pageX; newW = dragStart[0] - e.pageX } else{ newX = dragStart[0]; newW = e.pageX - dragStart[0] }
				$(dragArea).css({'height':newH,'width':newW,'top':newY,'left':newX});
			}
		} );
		$('body').bind('mouseup',function(e){
			$('body').unbind('mousemove');
			$(dragArea).remove();
			dragArea = null;
			gradStart = [0.0];
		} );
	} );*/
	
});
