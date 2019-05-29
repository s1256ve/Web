package code.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class testBtyeCode
 */
@WebServlet("/testBtyeCode")
public class testBtyeCode extends HttpServlet {
	private static final long serialVersionUID = 1L;
	 private final static String[] hexDigits = {"0", "1", "2", "3", "4", "5",
	        "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"};
    /**
     * @see HttpServlet#HttpServlet()
     */
    public testBtyeCode() {
        super();
        // TODO Auto-generated constructor stub
    }
   

private static String byteToHexString(byte b) {
    int n = b;
    if (n < 0)
        n = 256 + n;
    int d1 = n / 16;
    int d2 = n % 16;
    return hexDigits[d1] + hexDigits[d2];
}

public static String byteArrayToHexString(byte[] b){
    StringBuilder resultSb = new StringBuilder();
    for (int i = 0; i < b.length;i++){
        resultSb.append(byteToHexString(b[i]));
    }
    return resultSb.toString();
}


	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out=response.getWriter();
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html");
		out.println("<h1>Test Btye Code</h1>");
		out.println("int(125)->�i��(string,bit) method:Integer.toXXXString(int)<br>");
		out.println("2�i��:"+Integer.toBinaryString(125)+"\t8�i��:"+Integer.toOctalString(125)+"\t16�i��:"+Integer.toHexString(125)+"<br>");
		out.println("*******************************************************************<br>");
		out.println("Integer.parseInt(String,int)&Integer.valueOf(String,int).toString()->String�ݬ��Ӷi���,int�ݬ��������i��,�_�h�|���~<br>");
		out.println("Any parser*******************************************************************<br>");
		String[] numS={"2","4","8","16"};
		String str="";
		for(String i:numS){
			str+=doAll("125",i);
		}
		out.println(str);
	             
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}
	public static String doAll(String n,String numS){
		String  result  =  "";//  �x�s�ΩҦ��p�⵲�G���r��
		result+=("10�i�������i��<br>//-----------------------");

        //out.println("��J�i��ȡG");
        int  numSys  =  Integer.valueOf(numS);//  ����(2�B8�B16)

        //out.println("��J�ഫ���Ʀr�G");//  �Q���ơ]���ഫ���Ʀr�^
        int  num  =  Integer.valueOf(n);

        int  yu  =  9;//  �l��
        String  shang  =  "��";//  ��
        String  sum  =  "";//  �̫���ܪ����G
        
        int  len  =  String.valueOf(num).length();
        result  +=  "<br>10�i��G"  +  num +  "    ��    "  +  
       		 numSys +  "�i��"  +  "<br><br>";

        //  �Q����  ������0
        while  (num  !=  0)  {
              yu  =  num  /  numSys;//  �l��=�Q����  /  ����
              shang  =  String.valueOf(yu  -  (yu  -  (num  %  numSys)));//  �l��
              result  +=  String.format("%1$"  +  ""  +  len  +  "d",  num) 
                          + " ��  " +  numSys +  "    =  "
                           +  String.format("%1$"  +  ""  +  len  +  "d",  yu)  +  "  ----  "
                           +  shang  +  "<br>";
              num  =  yu;//  ���U���j�骺  �Q����=  �ثe��  �l��
              sum  =  toAny(shang)  +  sum;//  ���ס]�`�N�i�ӡj�b�e���^
        }

        result  +=  "<br>"  +  "���סG  "  +  sum;
        return result;//  ��ܭp�⵲�G
	}
	public static String toAny(String h){
		String[]  s  =  {  "0",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "A",
                "B",  "C",  "D",  "E",  "F",  "G",  "H",  "I",  "J",  "K",  "L",  "M",
                "N",  "O",  "P",  "Q",  "R",  "S",  "T",  "U",  "V",  "W",  "X",  
                "Y",  "Z"  };
		String[]  z  =  {  "0",  "1",  "2",  "3",  "4",  "5",  "6",  "7",  "8",  "9",  "10",
                "11",  "12",  "13",  "14",  "15",  "16",  "17",  "18",  "19",  "20",
                "21",  "22",  "23",  "24",  "25",  "26",  "27",  "28",  "29",  "30",
                "31",  "32",  "33",  "34",  "35"  };

		for  (int  i  =  0;  i  <=  35;  i++)  {
			if  (h.equals(z[i]))  {
                return  s[i];
			}	
		}

		return  "("  +  h  +  ")";//  �p�G�����O�A�h�L�X��Ӫ��Ʀr

	}
	
	public static  String byteToBit( byte  b) {   
        return ""   
                + ( byte ) ((b >>  7 ) &  0x1 ) + ( byte ) ((b >>  6 ) &  0x1 )  
                + ( byte ) ((b >>  5 ) &  0x1 ) + ( byte ) ((b >>  4 ) &  0x1 )  
                + ( byte ) ((b >>  3 ) &  0x1 ) + ( byte ) ((b >>  2 ) &  0x1 )  
                + ( byte ) ((b >>  1 ) &  0x1 ) + ( byte ) ((b >>  0 ) &  0x1 );  
    } 
	public static byte [] getBooleanArray( byte  b) {    
        byte [] array =  new byte [ 8 ];   
        for  ( int  i =  7 ; i >=  0 ; i--) {  
            array[i] = ( byte )(b &  1 );  
            b = ( byte ) (b >>  1 );  
        }  
        return  array;  
    }  
	public static byte  decodeBinaryString(String byteStr) {    
	    int  re, len;  
	    if  ( null  == byteStr) {  
	        return 0 ;   
	    }  
	    len = byteStr.length();  
	    if  (len !=  4  && len !=  8 ) {  
	        return 0 ;   
	    }  
	    if  (len ==  8 ) { // 8 bit�B�z  
	        if  (byteStr.charAt( 0 ) ==  '0' ) { //����  
	            re = Integer.parseInt(byteStr,  2 );  
	        }  else  { //�t��  
	            re = Integer.parseInt(byteStr,  2 ) -  256 ;  
	        }  
	    }  else  { // 4 bit�B�z  
	        re = Integer.parseInt(byteStr,  2 );  
	    }  
	    return  ( byte ) re;  
	} 

}
