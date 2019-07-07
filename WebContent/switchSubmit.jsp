<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="BIG5"%>
<html>
<head>
<title>switchSubmit</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
</head>
<body>
<jsp:useBean id="random" class="java.util.Random" scope="session" />
	<h1>Switch Submit Test</h1>
	<form action="DestServlet" method="post">
		<input type="text" name="str" value="${random.nextInt(10) }"/><br>
		<input type="submit" name="sub" value="Add"/><br>
		<input type="submit" name="sub" value="Remove"/>
	</form>
	
</body>
</html>