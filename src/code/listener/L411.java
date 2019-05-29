package code.listener;

import javax.servlet.ServletContextAttributeEvent;
import javax.servlet.ServletContextAttributeListener;
import javax.servlet.annotation.WebListener;

/**
 * Application Lifecycle Listener implementation class L411
 *
 */
@WebListener
public class L411 implements ServletContextAttributeListener {

    /**
     * Default constructor. 
     */
    public L411() {
        // TODO Auto-generated constructor stub
    }

	/**
     * @see ServletContextAttributeListener#attributeAdded(ServletContextAttributeEvent)
     */
    public void attributeAdded(ServletContextAttributeEvent event)  { 
         // TODO Auto-generated method stub
    	System.out.println("-------------------------");
    	System.out.print("A: "+event.getValue());
    }

	/**
     * @see ServletContextAttributeListener#attributeReplaced(ServletContextAttributeEvent)
     */
    public void attributeReplaced(ServletContextAttributeEvent event)  { 
         // TODO Auto-generated method stub
    	System.out.print("M: "+event.getValue());
    }

	/**
     * @see ServletContextAttributeListener#attributeRemoved(ServletContextAttributeEvent)
     */
    public void attributeRemoved(ServletContextAttributeEvent event)  { 
         // TODO Auto-generated method stub
    	System.out.print("P: "+event.getValue());
    	System.out.println("\n-------------------------");
    
    }
	
}
