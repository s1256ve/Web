package code.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class testCookie
 */
@WebServlet(urlPatterns={"/testCookie"},
initParams={@WebInitParam(name="S",value="/CookieSuccess"),@WebInitParam(name="F",value="loginCookie.jsp")})
public class testCookie extends HttpServlet {
	//private static final long serialVersionUID = 1L;
	private String S,F;
    @Override
    public void init() throws ServletException {
    	// TODO Auto-generated method stub
    	S=getInitParameter("S");
    	F=getInitParameter("F");
    }  
    /**
     * @see HttpServlet#HttpServlet()
     */
    public testCookie() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		String user=request.getParameter("user");
		String pass=request.getParameter("pass");
		//Random r=new Random();
		if(user.equals("sve")&&pass.equals("1234"))
		{
			//for(int i=0;i<r.nextInt(10);i++){
			Cookie cookie=new Cookie("user",user);
			cookie.setMaxAge(7*24*60*60);
			response.addCookie(cookie);

			cookie=new Cookie("color","red");
			cookie.setMaxAge(7*24*60*60);
			response.addCookie(cookie);

			cookie=new Cookie("gender","male");
			cookie.setMaxAge(7*24*60*60);
			response.addCookie(cookie);
			
			request.setAttribute("user",user);
			//}
			request.getRequestDispatcher(S).forward(request,response);
		}
		else
		{
			request.getRequestDispatcher(F).forward(request,response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
