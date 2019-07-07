<%@ page import="java.util.List,java.util.Iterator" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<%@ include file="banner.jsp"%>

<center>
	<div>
	<h2>JSP,j823.jsp</h2>
	<h3>
		
		<%request.setAttribute("code",new Integer(10)); %>
		<c:set var="code" value="5" />	
		${code+2}<br>

		<%request.setAttribute("theexception",new Exception("my message")); %>
		<c:catch var="theexception">
			<%! int i=1; %>
			<%= 100/(i-1) %>
		</c:catch>
		${theexception.message}
	</h3>
	</div>
</center>

<%@ include file="footer.jsp"%>