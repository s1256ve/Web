package code.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.WebInitParam;

import java.util.Enumeration;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns={"/S622"})
public class S622 extends HttpServlet
{
	
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		//
		PrintWriter out=response.getWriter();

		out.println("<center><div style='width:80%;height:400px;'>");
		out.println("<h2>Servlet/Header,S622</h2><h3><table border='1' width='80%'>");
		Enumeration headerNames=request.getHeaderNames();
		
		while(headerNames.hasMoreElements())
		{
			String name=headerNames.nextElement().toString(),value=request.getHeader(name);
			out.println("<tr><td>"+name+"</td>");
			out.println("<td>"+value+"</td></tr>");
		
		}

		out.println("</table></h3></div></center>");
/*
				
		
		out.println("</h3></div></center>");
*/
		//
		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	}

}