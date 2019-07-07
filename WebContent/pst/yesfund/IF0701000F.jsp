<%@ page 
language="java" import="java.io.*" contentType="text/html; charset=Big5"
%>
<%
	response.setContentType ("application/download");
			response.setHeader ("Content-Disposition", "attachment; filename="+"list"+".txt");
			String data = request.getParameter("csv");
			PrintWriter pw = response.getWriter();
			pw.println(data);
			pw.close();
%> 
