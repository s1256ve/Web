
<%@ include file="banner.jsp"%>
<div align="center">
	<h2>JSP/JSP Document,j511.jsp</h2>
	<h3>
	<img src="JSP.bmp"><br>
	<font size="33" color="red">
	<%-- comment --%>
	<%! int a=87;%>
	<%=a%><br>
	<%@page import="java.util.Date"%>
	JSP<br>
	Today is <% 
		Date d=new Date();
		out.println(d);	
		%><br>
	</font>
	<font color="blue" size="30">
	JSP Document<br>
	<!-- comment -->

	<jsp:declaration>
		int b=2018;
	</jsp:declaration>

	<jsp:expression>
		b
	</jsp:expression><br>

	<jsp:scriptlet>
		int c=5;
		while(c>=1)
		{
			out.println(c+" ");
			c--;
		} 
	</jsp:scriptlet>
	</font>

	</h3>
</div>
<jsp:directive.include file="footer.jsp" />
