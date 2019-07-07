<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=BIG5" pageEncoding="BIG5"%>
<html>
<head>
<title>testLoadParameter</title>
<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
</head>
<body>
	LoadAp Parameter <br>getParameter()<br>aptype:<%=request.getParameter("aptype")%><br>
	pageid:<%=request.getParameter("pageid")%><br>
	-------------------------<br>
	getAttribute():<br>aptype:<%=request.getAttribute("aptype")%><br>
	pageid:<%=request.getAttribute("pageid")%><br>
	-------------------------<br>
</body>
</html>