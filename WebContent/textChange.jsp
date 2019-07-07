<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="BIG5"%>
<html>
<head>
<title>textChange</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
</head>
<body>
<script type="text/javascript">
		
		function testChange(){
			var pass=document.getElementById("pass");
			
			
			
			var t;
			s=pass.value;
			if(document.getElementById("pass").value!=""){
				t=document.getElementById("pass").slice(-1);
				document.getElementById("show").value=t+t;
				}
			
		}
		function FillText()
		{
			document.getElementById("show").value+=document.getElementById("pass").value.slice(-1)+document.getElementById("pass").value.slice(-1);
		}
	</script>
	<div align="center">
		<h1>Text Change</h1>
		<form action="TextFix" id="testF" name="testF">
			<input type="password" id="pass" name="pass" onchange="FillText()">
			<input type="text" id="show">
		</form>
	</div>
	
</body>
</html>