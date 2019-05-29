package code.util.ShapeInerarchy.ShapeInerarchy;

import java.text.DecimalFormat;

import javax.swing.JOptionPane;

import code.util.ShapeInerarchy.validation.validation;

public class ThreeDShape extends Point
{
	int x,y,choice,Cylinder=0,Cube=1,Cuboid=2,shapeIndex=-1;
	String Qes,Key,output="";
	double r,h,l,w;
	validation validate=new validation();
	public Shape[] shapes=new Shape[3];
	DecimalFormat twoDigits = new DecimalFormat( "0.00" );
	
	public ThreeDShape()
	{
		
	}
	
	public void selectShape()
	{
		
		
		Qes="Your Shape's x?";
		Key="x";
		x=validate.validateIntMin(Qes, Key);
		Qes="Your Shape's y?";
		Key="y";
		y=validate.validateIntMin(Qes, Key);
		Qes="Your Shape's radius?";
		Key="radius";
		r=validate.validateDoubleMin(Qes, Key);
		Qes="Your Shape's length?";
		Key="length";
		l=validate.validateDoubleMin(Qes, Key);
		Qes="Your Shape's width?";
		Key="width";
		w=validate.validateDoubleMin(Qes, Key);
		Qes="Your Shape's height?";
		Key="height";
		h=validate.validateDoubleMin(Qes, Key);
		
	
		while(choice!=3)
		{
			Qes="1.show Cylinder\n2.show Cube\n3.show Cuboid\n4.End";
			Key="your selection";
			choice=validate.validateIntMinMax(Qes, Key, 1, 4)-1;
			if(choice==Cylinder)
			{
				Cylinder cylinder=new Cylinder(x,y,r,h);
				shapes[0]=cylinder;
				shapeIndex=Cylinder;
			}
			else if(choice==Cube)
			{
				Cube cube=new Cube(x,y,l,h);
				shapes[1]=cube;
				shapeIndex=Cube;
			}
			else if(choice==Cuboid)
			{
				Cuboid cuboid=new Cuboid(x,y,l,w,h);
				shapes[2]=cuboid;
				shapeIndex=Cuboid;
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
