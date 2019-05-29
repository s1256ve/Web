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
 * Servlet implementation class S412
 */
@WebServlet("/S412")
public class S412 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public S412() {
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
		out.println("<center><div style='width:80%;height:500px;margin-left:100px;'>");
		out.println("<h2>Servlet/request,S412</h2><h3>");
		String rURL=request.getRequestURL().toString(),rURI=request.getRequestURI();
		out.println("getRequestURL() "+rURL+"<br>");
		out.println("getRequestURI() "+rURI+"<br>");
		String contextPath=request.getContextPath(),servletPath=request.getServletPath();
		out.println("getContextPath() "+contextPath+"<br>");
		out.println("getServletPath() "+servletPath+"<br>");
		String serverName=request.getServerName();
		int serverPort=request.getServerPort();
		out.println("getContextPath() "+serverName+"<br>");
		out.println("getServerPort() "+serverPort+"<br>");
		String remoteAddr=request.getRemoteAddr(),remoteHost=request.getRemoteHost(),remoteUser=request.getRemoteUser();
		int remotePort=request.getRemotePort();
		out.println("getRemoteAddr() "+remoteAddr+"<br>");
		out.println("getRemoteAddr() "+remoteHost+"<br>");
		out.println("getRemotePort() "+remotePort+"<br>");
		out.println("getRemoteUser() "+remoteUser+"<br>");
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
