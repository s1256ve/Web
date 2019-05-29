package code.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AppletInServlet
 */
@WebServlet("/AppletInServlet")
public class AppletInServlet extends HttpServlet {
	//private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AppletInServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out=response.getWriter();
		
		out.println("<center><h1>This servlet creates an HTML document</h1>");
		out.println(embedApplet("processShape.class"));

		out.println("<P>");
	        out.print("<form action=\"");
	        out.print("AppletInServlet");
	        out.print("\" ");
	        out.println("method=POST>");
	        //out.println("Please type in a student's first name<BR>");
	        //out.println("The entire name or just a part of a name<P>");
	        //out.println("If no name is entered, the search is string is \"Mary\"<P>");
	        //out.println("First name: ");
	        //out.println("<input type=text size=15 name=\"First\"><P>");
	        out.println("<input type=submit value=go>");
	        out.println("</form>");
	        out.println("</center>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	 public String embedApplet(String appletName) {
			String s = "<EMBED type=\"application/x-java-applet;version=1.7\"";
			s = s + "CODE = \"" + appletName + "\"";
			s = s + "CODEBASE = \"" + "http://localhost:8080/testApache/applet" + "\"";
			s = s + "ARCHIVE = \"" + "processShape.jar\"";
			s = s + "WIDTH = 800 HEIGHT = 300 ";
			
			s = s + "</EMBED>";
			return s;
		    }

}
