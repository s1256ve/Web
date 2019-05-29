package code.servlet;


import java.io.PrintWriter;
import javax.servlet.AsyncContext;

public class A623 implements Runnable
{
	private AsyncContext ctx;

	public A623(AsyncContext ctx)
	{
		this.ctx=ctx;
	}

	public void run()
	{
		try
		{
			Thread.sleep(5000);
			PrintWriter out=ctx.getResponse().getWriter();
			out.println("Sorry waiting long");

			
		}catch(Exception e){} 
	}

}