package code.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class S321
 */
@WebServlet("/S322")
public class S322 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public S322() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		PrintWriter out=response.getWriter();
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request, response);
		//
		out.println("<center><div style='width:80%;height:300px;margin-left:130px;'>");
		out.println("<h2>Servlet/DB Insert result,S322</h2><h3>");
		out.println("<table width='80%' border='1'>");
		String no=request.getParameter("no"),name=request.getParameter("name"),price=request.getParameter("price"),qty=request.getParameter("qty"),date=request.getParameter("date");
		String s="SELECT * FROM t_cost",url="jdbc:mysql://localhost:3306/cost";
		try
		{
			Class.forName("com.mysql.jdbc.Driver");
			Connection cn=DriverManager.getConnection(url,"root","1234");
			//Statement st=cn.createStatement();
			//ResultSet rs=st.executeQuery(s);
			PreparedStatement p=cn.prepareStatement("INSERT INTO t_cost VALUES(?,?,?,?,?)");
			p.setString(1, no);
			p.setString(2, name);
			p.setString(3, price);
			p.setString(4, qty);
			p.setString(5, date);
			int i=p.executeUpdate();
			if(i!=0)
			{
				out.println("<font color='blue'>Update Success</font><br>");
			}
			else
			{
				out.println("<font color='red'>Update fail</font><br>");
			}
			
			cn.close();
			
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
		
		out.println("</h3></div></center>");
		
		//
		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
