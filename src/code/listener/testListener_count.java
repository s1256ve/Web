package code.listener;

import javax.servlet.annotation.WebListener;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.eclipse.jdt.internal.compiler.ast.ThisReference;

/**
 * Application Lifecycle Listener implementation class testListener_count
 *
 */
@WebListener
public class testListener_count implements HttpSessionListener {
	private int count=0,online_person=0;
	
    /**
     * Default constructor. 
     */
    public testListener_count() {
        // TODO Auto-generated constructor stub
    }

	/**
     * @see HttpSessionListener#sessionCreated(HttpSessionEvent)
     */
    public void sessionCreated(HttpSessionEvent arg0) {
        // TODO Auto-generated method stub
    	
    	online_person++;
    	count++;
    	System.out.println("=============Online people:"+online_person+"\t----------Count of people:"+count);
    }

	/**
     * @see HttpSessionListener#sessionDestroyed(HttpSessionEvent)
     */
    public void sessionDestroyed(HttpSessionEvent arg0) {
        // TODO Auto-generated method stub
    	online_person--;
    	System.out.println("-----------Online people:"+online_person+"\t----------Count of people:"+count);
        
    }
	
}
