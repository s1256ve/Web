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

@WebServlet(urlPatterns={"/S522"},
	initParams={
		@WebInitParam(name="F",value="j521.jsp")}
)
public class S522 extends HttpServlet
{
	private String F;
	public void init() throws ServletException
	{
		
		F=getInitParameter("F");
	}
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		//
		PrintWriter out=response.getWriter();

		out.println("<center><div style='width:80%;height:400px;'>");
		out.println("<h2>CookieLogin,S522</h2><h3>");
		String user=request.getAttribute("user").toString();
		
		if(user!=null)
		{
			out.println(user+" Login sussess<br>");
		}
		else
		{
			request.getRequestDispatcher(F).forward(request,response);
		}
		out.println("</h3></div></center>");
/*
				
		
		out.println("</h3></div></center>");
*/
		//
		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	}

}