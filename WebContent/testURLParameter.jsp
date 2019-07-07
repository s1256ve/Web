<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="BIG5"%>
<html>
<head>
<title>testURLParameter</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
</head>
<body>
	<%
		request.getRequestDispatcher("/getURLParamete.jsp?user=test").forward(request, response); 
	%>
</body>
</html>