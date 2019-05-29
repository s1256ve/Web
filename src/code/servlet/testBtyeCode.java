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
		out.println("int(125)->進制(string,bit) method:Integer.toXXXString(int)<br>");
		out.println("2進制:"+Integer.toBinaryString(125)+"\t8進制:"+Integer.toOctalString(125)+"\t16進制:"+Integer.toHexString(125)+"<br>");
		out.println("*******************************************************************<br>");
		out.println("Integer.parseInt(String,int)&Integer.valueOf(String,int).toString()->String需為該進制之值,int需為對應之進制,否則會錯誤<br>");
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
		String  result  =  "";//  儲存用所有計算結果的字串
		result+=("10進位→任何進位<br>//-----------------------");

        //out.println("輸入進位值：");
        int  numSys  =  Integer.valueOf(numS);//  除數(2、8、16)

        //out.println("輸入轉換的數字：");//  被除數（欲轉換的數字）
        int  num  =  Integer.valueOf(n);

        int  yu  =  9;//  餘數
        String  shang  =  "商";//  商
        String  sum  =  "";//  最後顯示的結果
        
        int  len  =  String.valueOf(num).length();
        result  +=  "<br>10進位："  +  num +  "    →    "  +  
       		 numSys +  "進位"  +  "<br><br>";

        //  被除數  不等於0
        while  (num  !=  0)  {
              yu  =  num  /  numSys;//  餘數=被除數  /  除數
              shang  =  String.valueOf(yu  -  (yu  -  (num  %  numSys)));//  餘數
              result  +=  String.format("%1$"  +  ""  +  len  +  "d",  num) 
                          + " ÷  " +  numSys +  "    =  "
                           +  String.format("%1$"  +  ""  +  len  +  "d",  yu)  +  "  ----  "
                           +  shang  +  "<br>";
              num  =  yu;//  讓下次迴圈的  被除數=  目前的  餘數
              sum  =  toAny(shang)  +  sum;//  答案（注意【商】在前面）
        }

        result  +=  "<br>"  +  "答案：  "  +  sum;
        return result;//  顯示計算結果
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

		return  "("  +  h  +  ")";//  如果都不是，則印出原來的數字

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
	    if  (len ==  8 ) { // 8 bit處理  
	        if  (byteStr.charAt( 0 ) ==  '0' ) { //正數  
	            re = Integer.parseInt(byteStr,  2 );  
	        }  else  { //負數  
	            re = Integer.parseInt(byteStr,  2 ) -  256 ;  
	        }  
	    }  else  { // 4 bit處理  
	        re = Integer.parseInt(byteStr,  2 );  
	    }  
	    return  ( byte ) re;  
	} 

}
