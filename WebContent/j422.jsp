<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>j422.jsp</title>
</head>
<body>
	<%@ include file="banner.jsp" %>
	<div align="center">
		<h2>JSP/Servlet,j422.jsp</h2>
		<img alt="" src="JSP.bmp"><br>
		<%-- comment --%>
		<%!int d=82; %>
		<%=d %><br>
		<%@page import="java.util.Date" %>
		<%
			for(int i=1;i<5;i++)
				out.println(i+" ");
		%>
	</div>
	
	<%@ include file="footer.jsp" %>
</body>
</html>