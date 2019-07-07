<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<title>Insert title here</title>
<style type="text/css">
	div{
		width:80%;
		height:300px;
		margin-left:150px;
	}
</style>
</head>
<body>
<%@ include file="banner.jsp"%>
	<div align="center" id="div1">
		<h2>JSP/JavaBean,j412.jsp</h2>
		
		<h3>
		
		<form action="j413.jsp">
		Fruit:<input type="text" name="title" value="apple">
		<br>
		
		<input type="submit" name="go" value="Go">
		
		</form>
		
		
		
		</h3>
	</div>
<%@ include file="footer.jsp"%>

</body>
</html>