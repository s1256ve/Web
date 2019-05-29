package code.util.ShapeInerarchy.ShapeInerarchy;

public class Point extends Object implements Shape
{
	//String name;
	int X,Y;
	//double length,width,heigth;
	
	public Point()
	{
		super();
	}
	
	public Point(int x,int y)
	{
		//this.name=getName();
		setX(x);
		setY(y);
		
		/*this.length=l;
		this.width=w;
		this.heigth=h;*/
	}
	
	public void setX(int x)
	{
		X=x;
	}
	
	public int getX()
	{
		return X;
	}
	
	public void setY(int y)
	{
		Y=y;
	}
	
	public int getY()
	{
		return Y;
	}
	
	public String getName()
	{
		return "Point";
	}
	
	public double getArea()
	{
		return 0;
	}
	
	public double getVolume()
	{
		return 0;
	}
	
	@Override
	public String toString()
	{
		return String.format("Name:%s\tX:%d\tY:%d\n", getName(),getX(),getY());
		// return "[" + getX() + ", " + getY() + "]";
	}
	
	

}
