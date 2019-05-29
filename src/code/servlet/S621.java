package code.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;
import javax.servlet.annotation.WebServlet;
import javax.servlet.annotation.WebInitParam;

import java.util.Calendar;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns={"/S621"})
public class S621 extends HttpServlet
{
	
	protected void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		//
		PrintWriter out=response.getWriter();

		out.println("<center><div style='width:80%;height:400px;'>");
		out.println("<h2>Servlet/Time,S621</h2><h3>");
		Calendar c=Calendar.getInstance();
		
		int hour=c.get(Calendar.HOUR_OF_DAY),min=c.get(Calendar.MINUTE),sec=c.get(Calendar.SECOND);
		String ct=hour+":"+min+":"+sec;
		out.println(ct+"<br>Facebook Year<br><select>");
		response.setIntHeader("refresh",1);//1 sec
		
		int year=c.get(Calendar.YEAR);

		for(int a=year;a>=1905;a--)
		{
			out.println("<option value='"+a+"'>"+a+"</option>");
		}
		out.println("</select></h3></div></center>");
/*
				
		
		out.println("</h3></div></center>");
*/
		//
		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	}

}