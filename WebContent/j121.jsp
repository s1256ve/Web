<%@ page language="java" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Insert title here</title>
</head>
<body>
	<h2>j121 , my first JSP</h2>
	<img alt="" src="JSP.bmp"><br>
	
	<%-- JSP comment --%>
	
	<%-- JSP declaration--%>
	
	<%!
		String name="Chaung";	
		double h=1.78;
		double w=63.5;
		char g='M';
	%>
	<h3>
	Name:<%=name %><br>		<%-- JSP expression --%>
	Height:<%out.println(h); %> <br>		<%-- JSP scriplet --%>
	Weight:<%=w %><br>
	Gender:<%out.println(g); %> <br>
	
	
	
	<%-- JSP directive --%>
	<%@ page import="java.util.Date"%> <%-- JSP --%>
	<%! Date d=new Date(); %>
	
	Today is <%=d %><br>
	今天是 <%out.println(d); %><br>
	
	</h3>
	
	
	
</body>
</html>