package code.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/S711")
public class S711 extends HttpServlet
{
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		
		PrintWriter out=response.getWriter();

		out.println("<center><div><h2>Servlet/ContextParam,S711</h2><h3>");
		out.println("msg1"+getServletContext().getInitParameter("msg1")+"<br>");
		out.println("msg2"+getServletContext().getInitParameter("msg2")+"<br>");
		out.println("</h3></div></center>");

		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	} 

}