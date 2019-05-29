package code.filter;

import javax.servlet.Filter;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException; 

import java.io.IOException;


public class F511 implements Filter
{
	public void doFilter(ServletRequest request,ServletResponse response,FilterChain chain)throws ServletException,IOException
	{
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		chain.doFilter(request,response);
	}

	public void init(FilterConfig fConfig) throws ServletException {
		
	}

	public void destroy() {
		
	}
}

/*
javac 
	-cp C:\java\LJ10_48_20180712\apache-tomcat-8.0.8-windows-x64\apache-tomcat-8.0.8\lib\servlet-api.jar
	-d WEB-INF\classes
	F511.java
*/