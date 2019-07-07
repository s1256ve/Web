<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<script type="Text/JavaScript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script type="text/javascript">
	
	$(document).click(function(event) {
		var d=$("p");  
		//alert(d.position().top+","+d.position().left);
		d.offset({top: event.pageY, left: event.pageX});;
		d.text( "left: " + event.pageX + ", top: " + event.pageY );
		d.css({'background-color':randColor()});
	});
	
	$(document).mousedown(function(event) {
		var d=$("p");  
		//alert(d.position().top+","+d.position().left);
		d.offset({top: event.pageY, left: event.pageX});;
		d.text( "left: " + event.pageX + ", top: " + event.pageY );
		d.css({'background-color':randColor()});
	});
	
	$(document).mousemove(function(event) {
		var d=$("p");  
		//alert(d.position().top+","+d.position().left);
		d.offset({top: event.pageY, left: event.pageX});;
		d.text( "left: " + event.pageX + ", top: " + event.pageY );
		d.css({'background-color':'white'});
	});
	
	function randColor(){
		return '#'+Math.floor(Math.random()*16777215).toString(16);
	}
	</script>
	<p id="d" class="d" style="background-color:red;width:120px;">123</p>
	
</body>
</html>