<%@ page language="java" contentType="text/html; charset=BIG5"
    pageEncoding="BIG5"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
<title>Insert title here</title>
</head>
<body>
<div align="center">
	<h2>EL, j322.jsp</h2>
	<h3>
	<%-- <%@page import="java.util.*" %>
	<%@page import="java.util.List,java.util.ArrayList" %>--%>
	<%@page import="java.util.List" import="java.util.ArrayList" %>
	<%
		List meats=new ArrayList();
		request.setAttribute("meats", meats);
		meats.add("雞肉");
		meats.add("pork");
		meats.add("T-bones");
		meats.add("魚肉");
	%>
	<font color="red">
	meats[0]: ${meats[0]}<br>
	meats[2]: ${requestScope["meats"][2]}<br>
	</font>
	<%@page import="java.util.Map,java.util.HashMap" %>
	<%
		Map drinks=new HashMap();
		drinks.put("0","咖啡");
		drinks.put("1","tea");
		drinks.put("2","milk");
		drinks.put("3","可樂");
		request.setAttribute("drinks",drinks);
		
	%>
	<font color="blue">
	drinks["1"]: ${drinks["1"]}<br>
	drinks["3"]: ${drinks["3"] }<br>
	</font>
	</h3>
</div>
</body>
</html>