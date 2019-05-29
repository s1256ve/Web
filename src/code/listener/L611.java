package code.listener;

import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;
import javax.servlet.ServletContext;

public class L611 implements HttpSessionBindingListener
{
	private ServletContext context;
	public L611(ServletContext context)
	{
		this.context=context;
	}
	public void valueBound(HttpSessionBindingEvent event){
		System.out.println("==================");
		System.out.println("valueBound(HttpSessionBindingEvent event):"+event.getName());
	}
	public void valueUnbound(HttpSessionBindingEvent event){
	
		System.out.println("valueBound(HttpSessionBindingEvent event):"+event.getName());
		System.out.println("==================");
	}
}