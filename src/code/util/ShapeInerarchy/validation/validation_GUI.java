package code.util.ShapeInerarchy.validation;

import java.util.Scanner;

import javax.swing.JApplet;
import javax.swing.JFrame;
import javax.swing.JOptionPane;

public class validation_GUI extends JFrame
{
	String inputStr="",reminder="";
	Scanner input;
	public double doubleValue=0;
	public int intValue=0;
	public boolean write=false,read=false;
	String qes;
	
	public validation_GUI()
	{
		input=new Scanner(System.in);
	}
	
	public validation_GUI(boolean writeOn,boolean readOn)
	{
		write=writeOn;
		read=readOn;
		
	}
	
	public int validateIntMin(String key)
	{
		boolean check=false;
		
		qes="Please enter:"+key;
		reminder="Reinput/Check==>"+key+">0";
		
		while(check)
		{
			inputStr=JOptionPane.showInputDialog(qes);
			try
			{
				intValue=Integer.parseInt(inputStr);
				if(intValue>0)
				{
					check=true;
				}
				else
				{
					JOptionPane.showMessageDialog(null,"Reinput"+key,reminder,JOptionPane.INFORMATION_MESSAGE);
				}
			}
			catch(Exception ex)
			{
				JOptionPane.showMessageDialog(null,"Reinput"+key,reminder,JOptionPane.INFORMATION_MESSAGE);
			}
		}
		return intValue;
	}
	
	public boolean validateIntMinMaxCheck(String key,String intData,int min,int max)throws NumberFormatException
	{
		boolean check=false;
		
		qes="Please enter:"+key;
		reminder="Reinput/Check==>"+key+" >= "+min+" and <= "+max;
		
		while(check)
		{
			intValue=Integer.parseInt(intData);
			try
			{
				
				if(intValue>=min&&intValue<=max)
				{
					check=true;
				}
				else
				{
					JOptionPane.showMessageDialog(null,"Error inputing int value",reminder,JOptionPane.INFORMATION_MESSAGE);
				}
			}
			catch(Exception ex)
			{
				JOptionPane.showMessageDialog(this,ex,"Reinput"+key,JOptionPane.ERROR_MESSAGE);
			}
		}
		return check;
	}
	
	public int validateIntMinMax(String key,int min,int max)
	{
		boolean check=false;
		
		while(check==false)
		{
			inputStr=JOptionPane.showInputDialog("Please enter"+key);
			check=validateDoubleMinMaxCheck(key,inputStr,min,max);
		}
		return intValue;
	}
	
	public double validateDoubleMin(String key)
	{
		boolean check=false;
		
		qes="Please enter:"+key;
		reminder="Reinput/Check==>"+key+">0";
		
		while(check)
		{
			inputStr=JOptionPane.showInputDialog(qes);
			try
			{
				doubleValue=Double.parseDouble(inputStr);
				if(doubleValue>0)
				{
					check=true;
				}
				else
				{
					JOptionPane.showMessageDialog(null,"Reinput"+key,reminder,JOptionPane.INFORMATION_MESSAGE);
				}
			}
			catch(Exception ex)
			{
				JOptionPane.showMessageDialog(this,ex,"Reinput"+key,JOptionPane.ERROR_MESSAGE);
			}
		}
		return doubleValue;
	}
	
	public boolean validateDoubleMinMaxCheck(String key,String doubleData,double min,double max)throws NumberFormatException
	{
		boolean check=false;
		
		qes="Please enter:"+key;
		reminder="Reinput/Check==>"+key+" >= "+min+" and <= "+max;
		
		while(check)
		{
			doubleValue=Double.parseDouble(doubleData);
			try
			{
				
				if(doubleValue>=min&&doubleValue<=max)
				{
					check=true;
				}
				else
				{
					JOptionPane.showMessageDialog(null,"Error inputing double value",reminder,JOptionPane.INFORMATION_MESSAGE);
				}
			}
			catch(Exception ex)
			{
				JOptionPane.showMessageDialog(this,ex,"Error inputing double value",JOptionPane.INFORMATION_MESSAGE);
			}
		}
		return check;
	}
	
	public double validateDoubleMinMax(String key,double min,double max)
	{
		boolean check=false;
		
		while(check==false)
		{
			inputStr=JOptionPane.showInputDialog("Please enter"+key);
			check=validateDoubleMinMaxCheck(key,inputStr,min,max);
		}
		return doubleValue;
	}
	
	public double validateDoubleRate(String key)
	{
		String inputStr="";
		while(true)
		{
			try {
				inputStr=JOptionPane.showInputDialog(key);
				
				doubleValue=Double.parseDouble(inputStr);
				
				if(doubleValue>0&&doubleValue<1)
				{
					break;
				}
				else
				{
					JOptionPane.showMessageDialog(null,"Error Input (must be in 0 - 1)");
				}
			} catch (Exception e) {
				// TODO: handle exception
				JOptionPane.showMessageDialog(null, "Error Input");
			}
		}
		return doubleValue;
	}
	
	public String validateStringValue(String key)
	{
		boolean check=false;
		
		qes=key+"?";
		
		while(check)
		{
			inputStr=JOptionPane.showInputDialog("Please enter"+key);
			try
			{
				
				if(inputStr!=null)
				{
					check=true;
				}
				else
				{
					JOptionPane.showInputDialog(null,"Reinput"+key);
				}
			}
			catch(Exception ex)
			{
				JOptionPane.showMessageDialog(this,ex,"Reinput"+key,JOptionPane.ERROR_MESSAGE);
			}
		}
		return inputStr;
	}
	
	public int compareFloat(float a,float b)
	{
		if(a<b)
		{
			return -1;
		}
		else if(a>b)
		{
			return +1;
		}
		else
		{
			return 0;
		}
	}
	
	public int compareDouble(double a,double b)
	{
		if(a<b)
		{
			return -1;
		}
		else if(a>b)
		{
			return +1;
		}
		else
		{
			return 0;
		}
	}
	

}
