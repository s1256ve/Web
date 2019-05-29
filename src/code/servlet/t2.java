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
 * Servlet implementation class t2
 */
@WebServlet("/t2")
public class t2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       private String s=new t1().test;
    /**
     * @see HttpServlet#HttpServlet()
     */
    public t2() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out=response.getWriter();
		out.println("<html><head><title>S121</title></head><body>");
		out.println("<h2>public string test</h2>");
		out.println("<h3>");
		out.println("getAttribute:&nbspaptype:"+request.getAttribute("aptype")+"\tpageid:"+request.getAttribute("pageid")+"\tdel:"+request.getAttribute("del")+"<br>");
		//out.println("getParameter:&nbspaptype:"+request.getParameter("aptype").toString()+"\tpageid:"+(String)request.getParameter("pageid")+"\tdel:"+(String)request.getParameter("del"));
		
		
		
		
			RequestDispatcher rd = request.getRequestDispatcher("LoadAP");
			rd.forward(request,response);
			
		
		
		out.println("</h3></body></html>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
