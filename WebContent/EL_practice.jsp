<!DOCTYPE HTML><%@page language="java"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<meta charset="UTF-8">
<title>EL_practice</title>

</head>
<body>
	
	<br>------EL----------------
	<br>
	$ { ns : func (param1, param2) }(ns=namespace, func=function's name)<br>
	&lt;%=request.getAttribute(name)%&gt;==$ { requestScope.name }<br>
	&lt;%=request.getParameter(name)%&gt;==$ { param.name }<br>
	&lt;%=request.getParameterValues(name)%&gt;==$ { paramValues.name(collection) }<br>
	<br>--------------------------<br>
	header,headerValues -獲取請求頭資訊==request.getHeader(name)<br>
	initParam-獲取全域性初始化引數==this.getServletContext().getInitParameter(name)<br>
	cookie-WEB開發中cookie==request.getCookies()---cookie.getName()---cookie.getValue()<br>
	<br>--------JSTL--------------
	<br>import jstl: &lt;%@ taglib uri="http://java.sun.com/jsp/jstl/core"
	prefix="c" %&gt;
	<br>
	&lt;c:if test="$ { 1!=9 } "&gt;
		xxxx
	&lt;/c:if&gt;
	<font color="red">
	<c:if test="${1!=9 }">
		xxxx
	</c:if>
	</font>
	<br>----------------------
	<br> &lt;c : set var="salary" scope="session" value="${2000*2}"/&gt;
	<font color="red"> <c:set var="salary" scope="session" value="${2000*2}" />
	</font>
	<br>----------------------
	<br> &lt;c : out value="$ {salary}"/&gt;
	<font color="red"><c:out value="${salary}" /></font>
	<br>----------------------
	<br> &lt;c:forEach var="i" begin="1" end="5"&gt;
	<br> Item &lt;c:out value="$ {i}"/&gt;
	<br> &lt;/c:forEach&gt;
	<br>
	<font color="red"><c:forEach var="i" begin="1" end="5">
   Item <c:out value="${i}" />
			
		</c:forEach></font>
	<br>----------------------
	<br> &lt;c:forTokens items="google,runoob,taobao" delims=","
	var="name"&gt;
	<br> &lt;c:out value="$ {name}"/&gt;
	<br> &lt;/c:forTokens&gt;
	<br>
	<font color="red"><c:forTokens items="google,runoob,taobao" delims="," var="name">
			<c:out value="${name}" />
			
		</c:forTokens></font>
	<br>----------------------
	<br> &lt;c:url var="myURL" value="EL_practice.jsp"&gt;
	<br> &lt;c:param name="name" value="Runoob"/&gt;
	<br> &lt;c:param name="url" value="www.runoob.com"/&gt;
	<br> &lt;/c:url&gt;
	<br>
	<c:url var="myURL" value="">
		<c:param name="name" value="Runoob" />
		<c:param name="url" value="www.runoob.com" />
	</c:url>
	<font color="red"><a href="/<c:out value='${myURL}'/>"> use&lt;c:param&gt; to switch to parameter to send URL</a> </font>
</body>
</html>