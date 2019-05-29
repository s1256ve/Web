package code.util.ShapeInerarchy.application;

import java.awt.Point;

import javax.swing.JApplet;
import javax.swing.JOptionPane;



import code.util.ShapeInerarchy.ShapeInerarchy.*;
import code.util.ShapeInerarchy.validation.validation;

public class processShape extends JApplet
{
	String Qes,Key;
	int x,y,TwoDShape=0,ThreeDShape=1,end=2;
	double r,h,l,w;
	validation validate=new validation();
	Shape[] shapes;
	public processShape()
	{
		
	}

	public void process()
	{
		Qes="1.show 2D Shapes\n2.show 3D Shapes\n3.End";
		Key="your selection";
		
		int choice=validate.validateIntMinMax(Qes, Key, 1, 3)-1;
		while(choice!=end)
		{
			if(choice==TwoDShape)
			{
				
				TwoDShape twoDShape=new TwoDShape();
				System.out.print("Start selecting\n");
				twoDShape.selectShape();
				shapes=twoDShape.shapes;
				for(Shape shape :shapes)
				{
					System.out.printf("%s", shape.toString());
				}
			}
			else if (choice==ThreeDShape) 
			{
				ThreeDShape threeDShape=new ThreeDShape();
				System.out.print("Start selecting\n");
				threeDShape.selectShape();
				shapes=threeDShape.shapes;
				
				for(Shape shape :shapes)
				{
					System.out.printf("%s", shape.toString());
				}
			}
			else
			{
				choice=end;
			}
			choice=validate.validateIntMinMax(Qes, Key, 1, 3)-1;
		}
		
		
		
		
	}
		


}
