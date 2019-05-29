package code.util.ShapeInerarchy.ShapeInerarchy;

public class Cube extends Square 
{
	double height;
	public Cube()
	{
		
	}
	
	public Cube(int x,int y,double l,double h)
	{
		super(x,y,l);
		setHeight(h);
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
		return "Cube";
	}
	
	public double getArea()
	{
		return super.getArea()*6;
	}
	
	public double getVolume()
	{
		return super.getArea()*height;
	}

}
