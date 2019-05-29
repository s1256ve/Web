package code.listener;

import javax.servlet.http.HttpSessionActivationListener;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.ServletContext;


public class L723 implements HttpSessionActivationListener
{
	private ServletContext context;

	public L723(ServletContext context)
	{
		this.context=context;
	}

	public void sessionDidActivate(HttpSessionEvent event)
	{
		System.out.println("----------------");
		System.out.println("sessionDidActivate(HttpSessionEvent");

	}

	public void sessionWillPassivate(HttpSessionEvent event)
	{
		
		System.out.println("sessionWilPassivate(HttpSessionEvent");
		System.out.println("----------------");
	}

}