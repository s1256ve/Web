package code.util.ShapeInerarchy.ShapeInerarchy;

public class Square extends Point
{
	double length;
	
	public Square()
	{
		
	}
	
	public Square(int x,int y,double l)
	{
		super(x,y);
		setLength(l);
	}
	
	public void setLength(double l)
	{
		length=l;
	}
	
	public double getLength()
	{
		return length;
	}
	
	public String getName()
	{
		return "Square";
	}
	
	public double getArea()
	{
		return length*length;
	}
	
	public double getVolume()
	{
		return 0;
	}

}
