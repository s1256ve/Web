package code.util.ShapeInerarchy.applet;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.text.DecimalFormat;
import java.util.Random;

import javax.swing.JApplet;
import javax.swing.JOptionPane;

import code.util.ShapeInerarchy.ShapeInerarchy.*;



import code.util.ShapeInerarchy.validation.validation;

public class ThreeDShape_Applet extends JApplet
{
	int x,y,r,l,w,h,choice,Cylinder=0,Cube=1,Cuboid=2,shapeIndex=-1;
	//double ;
	String Qes,Key,output="";
	Shape[] shapes=new Shape[3];
	validation validate=new validation();
	
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
				Qes="Your Shape's height";
				Key="height";
				h=validate.validateIntMin(Qes, Key);
				
				Qes="1.show Cylinder\n2.show Cube\n3.show Cuboid\n4.End";
				Key="your selection";
				choice=validate.validateIntMinMax(Qes,Key,1,4)-1;
				
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
				repaint();
				
				output="\n"+shapes[shapeIndex].toString()+"\tAria:"+twoDigits.format(shapes[shapeIndex].getArea())+"\tVolume:"+twoDigits.format(shapes[shapeIndex].getVolume())+"\n";
				JOptionPane.showMessageDialog(null, output);
				choice=validate.validateIntMinMax(Qes,Key,1,4)-1;
			}
			
			
			
	   }
	   public void paint(Graphics g) {
			Random random = new Random();
			
			g.setColor(new Color(random.nextFloat(), random.nextFloat(), random.nextFloat()));
			

			if(shapeIndex==Cylinder)
				g.drawOval((int)(x - r), (int)(y - r), (int)w, (int)w);
			else if(shapeIndex==Cube)
				g.draw3DRect(x, y, w, w,false);
			else if(shapeIndex==Cuboid)
				g.draw3DRect(x, y, l, w,false);
			g.drawString(output, (int)(x + r), (int)(y + r));
			
		}

	

}
