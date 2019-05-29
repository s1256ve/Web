package code.filter;

import javax.servlet.Filter;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.FilterConfig;

import java.io.IOException;

public class F811 implements Filter
{

	public void init(FilterConfig config)throws ServletException
	{

	}
	public void doFilter(ServletRequest request,ServletResponse response,FilterChain chain)throws ServletException,IOException
	{
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		//response.setCharacterEncoding("UTF-8");
		//response.setContentType("text/html");
		chain.doFilter(request,response);
	}

	public void destroy(){}
}