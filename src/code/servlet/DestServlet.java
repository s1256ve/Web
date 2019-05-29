package code.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

/**
 * Servlet implementation class DestServlet
 */
@WebServlet("/DestServlet")
public class DestServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    List<String> list=new ArrayList<String>();   
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DestServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out=response.getWriter();
		HttpSession session=request.getSession();
		String sub=request.getParameter("sub"),str=request.getParameter("str");
		out.println("<center><h1>DestServlet</h1>");
		list=(List<String>)session.getAttribute("list");
		if(list==null){
			list=new ArrayList<String>();
			
		}
		
		if(sub.equals("Add")){
			out.println("Add is pressed<br>");
			list.add(str);
		}
		else{
			out.println("Remove is pressed<br>");
			list.remove(str);
		}
		session.setAttribute("list", list);
		out.println("<br>List:");
		for(String s:list){
			out.println(s+"\t");
		}
		out.println("<br>-----------------------<br>");
		out.println("request:<br>"+request.getMethod());
		out.println("</center>");
		
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
