package code.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.WebInitParam;

import java.io.IOException;
import java.io.PrintWriter;


@WebServlet(urlPatterns={"/S812"},
	initParams={@WebInitParam(name="P",value="/pic")})
public class S812 extends HttpServlet
{

	private String P;

	public void init()throws ServletException
	{
		P=getInitParameter("P");
	}
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		
		PrintWriter out=response.getWriter();
		
		out.println("<center><div><h2>Servlet/Picture,S812</h2><h3>");
		for(String s : getServletContext().getResourcePaths(P))
		{
			s=s.replaceFirst("/","");
			out.println("<img src='"+s+"'>");
		}
		out.println("</h3></div></center>");

		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	} 

}