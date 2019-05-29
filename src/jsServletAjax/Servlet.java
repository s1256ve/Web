package jsServletAjax;

import java.io.IOException;
import java.io.PrintStream;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Servlet
 */
  
@SuppressWarnings("serial")  
 
@WebServlet(name = "ajaxRequest", urlPatterns = { "/ajaxRequest" }) 
public class Servlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Servlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintStream out = new PrintStream(response.getOutputStream());  
        response.setContentType("text/html;charSet=utf-8");  
        out.print("test");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html; charset=utf-8");
    	PrintWriter pw = response.getWriter();
    	request.setCharacterEncoding("utf-8");
    	String param1=request.getParameter("param1");
    	String param2=request.getParameter("param2");    	
    	pw.print("Test param1="+param1+"Test param2="+param2);
		pw.flush();
		pw.close();
	}

}
