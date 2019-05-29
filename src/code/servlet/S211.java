package code.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class S211
 */
@WebServlet("/S211")
public class S211 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public S211() {
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
		out.println("<center><div style='width: 80%;height: 300px;margin-left: 200px;'>");
		out.println("<h2>ServletContent</h2><h3>");
		out.println("important 1 "+getServletContext().getInitParameter("Part1")+"<br>");
		out.println("important 2 "+getServletContext().getInitParameter("Part2")+"<br>");
		out.println("important 3 "+getServletContext().getInitParameter("Part3")+"<br>");
		out.println("</h3></div></center>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
