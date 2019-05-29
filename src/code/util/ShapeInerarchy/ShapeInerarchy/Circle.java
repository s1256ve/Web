package code.util.ShapeInerarchy.ShapeInerarchy;

public class Circle extends Point
{
	double radius;
	public Circle()
	{
		
	}
	
	public Circle(int x,int y,double r)
	{
		super(x,y);
		setRadius(r);
	}
	
	public void setRadius(double r)
	{
		radius=r;
	}
	
	public double getRadius()
	{
		return radius;
	}
	
	
	
	public String getName()
	{
		return "Circle";
	}
	
	public double getArea()
	{
		return radius*radius*Math.PI;
	}
	
	public double getVolume()
	{
		return 0;
	}

}
