$(document).ready(function() {
	$('#buttonConstruction').click(function(){
		if($('#buttonConstruction').attr('value')=='Construction On'){
			$(this).val('Construction Off'); // change the value to Show
			$("#Construction").hide();
			$(this).show();
		}else{
			$(this).val('Construction On'); // change the value to Hide
			$("#Construction").show();
		}
	})
	
	$('#buttonEdges').click(function(){
		if($('#buttonEdges').attr('value')=='Edges On'){
			$(this).val('Edges Off'); // change the value to Show
			$("#Edges").hide();
			$(this).show();
		}else{
			$(this).val('Edges On'); // change the value to Hide
			$("#Edges").show();
		}
	})
});