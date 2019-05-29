package code.tag;

import javax.servlet.jsp.JspContext;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import java.text.DecimalFormat;

public class Tld622 extends SimpleTagSupport
{

	private String number,format;

	public void setNumber(String number)
	{
		this.number=number;
	}

	public void setFormat(String format)
	{
		this.format=format;
	}

	public String getNumber()
	{
		return this.number;
	}

	public String getFormat()
	{
		return this.format;
	}

	public void doTag()
	{
		try{
			double a=Double.parseDouble(number);
			DecimalFormat f=new DecimalFormat(format);
			JspContext content=getJspContext();
			JspWriter out=content.getOut();
			String nf=f.format(a);	
		
			out.println(number+"==>"+nf);
		}catch(Exception e){}
	}
}