<%@ page language="java" contentType="text/html; charset=BIG5"
    pageEncoding="BIG5"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
<title>Insert title here</title>
</head>
<body>
	<h2>EL, j212.jsp</h2>
	<h3>
	<%
		String[] fruits={"melon","apple","pear"};
		request.setAttribute("fruits", fruits);
	%>
	fruit0: ${requestScope.fruits[0]}<br>
	fruit2: ${requestScope["fruits"][2]}<br>
	</h3>
</body>
</html>