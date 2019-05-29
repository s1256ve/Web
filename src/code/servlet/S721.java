package code.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ResourceBundle;

@WebServlet("/S721")
public class S721 extends HttpServlet
{
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		
		PrintWriter out=response.getWriter();
		String s="resources.LocalString_"+request.getParameter("local").trim();
		ResourceBundle rb=ResourceBundle.getBundle(s);
		out.println("<center><div><h2>Servlet/ResoruceBundle,S721</h2><h3>");
		out.println("Locale:"+request.getParameter("local")+"<br>");
		out.println("Msg="+rb.getString("msg")+"<br>");
		out.println("</h3></div></center>");

		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	} 

}