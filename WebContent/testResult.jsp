<!DOCTYPE HTML><%@page import="java.util.ArrayList"%>
<%@page language="java"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	<%@page import="java.util.Enumeration" %>
	<%-- <%@page import="org.w3c.dom.*,javax.xml.parsers.*,org.apache.commons.lang.StringEscapeUtils" %>--%>
<html>
<head>
<title>testResult</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
	<%--
		String oper=request.getParameter("operation"); 
		String n1=request.getParameter("n1");
		String n2=request.getParameter("n2");
		double result=0;
		double d1=0,d2=0;
		try{
			d1=Double.parseDouble(n1);
			d2=Double.parseDouble(n2);
		}
		catch(Exception e){
			result=Double.NaN;
			out.print("Wrong input");
		}
		if(oper.equals("add"))
			result=d1+d2;			
		if(oper.equals("minus"))
			result=d1-d2;
		if(oper.equals("muti"))
			result=d1*d2;
		if(oper.equals("div"))
			result=d1/d2;	
		if(oper.equals("modulus"))
			result=d1%d2;				
	
	--%>
	<%
		String goal=request.getParameter("goal"),earn=request.getParameter("earn"),meal=request.getParameter("meal"),traffic=request.getParameter("traffic");
		double gM=0,eM=0,mM=0,tM=0;
		double month=0;
		try{
			gM=Double.parseDouble(goal);
			eM=Double.parseDouble(earn);
			mM=Double.parseDouble(meal);
			tM=Double.parseDouble(traffic);
		}
		catch(Exception e){
			month=Double.NaN;
			out.print("Wrong input");
		}
		month=gM/(eM-((mM+tM)*30));
		
		//get new textBox's value from testCalculatorMoney
		int countBox=0;
		String boxName="textBox"+countBox,text="",temp="";
		Enumeration<String> boxs=request.getParameterNames();
		if(boxs!=null){
		while(boxs.hasMoreElements()){
			temp=boxs.nextElement().toString();
			if(temp.length()>=8){
				//text+="true";
				if(temp.contains("textBox")){
					text+=temp+"\t"+request.getParameter(boxName)+"\t";
					countBox++;
					boxName="textBox"+countBox;
						
				}
			}
				
			
		}
		}
		//get new textBox's value from testCalculatorMoney
		int countCheck=0;
		String checkName="check"+countCheck,textCheck="",tempCheck="";
		String[] checks=request.getParameterValues("check");
		if(checks!=null){
		for(String s :checks){
			tempCheck=s;
			//if(tempCheck.length()>=8){
				//text+="true";
				//if(temp.contains("textBox")){
					textCheck+=tempCheck+"\tchecked\t";
					countCheck++;
					checkName="checkBox"+countCheck;
						
				//}
			//}
				
			
		}
		}
		//String strVar1=request.getParameter("var1"); 
		//String[] ts=request.getParameterValues("textBox");
		/*if(ts!=null){
			int size=java.lang.reflect.Array.getLength(ts); 
				//取得這個陣列大小 
 			for (int i=0;i<size;i++) 
  			{ 
  				memo+=ts[i]+"\t"; 
 			} 
			
		}*/
		
		String ttt = null;
		if (request.getParameter("ttt")!=null){
			ttt=request.getParameter("ttt");
		}
		String referPre = request.getParameter("refer"),refer=request.getHeader("referer");
		
		
	 %>
	Result is <%--=result --%><br>
	You need <%=month %> months or <%=month/12 %> years to reach <%=gM %><br>
	Text is:<%=text %><br>
	CheckText is:<%=textCheck %><br>
	ttt is:<%=ttt %><br>
	test String is:<%=request.getAttribute("test") %><br>
	referer Pre:<%=referPre %> ||refer Now <%=refer %><br>
	<a href="testCalculatorMoney.jsp">Back to CalculatorMoney</a><br>
	<a href="testCalulator.jsp">Back to Calculator</a>
</body>
</html>