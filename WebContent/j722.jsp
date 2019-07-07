

<%@ include file="banner.jsp"%>

<center>
	<div>
	<h2>JSP,j722.jsp</h2>
	<h3>
		<%
			int i=5;
			while(i>=1)
			{
				out.println(i--);
				
			}
			
		%>

		

	</h3>
	</div>
</center>

<%@ include file="footer.jsp"%>