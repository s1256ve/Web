package code.servlet;


import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.Calendar;
import java.io.IOException;


@WebServlet("/S811")
public class S811 extends HttpServlet {
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request, response);
		//
		String title=request.getParameter("title");
		String email=request.getParameter("title");		
		String subject=request.getParameter("title");
		String memo=request.getParameter("title");
		String url="jdbc:mysql://localhost:3306/memo";
		
		try
		{
			Class.forName("com.mysql.jdbc.Driver");
			Connection cn=DriverManager.getConnection(url,"root","1234");
			PreparedStatement p=cn.prepareStatement("INSERT INTO t_memo (name,email,subject,memo,date) VALUES (?,?,?,?,?)");
			p.setString(1,title);
			p.setString(2,email);
			p.setString(3,subject);
			p.setString(4,memo);
			Calendar c=Calendar.getInstance();

			String ss=String.format("%s/%s/%s",c.get(Calendar.YEAR),c.get(Calendar.MONTH)+1,c.get(Calendar.DAY_OF_MONTH));
			p.setString(5,ss);
			
			int i=p.executeUpdate();
			if(i!=0)
			{
				
				rd=request.getRequestDispatcher("/j811.jsp");
				rd.include(request, response);
			}
				
		}
		catch(Exception e)
		{
			
		}
		
		
		
		
		
		//
		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request, response);
	}

}
