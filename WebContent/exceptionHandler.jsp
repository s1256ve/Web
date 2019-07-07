<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="BIG5" isErrorPage="true"%>
<html>
<head>
<title>exceptionHandler</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
</head>
<body>
	<%
		if(exception.toString()=="javax.servlet.ServletException"){%>
			Yes
		<%}else{%>
			No
		<%} %>
		<%=exception.toString() %>
</body>
</html>