package code.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class S311
 */
@WebServlet(urlPatterns={"/S311"},initParams={
		@WebInitParam(name="803",value="Java 7 OCA"),
		@WebInitParam(name="804",value="Java 7 OCP"),
		@WebInitParam(name="808",value="Java 8 OCA"),
		@WebInitParam(name="809",value="Java 8 OCP"),
		@WebInitParam(name="899",value="OCW")
		
})
public class S311 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public S311() {
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
		out.println("<center><div style='width:80%;heught:300px;margin-left:130px;'>");
		out.println("<h2>Servlet/WebInitParam,S311</h2><h3><font color='red'>");
		out.println("803: "+getServletConfig().getInitParameter("803")+"<br>");
		out.println("804: "+getServletConfig().getInitParameter("804")+"<br>");
		out.println("808: "+getServletConfig().getInitParameter("808")+"<br>");
		out.println("809: "+getServletConfig().getInitParameter("809")+"<br>");
		out.println("899: "+getServletConfig().getInitParameter("899")+"<br>");
		out.println("</font></h3></div></center>");
		
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
