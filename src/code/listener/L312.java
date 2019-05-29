package code.listener;

import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;
import javax.servlet.annotation.WebListener;

/**
 * Application Lifecycle Listener implementation class L312
 *
 */
@WebListener
public class L312 implements ServletRequestListener {
	private long start,end;
    /**
     * Default constructor. 
     */
    public L312() {
        // TODO Auto-generated constructor stub
    }

	/**
     * @see ServletRequestListener#requestDestroyed(ServletRequestEvent)
     */
    public void requestDestroyed(ServletRequestEvent arg0)  { 
         // TODO Auto-generated method stub
    	end=System.currentTimeMillis();
    	System.out.println("Time: "+(end-start)+" ms");
    	System.out.println("----------------");
    }

	/**
     * @see ServletRequestListener#requestInitialized(ServletRequestEvent)
     */
    public void requestInitialized(ServletRequestEvent arg0)  { 
         // TODO Auto-generated method stub
    	System.out.println("----------------");
    	start=System.currentTimeMillis();
    }
	
}
