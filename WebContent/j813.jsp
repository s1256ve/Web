<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<%@ include file="banner.jsp"%>

<center>
	<div>
	<h2>JSP,j813.jsp</h2>
	<h3>
		<% pageContext.setAttribute("ar",new int[]{8,28,9,25}); %>
		<c:forEach items="${ar}" varStatus="status">
			${ar[status.index]}
		</c:forEach>
		<c:forEach items="${ar}" varStatus="status">
			${status.index}
		</c:forEach>
	</h3>
	</div>
</center>

<%@ include file="footer.jsp"%>