package code.util.ShapeInerarchy.validation;


import javax.swing.JOptionPane;

public class validation
{
	String input="";
	public validation()
	{
		
	}
	
	public int validateIntMin(String qes,String key)
	{
		boolean check=true;
		int intValue=0;
		
		while(check)
		{
			input=JOptionPane.showInputDialog(qes);
			try
			{
				intValue=Integer.parseInt(input);
				if(intValue>0)
				{
					check=false;
				}
				else
				{
					JOptionPane.showInputDialog("Reinput"+key);
				}
			}
			catch(Exception ex)
			{
				System.out.println( ex.getMessage() );
			}
		}
		return intValue;
	}
	
	public double validateDoubleMin(String qes,String key)
	{
		boolean check=true;
		double doubleValue=0;
		
		while(check)
		{
			input=JOptionPane.showInputDialog(qes);
			try
			{
				doubleValue=Double.parseDouble(input);
				if(doubleValue>0)
				{
					check=false;
				}
				else
				{
					JOptionPane.showInputDialog("Reinput"+key);
				}
			}
			catch(Exception ex)
			{
				System.out.println( ex.getMessage() );
			}
		}
		return doubleValue;
	}
	
	public int validateIntMinMax(String qes,String key,int min,int max)
	{
		boolean check=true;
		int intValue=0;
		
		while(check)
		{
			input=JOptionPane.showInputDialog(qes);
			try
			{
				intValue=Integer.parseInt(input);
				if(intValue>=min&&intValue<=max)
				{
					check=false;
				}
				else
				{
					JOptionPane.showInputDialog("Reinput"+key);
				}
			}
			catch(Exception ex)
			{
				System.out.println( ex.getMessage() );
			}
		}
		return intValue;
	}
	
	public String validateStringValue(String qes,String key)
	{
		boolean check=true;
		String stringInput="";
		
		
		while(check)
		{
			input=JOptionPane.showInputDialog(qes);
			try
			{
				stringInput=input;
				if(stringInput!=null)
				{
					check=false;
				}
				else
				{
					JOptionPane.showInputDialog("Reinput"+key);
				}
			}
			catch(Exception ex)
			{
				System.out.println( ex.getMessage() );
			}
		}
		return stringInput;
	}
	
	

}
