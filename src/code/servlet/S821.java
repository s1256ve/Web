package code.servlet;

import javax.servlet.GenericServlet;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.ServletException;
import javax.servlet.RequestDispatcher;

import java.io.IOException;
import java.io.PrintWriter;

import java.util.List;

import code.util.MealType;
import code.util.MealSelect;


public class S821 extends GenericServlet{

	public void service(ServletRequest request,ServletResponse response)throws IOException,ServletException
	{
		RequestDispatcher rd=request.getRequestDispatcher("/banner.jsp");
		rd.include(request,response);
		//
		String meal=request.getParameter("meal");
		MealSelect ms=new MealSelect();

		MealType m=MealType.valueOf(meal);
		List store=ms.getAvailableStore(m);
		
		request.setAttribute("store",store);
		rd=request.getRequestDispatcher("/j822.jsp");
		rd.forward(request,response);
			
		//
		rd=request.getRequestDispatcher("/footer.jsp");
		rd.include(request,response);
	}


}