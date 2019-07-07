<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>j424.jsp</title>
</head>
<body>
	<%@ include file="banner.jsp" %>
	<div align="center">
		<h2>JSP/JavaBean,j424.jsp</h2>
		
		<form action="j425.jsp">
		Meat:<input type="text" name="title" value="T-bone"><br>
		Roasted:<input type="radio" name="roasted" value="烤" checked="checked">烤&nbsp;&nbsp;
		<input type="radio" name="roasted" value="不烤">不烤<br><br>
		<input type="submit" value="Cook">
		</form>
	</div>
	
	<%@ include file="footer.jsp" %>
</body>
</html>