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
		out.println("�@��Ч������w�q���O�u���z�D��]intelligent agent�^����s�P�]�p�v <br>"+
		"���z�D����@�ӥi�H�[��P�D���Ҩç@�X��ʥH�F�P�ؼЪ��t�ΡC");
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
