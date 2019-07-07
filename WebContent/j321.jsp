<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
<title>Insert title here</title>
<style type="text/css">
	div{
		width:80%;
		height:250px;
		margin-left:130px;
	}
</style>
</head>
<body>
	<%@ include file="banner.jsp"%>
	
	<div align="center">
	<h2>JSP/Servlet/DB Insert,j321</h2>
	<form action="S322">
	#<input type="text" name="no" value="11"><br>
	name<input type="text" name="name" value=""><br>
	price<input type="text" name="price" value=""><br>
	qty<input type="text" name="qty" value=""><br>
	date<input type="text" name="date" value="2018/7/26"><br>
	<input type="submit" value="Insert">
	</form>
	</div>
	
	<%@ include file="footer.jsp"%>
</body>
</html>