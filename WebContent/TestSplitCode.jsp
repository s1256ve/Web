<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="BIG5"%>
<html>
<head>
<title>TestSplitCode</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
</head>
<body>
	<h1>Test Split Code</h1>
	
	<input type="button" onclick="randNumber()" value="RandomNumber"/>
	
<script type="text/javascript">

	function randNumber(){
	<%if((Math.random()*10+1)>5){ %>
	
		alert("Number >5");
	
	<%}else{ %>
	
		alert("Number <5");
	
	<%} %>
	}
</script>
</body>
</html>