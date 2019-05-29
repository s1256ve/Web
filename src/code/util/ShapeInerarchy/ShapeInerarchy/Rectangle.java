package code.util.ShapeInerarchy.ShapeInerarchy;

public class Rectangle extends Square
{
	double width;
	public Rectangle()
	{
		
	}
	
	public Rectangle(int x,int y,double l,double w)
	{
		super(x,y,l);
		
		setWidth(w);
	}
	
	
	
	public void setWidth(double w)
	{
		width=w;
	}
	
	public double getWidth()
	{
		return width;
	}
	
	public String getName()
	{
		return "Rectangle";
	}
	
	public double getArea()
	{
		return width*length;
	}
	
	public double getVolume()
	{
		return 0;
	}

}
