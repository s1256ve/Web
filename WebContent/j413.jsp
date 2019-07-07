<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page import="java.io.* , java.util.* , java.sql.* ,javax.servlet.* ,javax.servlet.http.*" %>
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
		<h2>JSP/JavaBean/DB,j413.jsp</h2>
		
		<h3>
		
		<jsp:useBean id="fruit1" class="code.util.Fruit" scope="request">
			<jsp:setProperty name="fruit1" property="title" param="title"/>
		</jsp:useBean>
		1.I like <jsp:getProperty property="title" name="fruit1"/>
		
		<br>
		<font color="red">XX</font>
		<jsp:useBean id="fruit2" class="code.util.Fruit" scope="request">
			<jsp:setProperty name="fruit2" property="title" param="*"/>
		</jsp:useBean>
		2.I like <jsp:getProperty property="title" name="fruit2"/>
		
		<br>
		<jsp:useBean id="fruit3" class="code.util.Fruit" scope="request">
			<jsp:setProperty name="fruit3" property="title"/>
		</jsp:useBean>
		3.I like <jsp:getProperty property="title" name="fruit3"/>
		
		<br>
		<jsp:useBean id="fruit4" class="code.util.Fruit" scope="request">
			<jsp:setProperty name="fruit4" property="*"/>
		</jsp:useBean>
		4.I like <jsp:getProperty property="title" name="fruit4"/>
		
		<br>
		<jsp:useBean id="fruit5" type="code.util.Fruit" class="code.util.Fruit" scope="request">
			<jsp:setProperty name="fruit5" property="*"/>
		</jsp:useBean>
		5.I like <jsp:getProperty property="title" name="fruit5"/>
		
		</h3>
	</div>
<%@ include file="footer.jsp"%>

</body>
</html>