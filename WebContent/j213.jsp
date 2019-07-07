<%@ page language="java" contentType="text/html; charset=BIG5"
    pageEncoding="BIG5"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
<title>Insert title here</title>
</head>
<body>
	<h2>j213</h2>
	<h3>
	<%@page import="java.util.Random"%>
	
	<% 
		Random r=new Random();
		int n=r.nextInt(9)+1;
		out.println(n);
	%><br>
	
	
	<%=n %><br>
	
	<a href="<%request.getRequestURI(); %>">Try Again</a>
	
	</h3>
</body>
</html>