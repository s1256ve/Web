package code.listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 * Application Lifecycle Listener implementation class L311
 *
 */
@WebListener
public class L311 implements ServletContextListener {
	private long start,end;
    /**
     * Default constructor. 
     */
    public L311() {
        // TODO Auto-generated constructor stub
    }

	/**
     * @see ServletContextListener#contextInitialized(ServletContextEvent)
     */
    public void contextInitialized(ServletContextEvent arg0)  { 
         // TODO Auto-generated method stub
    	System.out.println("----------------");
    	start=System.currentTimeMillis();
    }

	/**
     * @see ServletContextListener#contextDestroyed(ServletContextEvent)
     */
    public void contextDestroyed(ServletContextEvent arg0)  { 
         // TODO Auto-generated method stub
    	end=System.currentTimeMillis();
    	System.out.println("Time: "+(end-start)+" ms");
    	System.out.println("----------------");
    }
	
}
