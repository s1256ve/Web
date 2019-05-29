package code.applet;

import java.applet.Applet;
import java.awt.FlowLayout;
import java.awt.TextArea;



public class testApplet extends Applet{

	/**
	 * @param args
	 */
	TextArea textBox;
	
	public void init(){
	    setLayout(new FlowLayout());
	    textBox = new TextArea(5,40);
	    add(textBox);
	}
	
	public void appendText(String text){
		textBox.append(text);
	}	    

}
