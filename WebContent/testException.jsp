<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" errorPage="exceptionHandler.jsp"%>
<html>
<head>
<title>testException</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5" errorPage="exceptionHandler.jsp">
</head>
<body>
	<%@page import="javax.servlet.ServletException" %>
	<%
		int x = 1;
   if (x == 1)
   {
      throw new ServletException();
   }
	
	
	 %>
</body>
</html>