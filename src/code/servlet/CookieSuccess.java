package code.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CookieSuccess
 */
@WebServlet(urlPatterns={"/CookieSuccess"},
		initParams={@WebInitParam(name="F",value="loginCookie.jsp")})
public class CookieSuccess extends HttpServlet {
	//private static final long serialVersionUID = 1L;
    private String F;   
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CookieSuccess() {
        super();
        // TODO Auto-generated constructor stub
    }
    @Override
    public void init() throws ServletException {
    	// TODO Auto-generated method stub
    	F=getInitParameter("F");
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();

		out.println("<center><div style='width:80%;height:400px;'>");
		out.println("<h2>CookieLogin,S522</h2><h3>");
		String user=request.getAttribute("user").toString();
		
		if(user!=null)
		{
			out.println(user+" Login sussess<br>");
		}
		else
		{
			request.getRequestDispatcher(F).forward(request,response);
		}
		out.println("--------------------Cookies--------------------<br>");
		Cookie[] cookies=request.getCookies();
		
		
		if(cookies!=null)
		{
			for(Cookie cookie:cookies)
			{
				out.println(cookie.getName()+" : "+cookie.getValue()+"<br>");
			}
		}
		out.println("</h3></div></center>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
