package code.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
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
@WebServlet("/S321")
public class S321 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public S321() {
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
		out.println("<h2>Servlet/DB,S321</h2><h3>");
		out.println("<table width='80%' border='1'>");
		out.println("<tr><td>#</td><td>name</td><td>price</td><td>qty</td><td>date</td></tr>");
		String s="SELECT * FROM t_cost",url="jdbc:mysql://localhost:3306/cost",d="DELETE FROM t_cost WHERE no=?";
		try
		{
			Class.forName("com.mysql.jdbc.Driver");
			Connection cn=DriverManager.getConnection(url,"root","1234");
			Statement st=cn.createStatement();
			if(request.getParameter("idNum")!=null)
			{
				st=cn.prepareStatement(d);
				
			}
			ResultSet rs=st.executeQuery(s);
			
			while(rs.next())
			{
				out.println("<tr><td>"+rs.getInt("no")+"</td><td>"+rs.getString("name")+"</td><td>"+rs.getInt("price")+"</td><td>"+rs.getInt("qty")+"</td><td>"+rs.getString("date")+"</td></tr>");
			}
			
		}
		catch(Exception e)
		{
			System.out.println(e.getMessage());
		}
		
		out.println("</table><form action='S321'>");
		out.println("Delete Id<input type='text' name='idNum' value=''><br>");
		out.println("<input type='submit' value='enter'>");
		out.println("</form></h3></div></center>");
		
		
		
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
