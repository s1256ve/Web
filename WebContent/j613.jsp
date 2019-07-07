
<%@ taglib prefix="ex3" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="ex4" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="ex5" tagdir="/WEB-INF/tags" %>
<%@ taglib prefix="ex6" tagdir="/WEB-INF/tags" %>

<%@ include file="banner.jsp"%>
<div align="center">
	<h2>JSP/tags,j613.jsp</h2>
	<h3>
	<img src="JSP.bmp"><br>
	<ex3:header3 city="Taipei" /><br>
	<ex3:header3 /><br>

	<% request.setAttribute("city","Taipei"); %>
	<ex4:header4 city="${city}" /><br>
	
	<ex5:header5>Lunch</ex5:header5><br>

	<% request.setAttribute("position","Lunch"); %>
	<ex6:header6>${position}</ex6:header6><br>
	</h3>
</div>
<%@ include file="footer.jsp"%>
