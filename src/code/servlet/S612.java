package code.servlet;

import javax.servlet.http.Part;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpSession;

import code.listener.L611;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/S612")
public class S612 extends HttpServlet
{

	
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		//
		PrintWriter out=response.getWriter();
		
		HttpSession session=request.getSession();
		session.setAttribute("msg",new L611(getServletContext()));
		session.removeAttribute("msg");

		out.println("<center><div style='width:80%;height:400px;'>");
		out.println("<h2>ContentParameter,S511</h2><h3>");		
		
		out.println("</h3></div></center>");
		//
			
		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	}

	
}