<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="BIG5"%>
	<%@taglib prefix="f" uri="/WEB-INF/tlds/f.tld" %>
<html>
<head>
<title>TestSimpleTag</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
</head>
<body>
	<h1>Test Simple Tag</h1>
	JSP(tag)->f.tld->TestSimpleTagSupport.java<br>
	<f:if test="true">
		你的秘密資料在此！
	</f:if>
	<br>Add Result:<f:add x="12" isNum="false" y="23"/>
	<br>Test get "context-param":<%=getServletContext().getInitParameter("Part1")%>
</body>
</html>