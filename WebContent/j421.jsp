<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>j421.jsp</title>
</head>
<body>
	<%@ include file="banner.jsp" %>
	<div align="center">
		<h2>JSP/Servlet,j421.jsp</h2>
		<img alt="" src="JSP.bmp"><br>
		<form action="S421">
		我是:<input type="text" name="user" value="莊博鈞"><br>
		性別:<input type="radio" name="gender" value="男" checked="checked">男&nbsp;&nbsp;
		<input type="radio" name="gender" value="女">女<br>
		喜歡:<input type="checkbox" name="like" value="賺錢">賺錢  &nbsp;&nbsp;
		<input type="checkbox" name="like" value="滑手機">滑手機 &nbsp;&nbsp;	
		<input type="checkbox" name="like" value="打電腦">打電腦 &nbsp;&nbsp;<br>
		<input type="submit" value="Go">
		</form>
	</div>
	
	<%@ include file="footer.jsp" %>
</body>
</html>