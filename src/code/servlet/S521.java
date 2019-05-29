package code.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.WebInitParam;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns={"/S521"},
	initParams={@WebInitParam(name="S",value="/S522"),
		@WebInitParam(name="F",value="j521.jsp")}
)
public class S521 extends HttpServlet
{
	private String S,F;
	public void init() throws ServletException
	{
		S=getInitParameter("S");
		F=getInitParameter("F");
	}
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		//
		PrintWriter out=response.getWriter();
		String user=request.getParameter("user");
		String pass=request.getParameter("pass");
		if(user.equals("jsp")&&pass.equals("1234"))
		{
			Cookie cookie=new Cookie("user",user);
			cookie.setMaxAge(7*24*60*60);
			response.addCookie(cookie);

			cookie=new Cookie("color","red");
			cookie.setMaxAge(7*24*60*60);
			response.addCookie(cookie);

			cookie=new Cookie("gender","male");
			cookie.setMaxAge(7*24*60*60);
			response.addCookie(cookie);
			
			request.setAttribute("user",user);
			request.getRequestDispatcher(S).forward(request,response);
		}
		else
		{
			request.getRequestDispatcher(F).forward(request,response);
		}

/*
		out.println("<center><div style='width:80%;height:400px;'>");
		out.println("<h2>ContentParameter,S511</h2><h3>");		
		out.println("重點1: "+getServletContext().getInitParameter("p1")+"<br>");
		out.println("重點2: "+getServletContext().getInitParameter("p2")+"<br>");
		out.println("重點3: "+getServletContext().getInitParameter("p3")+"<br>");
		out.println("</h3></div></center>");
*/
		//
		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	}

}