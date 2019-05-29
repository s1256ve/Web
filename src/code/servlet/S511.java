package code.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/S511")
public class S511 extends HttpServlet
{
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		//
		PrintWriter out=response.getWriter();

		out.println("<center><div style='width:80%;height:400px;'>");
		out.println("<h2>ContentParameter,S511</h2><h3>");		
		out.println("重點1: "+getServletContext().getInitParameter("p1")+"<br>");
		out.println("重點2: "+getServletContext().getInitParameter("p2")+"<br>");
		out.println("重點3: "+getServletContext().getInitParameter("p3")+"<br>");
		out.println("</h3></div></center>");
		//
		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	}

}