package code.util.ShapeInerarchy.ShapeInerarchy;

import java.text.DecimalFormat;

import javax.swing.JOptionPane;

import code.util.ShapeInerarchy.validation.validation;;

public class TwoDShape extends Point
{
	public int x,y,choice,Circle=0,Square=1,Rectangle=2;
	String Qes,Key,output="";
	public double r,l,w;
	validation validate=new validation();
	public Shape[] shapes=new Shape[3];
	DecimalFormat twoDigits = new DecimalFormat( "0.00" );
	
	public TwoDShape()
	{
		
	}
	
	public void selectShape()
	{
		int shapeIndex=-1;
		
		System.out.print("Start asking x\n");
		Qes="Your Shape's x?";
		Key="x";
		x=validate.validateIntMin(Qes, Key);
		System.out.print("Start asking y\n");
		Qes="Your Shape's y?";
		Key="y";
		y=validate.validateIntMin(Qes, Key);
		System.out.print("Start asking r\n");
		Qes="Your Shape's radius?";
		Key="radius";
		r=validate.validateDoubleMin(Qes, Key);
		System.out.print("Start asking l\n");
		Qes="Your Shape's length?";
		Key="length";
		l=validate.validateDoubleMin(Qes, Key);
		System.out.print("Start asking w\n");
		Qes="Your Shape's width?";
		Key="width";
		w=validate.validateDoubleMin(Qes, Key);
		
		
		while(choice!=3)
		{
			Qes="1.show Circle\n2.show Square\n3.show Rectangle\n4.End";
			Key="your selection";
			choice=validate.validateIntMinMax(Qes,Key,1,4)-1;
			
			if(choice==Circle)
			{
				Circle circle=new Circle(x,y,r);
				shapes[0]=circle;
				shapeIndex=Circle;
			}
			else if(choice==Square)
			{
				Square square=new Square(x,y,l);
				shapes[1]=square;
				shapeIndex=Square;
			}
			else if(choice==Rectangle)
			{
				Rectangle rectangle=new Rectangle(x,y,l,w);
				shapes[2]=rectangle;
				shapeIndex=Rectangle;
			}
			else
			{
				choice=3;
			}
			output="\n"+shapes[shapeIndex].toString()+"\tAria:"+twoDigits.format(shapes[shapeIndex].getArea())+"\tVolume:"+twoDigits.format(shapes[shapeIndex].getVolume())+"\n";
			JOptionPane.showMessageDialog(null, output);
			
		}
		
		
	}

}
