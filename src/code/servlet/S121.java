package code.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class S121
 */
@WebServlet("/S121")
public class S121 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public S121() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
		//
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		//
		
		PrintWriter out=response.getWriter();
		out.println("<html><head><title>S121</title></head><body>");
		out.println("<h2>S121, my first servlet</h2>");
		out.println("<h3>");
		out.println("一般教材中的定義領域是「智慧主體（intelligent agent）的研究與設計」 <br>"+
		"智慧主體指一個可以觀察周遭環境並作出行動以達致目標的系統。");
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
