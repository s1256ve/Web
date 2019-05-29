package code.tag;

import java.io.IOException;

import javax.servlet.jsp.JspContext;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class TestSimpleTagSupport2 extends SimpleTagSupport{

	private boolean isNum;
	public boolean isNum() {
		return isNum;
	}

	public void setisNum(boolean isNum) {
		this.isNum = isNum;
	}

	private double x,y;

    public double getX() {
		return x;
	}

	public void setX(double x) {
		this.x = x;
	}

	public double getY() {
		return y;
	}

	public void setY(double y) {
		this.y = y;
	}

	public void doTag(){
    	JspContext content=getJspContext();
    	JspWriter out=content.getOut();
    	
            try {
            	if (isNum) {
            		out.println(x+y);
            	}else {
            		StringBuilder sb=new StringBuilder();
            		sb.append(x);
            		sb.append(y);
            		out.println(sb.toString());
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        
    }

   
	
}
