package code.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.AsyncContext;

import java.util.concurrent.Executors;
import java.util.concurrent.ExecutorService;
import java.util.Enumeration;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns={"/S623"},asyncSupported=true)
public class S623 extends HttpServlet
{
	private ExecutorService es=Executors.newFixedThreadPool(2);
	
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		//
		PrintWriter out=response.getWriter();

		out.println("<center><div style='width:80%;height:400px;'>");
		out.println("<h2>Servlet/Async,S623</h2><h3>");
		request.setAttribute("org.apache.catalina.ASYNC_SUPPORTED",true);
		AsyncContext ctx=request.startAsync();
		
		es.submit(new A623(ctx));
		

		out.println("</h3></div></center>");

		//
		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	}

	public void destroy(){
		es.shutdown();
	}

}