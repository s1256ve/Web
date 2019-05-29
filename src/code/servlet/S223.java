package code.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class S223
 */
@WebServlet("/S223")
public class S223 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public S223() {
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
		
		out.println("<center><div style='width:80%;height:250px;margin-keft:130px;'>");
		out.println("<h2>S223</h2><h3>");
		String title=request.getParameter("title"),gender=request.getParameter("gender"),fruit=request.getParameter("fruit"),drink=request.getParameter("drink");
		out.println("<font color='orange'>"+title+"<br>");
		out.println(gender+"<br>");
		out.println(fruit+"<br>");
		out.println(drink+"<br></font><br>");
		out.println("<font color='green'>");
		Enumeration<String> type=request.getParameterNames();
		while(type.hasMoreElements())
		{
			String u=type.nextElement().toString();
			out.println(request.getParameter(u)+"<br>");
		}
		
		out.println("</font></h3></div></center>");
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
