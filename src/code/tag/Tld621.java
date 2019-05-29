package code.tag;

import javax.servlet.jsp.JspContext;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

public class Tld621 extends SimpleTagSupport
{

	private double x,y;

	public void setX(double x)
	{
		this.x=x;
	}

	public void setY(double y)
	{
		this.y=y;
	}

	public double getX()
	{
		return this.x;
	}

	public double getY()
	{
		return this.y;
	}

	public void doTag()
	{
		try{
			JspContext content=getJspContext();
			JspWriter out=content.getOut();
			double z=x+y;
		
			out.println(x+" + "+y+" = "+z);
		}catch(Exception e){}
	}
}