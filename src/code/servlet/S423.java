package code.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class S423
 */
@WebServlet("/S423")
public class S423 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public S423() {
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
		out.println("<center><div style='width:80%;height:500px;left-margin:100px;'>");
		out.println("<h2>JSP/Servlet,S421</h2><h3>");
		//getSession():Current session
		//getSession(true):No session,create new session
		//getSession(false):No session,return false
		HttpSession session=request.getSession();
		out.println("Session:"+session.isNew()+"<br>");
		out.println("Session Id:"+session.getId()+"<br>");
		session.invalidate();
		session=request.getSession(true);
		out.println("Session:"+session.isNew()+"<br>");
		out.println("Session Id:"+session.getId()+"<br>");
		
		Long t1=session.getCreationTime();
		Long t2=session.getLastAccessedTime();
		out.println("getCreationTime():"+(new Date(t1))+"<br>");
		out.println("getLastAccessedTime():"+(new Date(t2))+"<br>");
		
		int counter=1;
		String s=null;
		try{
			s=session.getAttribute("counter").toString();
		}
		catch(Exception e){}
		
		if(s!=null)
		{
			counter=Integer.parseInt(s);
			counter++;
		}
		session.setAttribute("counter", counter);
		out.println("Counter:"+counter+"<br>");
		
		out.println("</h3></center>");
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
