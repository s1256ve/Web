<%@ page language="java" contentType="text/html; charset=BIG5"
    pageEncoding="BIG5"%>
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
	<h2>JSP/Servlet,j221</h2>
	<form action="S222">
	ID:<input type="text" name="id" value="jsp"><br>
	Password:<input type="password" name="password" value="1234"><br>
	<input type="submit" value="login">
	</form>
	</div>
	
	<%@ include file="footer.jsp"%>
</body>
</html>