<%@ page import="java.util.List,java.util.Iterator" %>


<%@ include file="banner.jsp"%>

<center>
	<div>
	<h2>JSP/Order,j821.jsp</h2>
	<h3>
		點餐店家:<br>
		<%
			List store=(List)request.getAttribute("store");
			Iterator it=store.iterator();//loop

			while(it.hasNext())
			{
				out.println(it.next()+"<br>");
			}
				
		%>	
			
	</h3>
	</div>
</center>

<%@ include file="footer.jsp"%>