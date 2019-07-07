<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="BIG5"%>
<html>
<head>
<title>BeanResult</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
</head>
<body>
	<%-- define a Bean to be used --%>
	<jsp:useBean id="testBean" class="code.util.testBean" scope="page" />
	<%-- set all value in form into Bean --%>
	<jsp:setProperty property="*" name="testBean"/>
	
	<p>Value your enter</p>
	<%
		String aaa="aaa"; 
		request.setAttribute("aaa", aaa);
	%>
	<%-- get Bean's value --%>
	test's value<jsp:getProperty property="test" name="testBean"/><br>
	testInt's value<jsp:getProperty property="testInt" name="testBean"/>
	<br>--------------<br>
	test's value call by scriptlet<%=testBean.getTest() %><br>
	testInt's value call by scriptlet<%=testBean.getTestInt() %>
	<br>--------------<br>
	test's value call by EL ${testBean.test}<br>
	testInt's value call by EL ${testBean.testInt}<br>
	param: ${requestScope.aaa}<br>
	<c:if></c:if>
	
</body>
</html>