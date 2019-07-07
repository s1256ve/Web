<%@ include file="banner.jsp"%>
<div align="center">
	<h2>JSP/File upload,j612.jsp</h2>
	<h3>
	<%
		String s=request.getAttribute("msg").toString();
		if(s!=null)
		{
			out.println(s+"go to see/upload");
		}
	%>

	
	</h3>
</div>
<%@ include file="footer.jsp"%>