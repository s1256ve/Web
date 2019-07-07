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
	<h2>JSP/Servlet,j223</h2>
	<h3><!--  
	"7"+19=${"7"+19}<br>
	7-"19"=${7-"19"}<br>
	"7"*"19"=${"7"*"19"}<br>
	7/19=${7/19}<br>
	-->
	<%request.setAttribute("2018",719); %>
	2018 ${2018}<br>
	"2018" ${"2018"}<br>
	requestScope["2018"] ${requestScope["2018"]}<br>
	
	<%
		pageContext.setAttribute("mail","page@gmail.com");
		request.setAttribute("mail","request@gmail.com");
		session.setAttribute("mail","session@gmail.com");
	%>
	
	Mail:${ mail}
	
	</h3>
	</div>
	
	<%@ include file="footer.jsp"%>
</body>
</html>