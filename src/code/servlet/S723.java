package code.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.Enumeration;
import code.listener.L723;

@WebServlet("/S723")
public class S723 extends HttpServlet
{
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		
		PrintWriter out=response.getWriter();
		HttpSession session=request.getSession();
		out.println("<center><div><h2>Servlet/Session,S722</h2><h3>");
				
		synchronized(session){
			session.setAttribute("msg Again",new L723(getServletContext()));
			session.removeAttribute("msg Again");
		}
		
		out.println("</h3></div></center>");

		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	} 

}