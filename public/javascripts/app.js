$(document).ready(function() {
  console.log('app.js file example');
  $('#validation-form').validate( {
      rules: {
          services: {
              required: true,
              minlength: 1
          }
       }
   });
   $('#validation-form').submit(function(e){
   	
   	$("input[name='services']:checked").each(function(){
   		console.log($(this).attr("value"));
   	});
		return false;
   });
});
