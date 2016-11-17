

$(document).on("pagecreate","#pageone",function(){
  
//  	$('#tapholdtext').on("taphold",function(){
//    	$(this).hide();
// 	});                       
//
//	$('#taptext').on("tap",function(){
//    	$(this).css('color', 'red');
// 	}); 
//
//	$('#swipetext').on("swipeleft",function(){
//    	$(this).css('color', 'green');
//  	});   
//
//	$('#swipetext').on("swiperight",function(){
//    	$(this).css('color', 'blue');
//  	});  
	$('#random').on("click",function(){
    	result();
  	});  
});

//function submitText() {
//	var text = $('#textinput').val();
//	alert(text);
//}

function result(){
    var result = random();
        $('#random').text("result is " + result);
    alert(result);
    if(result==true){
        navigator.notification.beep(1);	//beep once
        navigator.vibrate(2000);
    
    }else{
        navigator.notification.beep(2);
        navigator.vibrate([200, 300, 500]);
    }

}


function random() {
	return !Math.round(Math.random());
}


