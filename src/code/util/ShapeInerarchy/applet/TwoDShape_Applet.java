package code.util.ShapeInerarchy.applet;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.text.DecimalFormat;
import java.util.Random;

import javax.swing.JApplet;
import javax.swing.JOptionPane;

import code.util.ShapeInerarchy.ShapeInerarchy.Circle;
import code.util.ShapeInerarchy.ShapeInerarchy.Rectangle;
import code.util.ShapeInerarchy.ShapeInerarchy.Shape;
import code.util.ShapeInerarchy.ShapeInerarchy.Square;
import code.util.ShapeInerarchy.validation.validation;

public class TwoDShape_Applet  extends JApplet
{
	int x,y,r,l,w,choice=-1,Circle=0,Square=1,Rectangle=2,shapeIndex=-1;
	//double ;
	String Qes,Key,output="";
	Shape[] shapes=new Shape[3];
	validation validate=new validation();
	Graphics g=null;
	
	public void init()
	   {
		addMouseListener(new HandleMouse());
		setBackground(Color.yellow);

	   } 
	   
	   class HandleMouse extends MouseAdapter
	   {
			public void mouseClicked(MouseEvent e) {
			    Graphics g = getGraphics();
			    getData();		  
			}
	   }
	   public void getData()
	   {
		   DecimalFormat twoDigits = new DecimalFormat( "0.00" );
		   
		   
			while(choice!=3)
			{
				
				//System.out.print("Start asking x\n");
				Qes="Your Shape's x?";
				Key="x";
				x=validate.validateIntMin(Qes, Key);
				//System.out.print("Start asking y\n");
				Qes="Your Shape's y?";
				Key="y";
				y=validate.validateIntMin(Qes, Key);
				//System.out.print("Start asking r\n");
				Qes="Your Shape's radius?";
				Key="radius";
				r=validate.validateIntMin(Qes, Key);
				//System.out.print("Start asking l\n");
				Qes="Your Shape's length?";
				Key="length";
				l=validate.validateIntMin(Qes, Key);
				//System.out.print("Start asking w\n");
				Qes="Your Shape's width?";
				Key="width";
				w=validate.validateIntMin(Qes, Key);
				
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
				repaint();
				
				output="\n"+shapes[shapeIndex].toString()+"\tAria:"+twoDigits.format(shapes[shapeIndex].getArea())+"\tVolume:"+twoDigits.format(shapes[shapeIndex].getVolume())+"\n";
				JOptionPane.showMessageDialog(null, output);
				choice=validate.validateIntMinMax(Qes,Key,1,4)-1;
			}
			
			
			
	   }
	   
	   public void paint(Graphics g) {
			Random random = new Random();
			
			g.setColor(new Color(random.nextFloat(), random.nextFloat(), random.nextFloat()));
			

			if(shapeIndex==Circle)
				g.drawOval((int)(x - r), (int)(y - r), (int)w, (int)w);
			else if(shapeIndex==Square)
				g.drawRect(x, y, w, w);
			else if(shapeIndex==Rectangle)
				g.drawRect(x, y, l, w);
			g.drawString(output, (int)(x + r), (int)(y + r));

		}

}
