<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>j425.jsp</title>
</head>
<body>
	<%@ include file="banner.jsp" %>
	<div align="center">
		<h2>JSP/JavaBean,j425.jsp</h2>
		
		<jsp:useBean id="meat1" class="code.util.Meat" scope="request">
			<jsp:setProperty name="meat1" property="title" param="title"/>
		</jsp:useBean>
		1,我喜歡<jsp:getProperty name="meat1" property="title" />
		
		<jsp:useBean id="meat2" class="code.util.Meat" scope="request">
			<jsp:setProperty name="meat2" property="title" param="title"/>
			<jsp:setProperty name="meat2" property="roasted" param="roasted"/>
		</jsp:useBean>
		2,我喜歡<jsp:getProperty name="meat2" property="title" /><br>
		用:<jsp:getProperty name="meat2" property="roasted" />
	</div>
	
	<%@ include file="footer.jsp" %>
</body>
</html>