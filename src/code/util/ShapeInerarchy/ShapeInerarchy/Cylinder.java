package code.util.ShapeInerarchy.ShapeInerarchy;

public class Cylinder extends Circle
{
	double height;
	public Cylinder()
	{
		
	}
	
	public Cylinder(int x,int y,double r,double h)
	{
		super(x,y,r);
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
		return "Cylinder";
	}
	
	public double getArea()
	{
		return (super.getArea()*2)+(radius*2*Math.PI*height);
	}
	
	public double getVolume()
	{
		return super.getArea()*height;
	}

}
