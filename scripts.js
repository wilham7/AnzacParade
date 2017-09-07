$(document).ready(function() {
    $("#demo").html("Hello, World!");
	$('#b1').click(function(){

		if($('#b1').attr('value')=='Hide'){
			$(this).val('Show'); // change the value to Show
			$('#d1').hide();
		}else{
			$(this).val('Hide'); // change the value to Hide
		$('#d1').show();
		}
	}
});