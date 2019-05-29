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


@WebServlet("/S724")
public class S724 extends HttpServlet
{
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		
		PrintWriter out=response.getWriter();
		
		out.println("<center><div><h2>Servlet/Session,S722</h2><h3>");
		out.println("request.getAuthType()¡G" + request.getAuthType()+"<br>");
    out.println("request.getCharacterEncoding()¡G" + request.getCharacterEncoding()+"<br>"); 
    out.println("request.getContentLength()¡G" + request.getContentLength()+"<br>"); 
    out.println("request.getContentType()¡G" + request.getContentType()+"<br>"); 
    out.println("request.getContextPath()¡G" + request.getContextPath()+"<br>");
    out.println("request.getLocalAddr()¡G" + request.getLocalAddr()+"<br>");
    out.println("request.getLocalName()¡G" + request.getLocalName()+"<br>");
    out.println("request.getLocalPort()¡G" + request.getLocalPort()+"<br>"); 
    out.println("request.getMethod()¡G" + request.getMethod()+"<br>"); 
    out.println("request.getPathInfo()¡G" + request.getPathInfo()+"<br>");
    out.println("request.getPathTranslated()¡G" + request.getPathTranslated()+"<br>");
    out.println("request.getProtocol()¡G" + request.getProtocol()+"<br>"); 
    out.println("request.getQueryString()¡G" + request.getQueryString()+"<br>"); 
    out.println("request.getRemoteAddr()¡G" + request.getRemoteAddr()+"<br>"); 
    out.println("request.getRemoteHost()¡G" + request.getRemoteHost()+"<br>"); 
    out.println("request.getRemotePort()¡G" + request.getRemotePort()+"<br>"); 
    out.println("request.getRemoteUser()¡G" + request.getRemoteUser()+"<br>");  
    out.println("request.getRequestedSessionId()¡G" + request.getRequestedSessionId()+"<br>"); 
    out.println("request.getRequestURI()¡G" + request.getRequestURI()+"<br>"); 
    out.println("request.getRequestURL()¡G" + request.getRequestURL()+"<br>");
    out.println("request.getScheme()¡G" + request.getScheme()+"<br>"); 
    out.println("request.getServerName()¡G" + request.getServerName()+"<br>"); 
    out.println("request.getServerPort()¡G" + request.getServerPort()+"<br>"); 
    out.println("request.getServletPath()¡G" + request.getServletPath()+"<br>"); 
    out.println("request.isSecure()¡G" + request.isSecure()+"<br>"); 
		out.println("</h3></div></center>");

		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	} 

}