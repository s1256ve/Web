package code.filter;

import javax.servlet.Filter;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.FilterConfig;

import java.io.IOException;

public class F812 implements Filter
{
	private int count;
	public void init(FilterConfig config)throws ServletException
	{
		count=0;
	}
	public void doFilter(ServletRequest request,ServletResponse response,FilterChain chain)throws ServletException,IOException
	{
		count++;
		System.out.println("Count:"+count);
		chain.doFilter(request,response);
	}

	public void destroy(){}
}