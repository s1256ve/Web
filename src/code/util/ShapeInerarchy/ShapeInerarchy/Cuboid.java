package code.util.ShapeInerarchy.ShapeInerarchy;

public class Cuboid extends Rectangle
{
	double height;
	
	public Cuboid()
	{
		
	}
	public Cuboid(int x,int y,double l,double w,double h)
	{
		super(x,y,l,w);
		
	}
	
	public void setHeight(double h)
	{
		height=h;
	}
	
	public double getHeight()
	{
		return height;
	}
	
	public String getName()
	{
		return "Cuboid";
	}
	
	public double getArea()
	{
		return (super.getArea()*2)+((width*height)*2)+((length*height)*2);
	}
	
	public double getVolume()
	{
		return super.getArea()*height;
	}

}
