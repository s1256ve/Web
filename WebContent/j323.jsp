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
		<h2>JSP/JSTL,j323.jsp</h2>
		<img alt="" src="JSP.bmp">
		<h3>
		do by JSTL
		<font color="red">
		
		<c:forEach var="i" begin="1" end="5">
			<c:out value="${i}"/>
		</c:forEach>
		<br>
		</font>
		do by jsp
		<font color="blue">
		<%
			for(int i=5;i>0;i--)
			{
				out.print(i+" ");
			}
		%>
		</font>
		<br>forTokens<br>
		<c:forTokens items="coffee,cola,7up,milk,tea,芋頭" delims="," var="i">
			<c:out value="${i}"/>
		</c:forTokens>
		
		</h3>
	</div>
<%@ include file="footer.jsp"%>

</body>
</html>