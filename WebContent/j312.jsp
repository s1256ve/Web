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
		<h2>EL,j312.jsp</h2>
		<img alt="" src="JSP.bmp">
		<h3>
		<font color="blue">
		<form action="j313.jsp">
		Number1:<input type="text" name="n1" value="7">
		<br>
		Number2:<input type="text" name="n2" value="24">
		<br>
		<input type="submit" value="Add">
		
		</form>
		
		
		
		</h3>
	</div>
<%@ include file="footer.jsp"%>

</body>
</html>