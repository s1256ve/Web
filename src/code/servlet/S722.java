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

@WebServlet("/S722")
public class S722 extends HttpServlet
{
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		
		PrintWriter out=response.getWriter();
		HttpSession session=request.getSession();
		out.println("<center><div><h2>Servlet/Session,S722</h2><h3>");
		out.println("Session ID:"+session.getId()+"<br>");
		out.println("Session CreationTime:"+(new Date(session.getCreationTime()))+"<br>");
		out.println("Session LastAccessedTime:"+(new Date(session.getLastAccessedTime()))+"<br>");
		String s1="msg",s2="Good Luck",s3="msg2",s4="Good Morning";		
		synchronized(session){
			session.setAttribute(s1,s2);
			session.setAttribute(s3,s4);
		}
		out.println("Session msg:<br>");
		Enumeration names=session.getAttributeNames();


		while(names.hasMoreElements())
		{
			String name=names.nextElement().toString();

			out.println(name+":"+session.getAttribute(name)+"<br>");
		}
		out.println("</h3></div></center>");

		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	} 

}