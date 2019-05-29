package code.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class S421
 */
@WebServlet("/S421")
public class S421 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public S421() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		
		PrintWriter out=response.getWriter();
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request, response);
		//
		out.println("<center><div style='width:80%;height:500px;left-margin:100px;'>");
		out.println("<h2>JSP/Servlet,S421</h2><h3>");
		out.println("我是:"+request.getParameter("user")+"<br>性別:"+request.getParameter("gender")+"<br><u1>");
		for(String l:request.getParameterValues("like"))
		{
			out.print("<li>"+l+"</li>");
		}
		
		out.println("</ul></h3></center>");
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
