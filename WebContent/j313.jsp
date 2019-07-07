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
		<h2>EL,j313.jsp</h2>
		
		<h3>
		<font color="red">
		<% 
			String n1=request.getParameter("n1"),n2=request.getParameter("n2");
			out.println("jsp:"+n1+" + "+n2+" = "+(Integer.parseInt(n1)+Integer.parseInt(n2)));
		%>
		<br><br>
		
		EL:${param.n1}+${param.n2}=${param.n1+param.n2}<br>
		
		<%-- <%@ page isELIgnored="true" %> out=>${param.n1}+${param.n2}=${param.n1+param.n2} --%>
		
		</h3>
	</div>
<%@ include file="footer.jsp"%>

</body>
</html>