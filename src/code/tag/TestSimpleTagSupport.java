package code.tag;

import javax.servlet.jsp.JspContext;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class TestSimpleTagSupport extends SimpleTagSupport{

	private boolean test;

    public void doTag() throws JspException {
    	JspContext content=getJspContext();
    	JspWriter out=content.getOut();
    	if (test) {
            try {
                getJspBody().invoke(null);
            } catch (java.io.IOException ex) {
                throw new JspException("IfTag °õ¦æ¿ù»~", ex);
            }
        }
    }

    public void setTest(boolean test) {
        this.test = test;
    }
	
}
